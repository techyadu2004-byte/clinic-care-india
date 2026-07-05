import { supabase } from "../../lib/supabase";

export default async function PatientsPage() {
  const { data: patients, error } = await supabase
    .from("patients")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return <p>Error: {error.message}</p>;
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

<input
  type="text"
  placeholder="🔍 Search Patient..."
  className="mb-6 w-full rounded-lg border p-3"
/>

      <div className="rounded-xl bg-white p-6 shadow">

        <table className="w-full">

         <thead>
  <tr className="border-b">
    <th className="text-left p-3">Name</th>
    <th className="text-left p-3">Age</th>
    <th className="text-left p-3">Mobile</th>
    <th className="text-left p-3">Diagnosis</th>
    <th className="text-left p-3">Action</th>
  </tr>
</thead>
          <tbody>
  {patients?.map((patient) => (
    <tr key={patient.id} className="border-b">
      <td className="p-3">{patient.full_name}</td>

      <td className="p-3">{patient.age}</td>

      <td className="p-3">{patient.mobile}</td>

      <td className="p-3">{patient.diagnosis}</td>

      <td className="p-3">
  <div className="flex gap-2">
    <a
      href={`/patients/${patient.id}`}
      className="rounded bg-green-600 px-4 py-2 text-white"
    >
      View
    </a>

    <a
      href={`/patients/${patient.id}/edit`}
      className="rounded bg-yellow-500 px-4 py-2 text-white"
    >
      Edit
    </a>
  </div>
</td>
    </tr>
  ))}
</tbody>
        </table>

      </div>

    </main>
  );
}
