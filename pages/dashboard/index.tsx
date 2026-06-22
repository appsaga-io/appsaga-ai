import React, { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Button } from "@/components/Button";
import { DashboardLayout, useDashboardHeader } from "@/components/DashboardLayout";
import { inputClassName } from "@/lib/form";
import type { NextPageWithLayout } from "@/types/next-page";

type Task = { id: string; title: string; status: string; created_at: string };
type Leave = { id: string; leave_date: string; reason: string; status: string; created_at: string };

function DashboardSkeleton() {
  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <div className="flex-1 animate-pulse rounded-2xl border border-border/70 bg-card p-6">
        <div className="mb-4 h-6 w-32 rounded bg-border/70" />
        <div className="mb-6 h-11 rounded-2xl bg-border/70" />
        <div className="space-y-3">
          <div className="h-12 rounded-xl bg-border/70" />
          <div className="h-12 rounded-xl bg-border/70" />
          <div className="h-12 rounded-xl bg-border/70" />
        </div>
      </div>
      <div className="flex-1 animate-pulse rounded-2xl border border-border/70 bg-card p-6">
        <div className="mb-4 h-6 w-32 rounded bg-border/70" />
        <div className="mb-6 h-40 rounded-xl bg-border/70" />
        <div className="space-y-3">
          <div className="h-12 rounded-xl bg-border/70" />
          <div className="h-12 rounded-xl bg-border/70" />
        </div>
      </div>
    </div>
  );
}

