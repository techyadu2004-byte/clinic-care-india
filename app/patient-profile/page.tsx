export default function PatientProfile() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <div className="rounded-xl bg-white p-8 shadow-lg">

        <h1 className="text-3xl font-bold text-blue-700">
          Patient Profile
        </h1>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          <div>
            <h2 className="font-semibold">Patient Name</h2>
            <p>Rahul Sharma</p>
          </div>

          <div>
            <h2 className="font-semibold">Age</h2>
            <p>28 Years</p>
          </div>

          <div>
            <h2 className="font-semibold">Mobile</h2>
            <p>9876543210</p>
          </div>

          <div>
            <h2 className="font-semibold">Diagnosis</h2>
            <p>Low Back Pain</p>
          </div>

          <div>
            <h2 className="font-semibold">Pain Score (VAS)</h2>
            <p>7 / 10</p>
          </div>

          <div>
            <h2 className="font-semibold">Next Appointment</h2>
            <p>10 July 2026</p>
          </div>

        </div>

      </div>

    </main>
  );
}