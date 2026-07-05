import { supabase } from "../../lib/supabase";
import PatientList from "../../components/PatientList";

export default async function PatientsPage() {
  const { data: patients, error } = await supabase
    .from("patients")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <main className="min-h-screen p-8">
        <p className="text-red-600">Error: {error.message}</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-4xl font-bold text-blue-700">
          Patients
        </h1>

        <a
          href="/add-patient"
          className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
        >
          + Add Patient
        </a>
      </div>

      <PatientList patients={patients ?? []} />

    </main>
  );
}