function DashboardContent() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [leaves, setLeaves] = useState<Leave[]>([]);

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [leaveDate, setLeaveDate] = useState("");
  const [leaveReason, setLeaveReason] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [leaveError, setLeaveError] = useState("");
  const [taskError, setTaskError] = useState("");
  const [taskSubmitting, setTaskSubmitting] = useState(false);
  const [leaveSubmitting, setLeaveSubmitting] = useState(false);

  const router = useRouter();
  const { setWelcomeName } = useDashboardHeader();

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const [empRes, taskRes, leaveRes] = await Promise.all([
        fetch("/api/employee/me"),
        fetch("/api/employee/tasks"),
        fetch("/api/employee/leaves"),
      ]);

      if (!empRes.ok) {
        router.push("/login");
        return;
      }

      const emp = await empRes.json();
      const t = await taskRes.json();
      const l = await leaveRes.json();

      setWelcomeName(emp.name);
      setTasks(t);
      setLeaves(l);
    } catch {
      setError("Failed to load dashboard data");
      setWelcomeName(null);
    } finally {
      setLoading(false);
    }
  }, [router, setWelcomeName]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleAddTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle) return;

    setTaskSubmitting(true);
    setTaskError("");

    try {
      const res = await fetch("/api/employee/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: newTaskTitle }),
      });

      if (res.ok) {
        const newTask = await res.json();
        setTasks([newTask, ...tasks]);
        setNewTaskTitle("");
      } else {
        const data = await res.json();
        setTaskError(data.error || "Failed to add task");
      }
    } catch {
      setTaskError("Failed to add task");
    } finally {
      setTaskSubmitting(false);
    }
  };

  const handleToggleTask = async (task: Task) => {
    const newStatus = task.status === "completed" ? "pending" : "completed";
    setTaskError("");

    try {
      const res = await fetch("/api/employee/tasks", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: task.id, status: newStatus }),
      });

      if (res.ok) {
        const updatedTask = await res.json();
        setTasks(tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
      } else {
        const data = await res.json();
        setTaskError(data.error || "Failed to update task");
      }
    } catch {
      setTaskError("Failed to update task");
    }
  };

  const handleRequestLeave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLeaveError("");
    if (!leaveDate) return;

    setLeaveSubmitting(true);

    try {
      const res = await fetch("/api/employee/leaves", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ leave_date: leaveDate, reason: leaveReason }),
      });

      const data = await res.json();
      if (res.ok) {
        setLeaves([data, ...leaves]);
        setLeaveDate("");
        setLeaveReason("");
      } else {
        setLeaveError(data.error || "Failed to request leave");
      }
    } catch {
      setLeaveError("Failed to request leave");
    } finally {
      setLeaveSubmitting(false);
    }
  };

  if (loading) {
    return <DashboardSkeleton />;
  }

  return (
    <>
      <Head>
        <title>Dashboard | AppSaga</title>
      </Head>

      {error ? (
        <div
          role="alert"
          className="mb-6 flex flex-col gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 sm:flex-row sm:items-center sm:justify-between"
        >
          <span>{error}</span>
          <Button type="button" variant="secondary" size="sm" onClick={fetchData}>
            Retry
          </Button>
        </div>
      ) : null}

      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex-1 rounded-2xl border border-border/70 bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-fg">My Tasks</h2>
          <form onSubmit={handleAddTask} className="mb-6 flex flex-col gap-2 sm:flex-row">
            <div className="flex-1">
              <label htmlFor="task-title" className="sr-only">
                New task
              </label>
              <input
                id="task-title"
                type="text"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                placeholder="What needs to be done?"
                className={`${inputClassName} mt-0`}
                required
              />
            </div>
            <Button type="submit" variant="primary" disabled={taskSubmitting} className="w-full sm:w-auto">
              {taskSubmitting ? "Adding..." : "Add"}
            </Button>
          </form>

          {taskError ? (
            <div role="alert" className="mb-4 text-sm text-red-600">
              {taskError}
            </div>
          ) : null}

          <div className="space-y-3">
            {tasks.length === 0 && <p className="text-sm text-muted">No tasks yet.</p>}
            {tasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between rounded-xl border border-border/70 p-3"
              >
                <label className="flex min-h-11 min-w-11 cursor-pointer items-center gap-3">
                  <input
                    type="checkbox"
                    checked={task.status === "completed"}
                    onChange={() => handleToggleTask(task)}
                    className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                  />
                  <span
                    className={`text-sm ${
                      task.status === "completed" ? "text-muted line-through" : "text-fg"
                    }`}
                  >
                    {task.title}
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 rounded-2xl border border-border/70 bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-fg">My Leaves</h2>

          <form
            onSubmit={handleRequestLeave}
            className="mb-6 rounded-xl border border-border/70 bg-bg/50 p-4"
          >
            <h3 className="mb-3 text-base font-medium text-fg">Request Leave</h3>
            <div className="space-y-3">
              <div>
                <label htmlFor="leave-date" className="block text-sm font-medium text-fg">
                  Date
                </label>
                <input
                  id="leave-date"
                  type="date"
                  value={leaveDate}
                  onChange={(e) => setLeaveDate(e.target.value)}
                  className={inputClassName}
                  required
                />
              </div>
              <div>
                <label htmlFor="leave-reason" className="block text-sm font-medium text-fg">
                  Reason (Optional)
                </label>
                <input
                  id="leave-reason"
                  type="text"
                  value={leaveReason}
                  onChange={(e) => setLeaveReason(e.target.value)}
                  className={inputClassName}
                />
              </div>
              {leaveError ? (
                <div role="alert" className="text-sm text-red-600">
                  {leaveError}
                </div>
              ) : null}
              <Button type="submit" variant="primary" className="w-full" disabled={leaveSubmitting}>
                {leaveSubmitting ? "Submitting..." : "Submit Request"}
              </Button>
            </div>
          </form>

          <h3 className="mb-3 text-base font-medium text-fg">Leave History</h3>
          <div className="space-y-3">
            {leaves.length === 0 && <p className="text-sm text-muted">No leave requests.</p>}
            {leaves.map((leave) => (
              <div
                key={leave.id}
                className="flex flex-col gap-2 rounded-xl border border-border/70 p-3 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-sm font-medium text-fg">
                    {new Date(leave.leave_date).toLocaleDateString()}
                  </p>
                  <p className="text-xs text-muted">{leave.reason || "No reason provided"}</p>
                </div>
                <span
                  className={`rounded-full px-2 py-1 text-xs font-medium capitalize ${
                    leave.status === "approved"
                      ? "bg-green-100 text-green-800"
                      : leave.status === "rejected"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {leave.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const Page: NextPageWithLayout = DashboardContent;

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
