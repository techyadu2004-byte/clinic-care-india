export default function NewAssessment() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-lg">

        <h1 className="mb-8 text-3xl font-bold text-blue-700">
          Physiotherapy Assessment
        </h1>

        <div className="grid gap-5">

          <input
            className="rounded-lg border p-3"
            placeholder="Patient ID"
          />

          <textarea
            className="rounded-lg border p-3"
            placeholder="Chief Complaint"
          />

          <input
            type="number"
            min="0"
            max="10"
            className="rounded-lg border p-3"
            placeholder="Pain Score (VAS 0-10)"
          />

          <textarea
            className="rounded-lg border p-3"
            placeholder="Range of Motion (ROM)"
          />

          <textarea
            className="rounded-lg border p-3"
            placeholder="Muscle Strength (MMT)"
          />

          <textarea
            className="rounded-lg border p-3"
            placeholder="Clinical Diagnosis"
          />

          <textarea
            className="rounded-lg border p-3"
            placeholder="Treatment Plan"
          />

          <textarea
            className="rounded-lg border p-3"
            placeholder="Home Exercise Program"
          />

          <button className="rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700">
            Save Assessment
          </button>

        </div>

      </div>

    </main>
  );
}