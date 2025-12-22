
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/Button';
import Link from 'next/link';

// Helper to handle JSON fields
function JsonField({ label, value, onChange, placeholder }: { label: string, value: any, onChange: (val: any) => void, placeholder?: string }) {
    const [text, setText] = useState(JSON.stringify(value, null, 2));
    const [error, setError] = useState('');

    useEffect(() => {
        setText(JSON.stringify(value, null, 2));
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newVal = e.target.value;
        setText(newVal);
        try {
            const parsed = JSON.parse(newVal);
            onChange(parsed);
            setError('');
        } catch (e: any) {
            // Don't update parent if invalid JSON, but let user type
            setError("Invalid JSON format");
        }
    };

    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">{label}</label>
            <textarea
                className={`w-full h-40 p-3 rounded-lg border bg-white ${error ? 'border-red-500' : 'border-border/70'} font-mono text-xs`}
                value={text}
                onChange={handleChange}
                placeholder={placeholder}
            />
            {error && <span className="text-xs text-red-500">{error}</span>}
        </div>
    );
}

// Basic input field
function Input({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">{label}</label>
            <input className="w-full p-2 border border-border/70 rounded-lg bg-white" {...props} />
        </div>
    )
}

function TextArea({ label, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">{label}</label>
            <textarea className="w-full p-2 border border-border/70 rounded-lg bg-white h-24" {...props} />
        </div>
    )
}

export default function CourseEditor() {
    const router = useRouter();
    const { id } = router.query;
    const isEdit = Boolean(id);

    const [loading, setLoading] = useState(false);
    const [pageLoading, setPageLoading] = useState(isEdit);
    const [error, setError] = useState('');

    const [formData, setFormData] = useState<any>({
        slug: '',
        title: '',
        description_short: '',
        description_long: '',
        duration: '',
        mode: '',
        level: '',
        prerequisites: '',
        certification: '',
        benefits: [],
        includes_list: [],
        outcomes: [],
        curriculum: [],
        stack: [],
        details: [],
    });

    useEffect(() => {
        if (isEdit && id) {
            setPageLoading(true);
            fetch(`/api/courses/${id}`)
                .then(res => {
                    if (!res.ok) throw new Error('Failed to load course');
                    return res.json();
                })
                .then(data => {
                    setFormData(data);
                    setPageLoading(false);
                })
                .catch(err => {
                    setError(err.message);
                    setPageLoading(false);
                });
        }
    }, [id, isEdit]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const url = isEdit ? `/api/courses/${id}` : '/api/courses';
            const method = isEdit ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Something went wrong');
            }

            router.push('/appsaga-admin/courses');

        } catch (err: any) {
            setError(err.message);
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this course?")) return;
        setLoading(true);
        try {
            const res = await fetch(`/api/courses/${id}`, { method: 'DELETE' });
            if (!res.ok) throw new Error("Failed to delete");
            router.push('/appsaga-admin/courses');
        } catch (err: any) {
            setError(err.message);
            setLoading(false);
        }
    }

    const handleChange = (field: string, value: any) => {
        setFormData((prev: any) => ({ ...prev, [field]: value }));
    }

    if (pageLoading) return <div className="p-20 text-center">Loading editor...</div>;

    return (
        <>
            <Head>
                <title>{isEdit ? `Edit ${formData.title}` : 'New Course'} | Admin</title>
            </Head>
            <section className="py-20 bg-bg">
                <Container>
                    <div className="mb-8">
                        <Link href="/appsaga-admin/courses" className="text-sm text-primary hover:underline">← Back to Courses</Link>
                    </div>

                    <SectionHeading
                        title={isEdit ? `Edit Course` : "Create New Course"}
                        description={isEdit ? `Editing: ${formData.title}` : "Enter course details below."}
                    />

                    {error && <div className="my-6 p-4 bg-red-50 text-red-600 rounded-lg">{error}</div>}

                    <form onSubmit={handleSubmit} className="mt-10 grid gap-8 max-w-4xl mx-auto bg-white p-8 rounded-2xl border border-border/70 shadow-sm">

                        <div className="grid md:grid-cols-2 gap-6">
                            <Input label="Slug (URL)" value={formData.slug || ''} onChange={e => handleChange('slug', e.target.value)} required placeholder="e.g. ai-360" />
                            <Input label="Title" value={formData.title || ''} onChange={e => handleChange('title', e.target.value)} required placeholder="Course Title" />
                        </div>

                        <TextArea label="Short Description" value={formData.description_short || ''} onChange={e => handleChange('description_short', e.target.value)} />
                        <TextArea label="Long Description" value={formData.description_long || ''} onChange={e => handleChange('description_long', e.target.value)} />

                        <div className="grid md:grid-cols-2 gap-6">
                            <Input label="Duration" value={formData.duration || ''} onChange={e => handleChange('duration', e.target.value)} />
                            <Input label="Mode" value={formData.mode || ''} onChange={e => handleChange('mode', e.target.value)} />
                            <Input label="Level" value={formData.level || ''} onChange={e => handleChange('level', e.target.value)} />
                            <Input label="Prerequisites" value={formData.prerequisites || ''} onChange={e => handleChange('prerequisites', e.target.value)} />
                            <Input label="Certification Name" value={formData.certification || ''} onChange={e => handleChange('certification', e.target.value)} />
                        </div>

                        <div className="border-t border-border/70 pt-6">
                            <h3 className="text-lg font-semibold mb-4">Complex Data (JSON)</h3>
                            <div className="grid gap-6">
                                <JsonField label="Benefits (Array of strings)" value={formData.benefits} onChange={v => handleChange('benefits', v)} />
                                <JsonField label="Includes (Array of strings)" value={formData.includes_list} onChange={v => handleChange('includes_list', v)} />
                                <JsonField label="Outcomes (Array of strings)" value={formData.outcomes} onChange={v => handleChange('outcomes', v)} />
                                <JsonField label="Stack (Array of strings)" value={formData.stack} onChange={v => handleChange('stack', v)} />
                                <JsonField label="Curriculum (Array of objects)" value={formData.curriculum} onChange={v => handleChange('curriculum', v)} />
                                <JsonField label="Details (Array of objects)" value={formData.details} onChange={v => handleChange('details', v)} />
                            </div>
                        </div>

                        <div className="flex items-center gap-4 pt-6 border-t border-border/70">
                            <Button type="submit" variant="primary" size="lg" disabled={loading}>
                                {loading ? 'Saving...' : 'Save Course'}
                            </Button>

                            {isEdit && (
                                <button type="button" onClick={handleDelete} className="text-red-600 hover:text-red-700 text-sm font-medium ml-auto" disabled={loading}>
                                    Delete Course
                                </button>
                            )}
                        </div>
                    </form>
                </Container>
            </section>
        </>
    );
}
