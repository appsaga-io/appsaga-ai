
import type { NextApiRequest, NextApiResponse } from "next";
import pool from "@/lib/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    if (req.method === "GET") {
        try {
            if (!pool) {
                throw new Error("Parameters not configured");
            }
            const client = await pool.connect();
            try {
                const result = await client.query('SELECT * FROM courses WHERE id = $1', [id]);
                if (result.rows.length === 0) {
                    return res.status(404).json({ error: "Course not found" });
                }
                return res.status(200).json(result.rows[0]);
            } finally {
                client.release();
            }
        } catch (e: any) {
            console.error(e);
            return res.status(500).json({ error: e.message || "Database error" });
        }
    }

    if (req.method === "PUT") {
        try {
            if (!pool) {
                throw new Error("Parameters not configured");
            }
            const body = req.body;
            const {
                slug, title, description_short, description_long,
                duration, mode, level, prerequisites, benefits,
                includes_list, outcomes, certification, curriculum, stack, details
            } = body;

            const client = await pool.connect();
            try {
                const result = await client.query(
                    `UPDATE courses SET
            slug = COALESCE($1, slug),
            title = COALESCE($2, title),
            description_short = COALESCE($3, description_short),
            description_long = COALESCE($4, description_long),
            duration = COALESCE($5, duration),
            mode = COALESCE($6, mode),
            level = COALESCE($7, level),
            prerequisites = COALESCE($8, prerequisites),
            benefits = COALESCE($9, benefits),
            includes_list = COALESCE($10, includes_list),
            outcomes = COALESCE($11, outcomes),
            certification = COALESCE($12, certification),
            curriculum = COALESCE($13, curriculum),
            stack = COALESCE($14, stack),
            details = COALESCE($15, details),
            updated_at = now()
           WHERE id = $16
           RETURNING *`,
                    [
                        slug, title, description_short, description_long,
                        duration, mode, level, prerequisites,
                        benefits ? JSON.stringify(benefits) : null,
                        includes_list ? JSON.stringify(includes_list) : null,
                        outcomes ? JSON.stringify(outcomes) : null,
                        certification,
                        curriculum ? JSON.stringify(curriculum) : null,
                        stack ? JSON.stringify(stack) : null,
                        details ? JSON.stringify(details) : null,
                        id
                    ]
                );

                if (result.rows.length === 0) {
                    return res.status(404).json({ error: "Course not found" });
                }
                return res.status(200).json(result.rows[0]);
            } finally {
                client.release();
            }
        } catch (e: any) {
            console.error(e);
            if (e.code === "23505") {
                return res.status(409).json({ error: "Course with this slug already exists" });
            }
            return res.status(500).json({ error: e.message || "Database error" });
        }
    }

    if (req.method === "DELETE") {
        try {
            if (!pool) {
                throw new Error("Parameters not configured");
            }
            const client = await pool.connect();
            try {
                const result = await client.query('DELETE FROM courses WHERE id = $1 RETURNING id', [id]);
                if (result.rows.length === 0) {
                    return res.status(404).json({ error: "Course not found" });
                }
                return res.status(200).json({ success: true });
            } finally {
                client.release();
            }
        } catch (e: any) {
            console.error(e);
            return res.status(500).json({ error: e.message || "Database error" });
        }
    }

    res.setHeader("Allow", "GET, PUT, DELETE");
    return res.status(405).json({ error: "Method not allowed" });
}
