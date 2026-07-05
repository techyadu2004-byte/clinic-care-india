import { supabase } from "../../../../lib/supabase";
import AssessmentForm from "../../../../components/AssessmentForm";

export default async function AssessmentPage({
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

      <div className="mx-auto max-w-5xl rounded-xl bg-white p-8 shadow-lg">

        <h1 className="mb-8 text-4xl font-bold text-blue-700">
          Physiotherapy Assessment
        </h1>

        <div className="mb-8 grid grid-cols-2 gap-6">

          <div>
            <p className="font-semibold">Patient Name</p>
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
            <p className="font-semibold">Visit Date</p>
            <p>{new Date().toLocaleDateString()}</p>
          </div>

        </div>

        <hr className="mb-8" />

        <AssessmentForm patientId={patient.id} />

      </div>

    </main>
  );
}