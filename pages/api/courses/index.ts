
import type { NextApiRequest, NextApiResponse } from "next";
import pool from "@/lib/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        try {
            if (!pool) {
                throw new Error("Parameters not configured");
            }
            const client = await pool.connect();
            try {
                // Simple list, maybe select specific fields if the table gets huge, but for now * is fine
                const result = await client.query('SELECT * FROM courses ORDER BY created_at DESC');
                return res.status(200).json(result.rows);
            } finally {
                client.release();
            }
        } catch (e: any) {
            console.error(e);
            return res.status(500).json({ error: e.message || "Database error" });
        }
    }

    if (req.method === "POST") {
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

            // Basic validation
            if (!slug || !title) {
                return res.status(400).json({ error: "Slug and Title are required" });
            }

            const client = await pool.connect();
            try {
                const result = await client.query(
                    `INSERT INTO courses (
            slug, title, description_short, description_long,
            duration, mode, level, prerequisites,
            benefits, includes_list, outcomes,
            certification, curriculum, stack, details
          ) VALUES (
            $1, $2, $3, $4, $5, $6, $7, $8,
            $9, $10, $11, $12, $13, $14, $15
          ) RETURNING *`,
                    [
                        slug, title, description_short, description_long,
                        duration, mode, level, prerequisites,
                        JSON.stringify(benefits || []),
                        JSON.stringify(includes_list || []),
                        JSON.stringify(outcomes || []),
                        certification,
                        JSON.stringify(curriculum || []),
                        JSON.stringify(stack || []),
                        JSON.stringify(details || []),
                    ]
                );
                return res.status(201).json(result.rows[0]);
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

    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({ error: "Method not allowed" });
}
