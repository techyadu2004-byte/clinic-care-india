import Sidebar from "../../components/Sidebar";
import { supabase } from "../../lib/supabase";

export default async function Appointments() {
  const { data: appointments, error } = await supabase
    .from("appointments")
    .select(`
      *,
      patients (
        full_name
      )
    `)
    .order("appointment_date", { ascending: true })
    .order("appointment_time", { ascending: true });

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
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Time</th>
                <th className="p-3 text-left">Purpose</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>

            <tbody>

              {error && (
                <tr>
                  <td className="p-3 text-red-600" colSpan={5}>
                    {error.message}
                  </td>
                </tr>
              )}

              {!error && appointments?.length === 0 && (
                <tr>
                  <td className="p-3" colSpan={5}>
                    No appointments found.
                  </td>
                </tr>
              )}

              {appointments?.map((appointment: any) => (
                <tr key={appointment.id} className="border-b">

                  <td className="p-3">
                    {appointment.patients?.full_name}
                  </td>

                  <td className="p-3">
                    {appointment.appointment_date}
                  </td>

                  <td className="p-3">
                    {appointment.appointment_time}
                  </td>

                  <td className="p-3">
                    {appointment.purpose}
                  </td>

                  <td className="p-3">
                    {appointment.status}
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </main>
    </div>
  );
}