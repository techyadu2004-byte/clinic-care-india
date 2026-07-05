"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

type Patient = {
  id: string;
  full_name: string;
  age: number;
  mobile: string;
  diagnosis: string;
};

export default function EditPatientForm({
  patient,
}: {
  patient: Patient;
}) {
  const [fullName, setFullName] = useState(patient.full_name);
  const [age, setAge] = useState(patient.age);
  const [mobile, setMobile] = useState(patient.mobile);
  const [diagnosis, setDiagnosis] = useState(patient.diagnosis);
  const [loading, setLoading] = useState(false);

  async function handleSave() {
    setLoading(true);

    const { error } = await supabase
      .from("patients")
      .update({
        full_name: fullName,
        age: age,
        mobile: mobile,
        diagnosis: diagnosis,
      })
      .eq("id", patient.id);

    setLoading(false);

    if (error) {
      alert("Error: " + error.message);
      return;
    }

    alert("✅ Patient updated successfully!");
  }

  return (
    <div className="grid gap-5">

      <input
        className="rounded-lg border p-3"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <input
        type="number"
        className="rounded-lg border p-3"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />

      <input
        className="rounded-lg border p-3"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />

      <textarea
        className="rounded-lg border p-3"
        value={diagnosis}
        onChange={(e) => setDiagnosis(e.target.value)}
      />

      <button
        onClick={handleSave}
        disabled={loading}
        className="rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700 disabled:bg-gray-400"
      >
        {loading ? "Saving..." : "Save Changes"}
      </button>

    </div>
  );
}