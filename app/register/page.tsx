export default function RegisterClinic() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold text-blue-700">
          Register Your Physiotherapy Clinic
        </h1>

        <div className="space-y-4">
          <input
            className="w-full rounded-lg border p-3"
            placeholder="Clinic Name"
          />

          <input
            className="w-full rounded-lg border p-3"
            placeholder="Owner Name"
          />

          <input
            className="w-full rounded-lg border p-3"
            placeholder="Mobile Number"
          />

          <input
            className="w-full rounded-lg border p-3"
            placeholder="Email"
          />

          <input
            type="password"
            className="w-full rounded-lg border p-3"
            placeholder="Password"
          />

          <button className="w-full rounded-lg bg-blue-700 p-3 text-white">
            Create Clinic
          </button>
        </div>
      </div>
    </main>
  );
}