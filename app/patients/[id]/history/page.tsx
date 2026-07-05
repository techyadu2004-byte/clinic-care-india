import { supabase } from "../../../../lib/supabase";

export default async function AssessmentHistoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: patient } = await supabase
    .from("patients")
    .select("full_name")
    .eq("id", id)
    .single();

  const { data: assessments, error } = await supabase
    .from("assessments")
    .select("*")
    .eq("patient_id", id)
    .order("created_at", { ascending: false });

  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <div className="mx-auto max-w-5xl rounded-xl bg-white p-8 shadow-lg">

        <h1 className="mb-2 text-4xl font-bold text-blue-700">
          Assessment History
        </h1>

        <p className="mb-8 text-lg text-gray-600">
          Patient: <strong>{patient?.full_name}</strong>
        </p>

        {error && (
          <p className="text-red-600">{error.message}</p>
        )}

        {!error && assessments?.length === 0 && (
          <p>No assessments found.</p>
        )}

        <div className="space-y-6">

          {assessments?.map((assessment) => (
            <div
              key={assessment.id}
              className="rounded-lg border bg-gray-50 p-6 shadow-sm"
            >
              <h2 className="text-xl font-bold text-blue-700">
                Visit:{" "}
                {new Date(
                  assessment.created_at
                ).toLocaleDateString()}
              </h2>

              <div className="mt-4 grid grid-cols-2 gap-4">

                <div>
                  <p className="font-semibold">
                    Chief Complaint
                  </p>
                  <p>{assessment.chief_complaint}</p>
                </div>

                <div>
                  <p className="font-semibold">
                    Pain Score
                  </p>
                  <p>{assessment.pain_score}/10</p>
                </div>

                <div>
                  <p className="font-semibold">
                    Diagnosis
                  </p>
                  <p>{assessment.diagnosis}</p>
                </div>

                <div>
                  <p className="font-semibold">
                    Treatment
                  </p>
                  <p>{assessment.treatment}</p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </main>
  );
}