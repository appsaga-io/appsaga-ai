
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { Card } from '@/components/Card';

export default function AdminDashboard() {
    return (
        <>
            <Head>
                <title>Admin Dashboard | AppSaga</title>
            </Head>
            <section className="py-20">
                <Container>
                    <SectionHeading
                        eyebrow="Appsaga"
                        title="Admin Dashboard"
                        description="Manage your website content."
                    />

                    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <Link href="/appsaga-admin/courses">
                            <Card className="h-full hover:border-primary/50 transition-colors cursor-pointer group">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl group-hover:scale-110 transition-transform">
                                        📚
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">Courses</h3>
                                        <p className="text-sm text-muted mt-1">Manage training programs</p>
                                    </div>
                                </div>
                            </Card>
                        </Link>

                        {/* Placeholder for future modules */}
                        <Card className="h-full opacity-50">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-xl">
                                    🔧
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-muted">Settings</h3>
                                    <p className="text-sm text-muted mt-1">Coming soon</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </Container>
            </section>
        </>
    );
}
