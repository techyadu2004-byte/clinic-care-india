import { supabase } from "../../../lib/supabase";

export default async function PatientProfile({
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
      <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-lg">

        <h1 className="mb-8 text-3xl font-bold text-blue-700">
          Patient Profile
        </h1>

        <div className="grid grid-cols-2 gap-6">

          <div>
            <p className="font-semibold">Full Name</p>
            <p>{patient.full_name}</p>
          </div>

          <div>
            <p className="font-semibold">Age</p>
            <p>{patient.age}</p>
          </div>

          <div>
            <p className="font-semibold">Mobile</p>
            <p>{patient.mobile}</p>
          </div>

          <div>
            <p className="font-semibold">Diagnosis</p>
            <p>{patient.diagnosis}</p>
          </div>

        </div>

      </div>
    </main>
  );
}