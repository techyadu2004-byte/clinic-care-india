import Sidebar from "../../components/Sidebar";

export default function Appointments() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 bg-gray-100 p-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-4xl font-bold text-blue-700">
            Appointments
          </h1>

          <a
            href="/appointments/new"
            className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
          >
            + New Appointment
          </a>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-lg">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="p-3 text-left">Patient</th>
                <th className="p-3 text-left">Doctor</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Time</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="p-3">No appointments yet</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}