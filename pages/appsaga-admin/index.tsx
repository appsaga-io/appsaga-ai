
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { AdminLayout } from "@/components/AdminLayout";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";
import type { NextPageWithLayout } from "@/types/next-page";

function CoursesIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 19.5A2.5 2.5 0 016.5 17H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 15a3 3 0 100-6 3 3 0 000 6z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AdminDashboard() {
  return (
    <>
      <Head>
        <title>Admin Dashboard | AppSaga</title>
      </Head>
      <section className="py-12">
        <Container>
          <SectionHeading
            eyebrow="Appsaga"
            title="Admin Dashboard"
            description="Manage your website content."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/appsaga-admin/courses">
              <Card className="group h-full cursor-pointer transition-colors hover:border-primary/50">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                    <CoursesIcon />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-fg">Courses</h3>
                    <p className="mt-1 text-sm text-muted">Manage training programs</p>
                  </div>
                </div>
              </Card>
            </Link>

            <Card className="h-full opacity-50">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-card text-muted">
                  <SettingsIcon />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-muted">Settings</h3>
                  <p className="mt-1 text-sm text-muted">Coming soon</p>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}

const Page: NextPageWithLayout = AdminDashboard;

Page.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default Page;
