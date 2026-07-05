import { supabase } from "../../../../lib/supabase";

export default async function EditPatient({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: patient, error } = await supabase
    .from("patients")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !patient) {
    return (
      <main className="p-8">
        <h1 className="text-2xl font-bold text-red-600">
          Patient Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-lg">

        <h1 className="mb-8 text-3xl font-bold text-blue-700">
          Edit Patient
        </h1>

        <div className="grid gap-5">

          <input
            className="rounded-lg border p-3"
            value={patient.full_name}
            readOnly
          />

          <input
            className="rounded-lg border p-3"
            value={patient.age}
            readOnly
          />

          <input
            className="rounded-lg border p-3"
            value={patient.mobile}
            readOnly
          />

          <textarea
            className="rounded-lg border p-3"
            value={patient.diagnosis}
            readOnly
          />

          <button className="rounded-lg bg-blue-600 py-3 text-white">
            Save Changes
          </button>

        </div>

      </div>
    </main>
  );
}