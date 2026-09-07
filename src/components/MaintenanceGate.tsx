import { Wrench } from "lucide-react";

/** Marketing pages stay in maintenance mode until this date (local time). */
export const MAINTENANCE_UNTIL = new Date("2026-08-25T00:00:00");

export function isUnderMaintenance(now: Date = new Date()) {
  return now < MAINTENANCE_UNTIL;
}

export function MaintenancePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-muted">
          <Wrench className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
        </div>
        <h1 className="mb-3 text-3xl font-bold tracking-tight">Under maintenance</h1>
        <p className="text-muted-foreground">
          We're making some improvements to this page. It will be back online on{" "}
          <span className="font-medium text-foreground">25 August</span>. Thanks for your patience.
        </p>
      </div>
    </main>
  );
}

export function MaintenanceGate({ children }: { children: React.ReactNode }) {
  if (isUnderMaintenance()) return <MaintenancePage />;
  return <>{children}</>;
}

export default MaintenanceGate;
