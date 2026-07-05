"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

type Patient = {
  id: string;
  full_name: string;
};

export default function AppointmentForm() {
  const [patients, setPatients] = useState<Patient[]>([]);

  const [patientId, setPatientId] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [purpose, setPurpose] = useState("");
  const [status, setStatus] = useState("Scheduled");

  useEffect(() => {
    async function loadPatients() {
      const { data } = await supabase
        .from("patients")
        .select("id, full_name")
        .order("full_name");

      if (data) setPatients(data);
    }

    loadPatients();
  }, []);

  async function saveAppointment() {
    const { error } = await supabase.from("appointments").insert([
      {
        patient_id: patientId,
        appointment_date: appointmentDate,
        appointment_time: appointmentTime,
        purpose,
        status,
      },
    ]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("✅ Appointment Saved!");

    setPatientId("");
    setAppointmentDate("");
    setAppointmentTime("");
    setPurpose("");
    setStatus("Scheduled");
  }

  return (
    <div className="grid gap-5">

      <select
        className="rounded-lg border p-3"
        value={patientId}
        onChange={(e) => setPatientId(e.target.value)}
      >
        <option value="">Select Patient</option>

        {patients.map((patient) => (
          <option key={patient.id} value={patient.id}>
            {patient.full_name}
          </option>
        ))}

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

      <textarea
        className="rounded-lg border p-3"
        placeholder="Purpose of Appointment"
        value={purpose}
        onChange={(e) => setPurpose(e.target.value)}
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

      <button
        onClick={saveAppointment}
        className="rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700"
      >
        Save Appointment
      </button>

    </div>
  );
}