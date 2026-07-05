export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold text-blue-700">
          Clinic Care India
        </h1>

        <p className="mb-6 text-center text-gray-600">
          Login with your mobile number
        </p>

        <input
          type="tel"
          placeholder="Enter Mobile Number"
          className="mb-4 w-full rounded-lg border p-3"
        />

        <button className="w-full rounded-lg bg-blue-700 p-3 text-white">
          Send OTP
        </button>
      </div>
    </main>
  );
}