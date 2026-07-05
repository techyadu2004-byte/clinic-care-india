"use client";

import { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import { supabase } from "../../../lib/supabase";

export default function NewAppointment() {

  const [patientId, setPatientId] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [therapist, setTherapist] = useState("");
  const [status, setStatus] = useState("Scheduled");
  const [notes, setNotes] = useState("");
  async function saveAppointment() {
  const { error } = await supabase.from("appointments").insert([
    {
      patient_id: patientId,
      appointment_date: appointmentDate,
      appointment_time: appointmentTime,
      therapist,
      status,
      notes,
    },
  ]);

  if (error) {
    alert(error.message);
  } else {
    alert("Appointment Saved Successfully!");
  }
}
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 bg-gray-100 p-8">
        <h1 className="mb-8 text-4xl font-bold text-blue-700">
          New Appointment
        </h1>

        <div className="max-w-2xl rounded-xl bg-white p-8 shadow-lg">

          <div className="grid gap-5">

            <select
  className="rounded-lg border p-3"
  value={patientId}
  onChange={(e) => setPatientId(e.target.value)}
>
  <option value="">Select Patient</option>

  <option value="PATIENT_ID">
    Demo Patient
  </option>

</select>

            <input
  type="date"
  className="rounded-lg border p-3"
  value={appointmentDate}
  onChange={(e) => setAppointmentDate(e.target.value)}
/>

            <input
  type="time"
  className="rounded-lg border p-3"
  value={appointmentTime}
  onChange={(e) => setAppointmentTime(e.target.value)}
/>

            <input
  className="rounded-lg border p-3"
  placeholder="Therapist Name"
  value={therapist}
  onChange={(e) => setTherapist(e.target.value)}
/>

            <select
  className="rounded-lg border p-3"
  value={status}
  onChange={(e) => setStatus(e.target.value)}
>
              <option>Scheduled</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>

            <textarea
  className="rounded-lg border p-3"
  placeholder="Notes"
  value={notes}
  onChange={(e) => setNotes(e.target.value)}
/>

            <button
  onClick={saveAppointment}
  className="rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700"
>
  Save Appointment
</button>

          </div>

        </div>

      </main>
    </div>
  );
}