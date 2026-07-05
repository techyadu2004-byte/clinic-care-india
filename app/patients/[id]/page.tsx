import { supabase } from "../../../lib/supabase";
import StatCard from "../../../components/StatCard";

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

const { count: assessmentCount } = await supabase
  .from("assessments")
  .select("*", { count: "exact", head: true })
  .eq("patient_id", id);

const { count: treatmentCount } = await supabase
  .from("treatment_notes")
  .select("*", { count: "exact", head: true })
  .eq("patient_id", id);

const { count: appointmentCount } = await supabase
  .from("appointments")
  .select("*", { count: "exact", head: true })
  .eq("patient_id", id);

const { data: latestAssessment } = await supabase
  .from("assessments")
  .select("pain_score, created_at")
  .eq("patient_id", id)
  .order("created_at", { ascending: false })
  .limit(1)
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
    <div className="mx-auto max-w-6xl rounded-xl bg-white p-8 shadow-lg">

      <h1 className="mb-8 text-3xl font-bold text-blue-700">
        Patient Profile
      </h1>

      {/* Patient Details */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

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

      {/* Patient Summary */}
      <div className="mt-8 rounded-xl border border-blue-100 bg-white p-6 shadow">

        <div className="flex items-center justify-between">

          <div>
            <h2 className="text-2xl font-bold text-blue-700">
              Patient Summary
            </h2>

            <p className="text-gray-600">
              Current treatment overview
            </p>
          </div>

          <span className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
            🟢 Active
          </span>

        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">

          <div>
            <p className="text-gray-500">Latest Pain Score</p>

            <p className="text-4xl font-bold text-red-600">
              {latestAssessment?.pain_score ?? "-"} / 10
            </p>
          </div>

          <div>
            <p className="text-gray-500">Last Assessment</p>

            <p className="text-xl font-semibold">
              {latestAssessment
                ? new Date(latestAssessment.created_at).toLocaleDateString()
                : "No Assessment"}
            </p>
          </div>

        </div>

      </div>

      {/* Statistics */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">

  <StatCard
    title="Assessments"
    value={assessmentCount ?? 0}
    bgColor="bg-blue-100"
    textColor="text-blue-700"
  />

  <StatCard
    title="Treatments"
    value={treatmentCount ?? 0}
    bgColor="bg-green-100"
    textColor="text-green-700"
  />

  <StatCard
    title="Appointments"
    value={appointmentCount ?? 0}
    bgColor="bg-purple-100"
    textColor="text-purple-700"
  />

</div>

      {/* Quick Actions */}
      <div className="mt-10 flex flex-wrap gap-4">

        <a
          href={`/patients/${patient.id}/assessment`}
          className="rounded-lg bg-purple-600 px-6 py-3 text-white hover:bg-purple-700"
        >
          🩺 Start Assessment
        </a>

        <a
          href={`/patients/${patient.id}/history`}
          className="rounded-lg bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700"
        >
          📋 Assessment History
        </a>

        <a
          href={`/patients/${patient.id}/treatment`}
          className="rounded-lg bg-green-600 px-6 py-3 text-white hover:bg-green-700"
        >
          💪 Treatment Notes
        </a>

        <a
          href={`/patients/${patient.id}/treatment-history`}
          className="rounded-lg bg-cyan-600 px-6 py-3 text-white hover:bg-cyan-700"
        >
          📖 Treatment History
        </a>

      </div>

    </div>
  </main>
);
}