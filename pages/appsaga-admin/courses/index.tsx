
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { AdminLayout } from '@/components/AdminLayout';
import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { ButtonLink } from '@/components/Button';
import { Badge } from '@/components/Badge';
import type { NextPageWithLayout } from '@/types/next-page';

type Course = {
    id: string;
    slug: string;
    title: string;
    mode: string;
    duration: string;
};

function AdminCoursesList() {
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
            <section className="py-12 sm:py-20">
                <Container>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <SectionHeading
                            eyebrow="Admin"
                            title="Manage Courses"
                            description="View, edit, or create new courses."
                        />
                        <ButtonLink href="/appsaga-admin/courses/editor" variant="primary" className="w-full shrink-0 sm:w-auto">
                            + New Course
                        </ButtonLink>
                    </div>

                    {error && <div className="mt-6 rounded-lg bg-red-50 p-4 text-red-600">{error}</div>}

                    {loading ? (
                        <div className="mt-10 text-center text-muted">Loading courses...</div>
                    ) : courses.length === 0 ? (
                        <div className="mt-10 rounded-2xl border border-border/70 bg-card p-10 text-center text-sm text-muted">
                            No courses found. Create one to get started.
                        </div>
                    ) : (
                        <>
                            <div className="mt-10 hidden overflow-x-auto rounded-2xl border border-border/70 bg-card md:block">
                                <table className="min-w-full divide-y divide-border/70">
                                    <thead className="bg-bg/50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted">Title</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted">Slug</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted">Mode</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted">Duration</th>
                                            <th scope="col" className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border/70 bg-card">
                                        {courses.map((course) => (
                                            <tr key={course.id}>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm font-medium text-fg">{course.title}</div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-muted">{course.slug}</div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <Badge>{course.mode}</Badge>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-muted">
                                                    {course.duration}
                                                </td>
                                                <td className="px-6 py-4 text-right text-sm font-medium">
                                                    <Link href={`/appsaga-admin/courses/editor?id=${course.id}`} className="text-primary hover:text-primary/80">
                                                        Edit
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-10 grid gap-4 md:hidden">
                                {courses.map((course) => (
                                    <div
                                        key={course.id}
                                        className="rounded-2xl border border-border/70 bg-card p-4"
                                    >
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="min-w-0">
                                                <h3 className="text-sm font-semibold text-fg">{course.title}</h3>
                                                <p className="mt-1 truncate text-sm text-muted">{course.slug}</p>
                                            </div>
                                            <Link
                                                href={`/appsaga-admin/courses/editor?id=${course.id}`}
                                                className="shrink-0 text-sm font-medium text-primary hover:text-primary/80"
                                            >
                                                Edit
                                            </Link>
                                        </div>
                                        <div className="mt-3 flex flex-wrap items-center gap-2">
                                            <Badge>{course.mode}</Badge>
                                            <span className="text-xs text-muted">{course.duration}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </Container>
            </section>
        </>
    );
}

const Page: NextPageWithLayout = AdminCoursesList;

Page.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default Page;
