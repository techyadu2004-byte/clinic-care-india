import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-blue-700 text-white p-6">

      <h1 className="mb-8 text-2xl font-bold">
        Clinic Care India
      </h1>

      <nav className="flex flex-col gap-4">

        <Link
          href="/dashboard"
          className="rounded p-2 hover:bg-blue-800"
        >
          🏠 Dashboard
        </Link>

        <Link
          href="/patients"
          className="rounded p-2 hover:bg-blue-800"
        >
          👤 Patients
        </Link>

        <Link
          href="/appointments"
          className="rounded p-2 hover:bg-blue-800"
        >
          📅 Appointments
        </Link>

        <Link
          href="/staff"
          className="rounded p-2 hover:bg-blue-800"
        >
          👨‍⚕️ Staff
        </Link>

        <Link
          href="/billing"
          className="rounded p-2 hover:bg-blue-800"
        >
          💳 Billing
        </Link>

        <Link
          href="/reports"
          className="rounded p-2 hover:bg-blue-800"
        >
          📊 Reports
        </Link>

        <Link
          href="/settings"
          className="rounded p-2 hover:bg-blue-800"
        >
          ⚙️ Settings
        </Link>

      </nav>

    </aside>
  );
}