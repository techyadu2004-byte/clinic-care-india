import Sidebar from "../../../components/Sidebar";
import AppointmentForm from "../../../components/AppointmentForm";

export default function NewAppointment() {
  return (
    <div className="flex">

      <Sidebar />

      <main className="flex-1 bg-gray-100 p-8">

        <h1 className="mb-8 text-4xl font-bold text-blue-700">
          New Appointment
        </h1>

        <div className="max-w-2xl rounded-xl bg-white p-8 shadow-lg">

          <AppointmentForm />

        </div>

      </main>

    </div>
  );
}