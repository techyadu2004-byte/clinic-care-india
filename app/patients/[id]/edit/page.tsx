import { supabase } from "../../../../lib/supabase";
import EditPatientForm from "../../../../components/EditPatientForm";

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

        <EditPatientForm patient={patient} />

      </div>

    </main>
  );
}