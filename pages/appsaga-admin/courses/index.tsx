
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { ButtonLink } from '@/components/Button';
import { Badge } from '@/components/Badge';

type Course = {
    id: string;
    slug: string;
    title: string;
    mode: string;
    duration: string;
};

export default function AdminCoursesList() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('/api/courses')
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch courses');
                return res.json();
            })
            .then(data => {
                setCourses(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <Head>
                <title>Admin - Courses | AppSaga</title>
            </Head>
            <section className="py-20">
                <Container>
                    <div className="flex items-center justify-between">
                        <SectionHeading
                            eyebrow="Admin"
                            title="Manage Courses"
                            description="View, edit, or create new courses."
                        />
                        <ButtonLink href="/appsaga-admin/courses/editor" variant="primary">
                            + New Course
                        </ButtonLink>
                    </div>

                    {error && <div className="mt-6 p-4 bg-red-50 text-red-600 rounded-lg">{error}</div>}

                    {loading ? (
                        <div className="mt-10 text-center text-muted">Loading courses...</div>
                    ) : (
                        <div className="mt-10 overflow-hidden bg-white border border-border/70 rounded-2xl">
                            <table className="min-w-full divide-y divide-border/70">
                                <thead className="bg-bg/50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">Title</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">Slug</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">Mode</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">Duration</th>
                                        <th scope="col" className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-border/70">
                                    {courses.map((course) => (
                                        <tr key={course.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-fg">{course.title}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-muted">{course.slug}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <Badge>{course.mode}</Badge>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-muted">
                                                {course.duration}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <Link href={`/appsaga-admin/courses/editor?id=${course.id}`} className="text-primary hover:text-primary/80">
                                                    Edit
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                    {courses.length === 0 && (
                                        <tr>
                                            <td colSpan={5} className="px-6 py-10 text-center text-sm text-muted">
                                                No courses found. Create one to get started.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}
                </Container>
            </section>
        </>
    );
}
