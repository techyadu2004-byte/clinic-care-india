export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-blue-700 text-white p-6">

      <h1 className="text-2xl font-bold mb-8">
        Clinic Care India
      </h1>

      <nav className="flex flex-col gap-4">

        <a href="/dashboard">🏠 Dashboard</a>

        <a href="/patients">👤 Patients</a>

        <a href="/appointments">📅 Appointments</a>

        <a href="/staff">👨‍⚕️ Staff</a>

        <a href="/billing">💳 Billing</a>

        <a href="/reports">📊 Reports</a>

        <a href="/settings">⚙️ Settings</a>

      </nav>

    </aside>
  );
}