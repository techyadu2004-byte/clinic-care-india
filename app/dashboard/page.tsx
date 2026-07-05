import Sidebar from "../../components/Sidebar";
import DashboardCard from "../../components/DashboardCard";

import { supabase } from "../../lib/supabase";

export default async function Dashboard() {
  const { count } = await supabase
  .from("patients")
  .select("*", { count: "exact", head: true });
  return (
    <div className="flex">

      <Sidebar />

      <main className="flex-1 bg-gray-100 p-8">

  <h1 className="text-4xl font-bold text-blue-700">
    Clinic Care India Dashboard
  </h1>

  <p className="mt-2 text-gray-600">
    Welcome Dr. Vivek 👋
  </p>

  <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

    <DashboardCard
  title="Total Patients"
  value={count ?? 0}
  color="text-blue-700"
/>

    <DashboardCard
  title="Today's Appointments"
  value={0}
  color="text-green-600"
/>

    <DashboardCard
  title="Staff Members"
  value={0}
  color="text-orange-600"
/>

    <DashboardCard
  title="Today's Revenue"
  value="₹0"
  color="text-purple-600"
/>
  </div>

  <div className="mt-10 flex flex-wrap gap-4">

    <a
      href="/add-patient"
      className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
    >
      ➕ Add Patient
    </a>

    <a
      href="/patients"
      className="rounded-lg bg-green-600 px-6 py-3 text-white hover:bg-green-700"
    >
      👨‍⚕️ View Patients
    </a>

  </div>

</main>

    </div>
  );
}