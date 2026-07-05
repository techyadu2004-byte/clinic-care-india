"use client";
import { useState } from "react";
import { supabase } from "../../lib/supabase";
export default function AddPatient() {
  const [fullName, setFullName] = useState("");
const [age, setAge] = useState("");
const [mobile, setMobile] = useState("");
const [diagnosis, setDiagnosis] = useState("");
async function savePatient() {
  const { error } = await supabase.from("patients").insert([
    {
      full_name: fullName,
      age: Number(age),
      mobile: mobile,
      diagnosis: diagnosis,
    },
  ]);

  if (error) {
    alert("Error: " + error.message);
  } else {
    alert("Patient Saved Successfully!");

    setFullName("");
    setAge("");
    setMobile("");
    setDiagnosis("");
  }
}  
return (
    <main className="min-h-screen bg-gray-100 p-8">

      <div className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-lg">

        <h1 className="mb-8 text-3xl font-bold text-blue-700">
          Register New Patient
        </h1>

        <div className="grid gap-5">

          <input
  className="rounded-lg border p-3"
  placeholder="Patient Name"
  value={fullName}
  onChange={(e) => setFullName(e.target.value)}
/>

          <input
  className="rounded-lg border p-3"
  placeholder="Age"
  value={age}
  onChange={(e) => setAge(e.target.value)}
/>

          <input
  className="rounded-lg border p-3"
  placeholder="Mobile Number"
  value={mobile}
  onChange={(e) => setMobile(e.target.value)}
/>

          <input className="rounded-lg border p-3" placeholder="Occupation" />

          <input className="rounded-lg border p-3" placeholder="Address" />

          <textarea
  className="rounded-lg border p-3"
  placeholder="Chief Complaint"
  value={diagnosis}
  onChange={(e) => setDiagnosis(e.target.value)}
/>

          <button
  onClick={savePatient}
  className="rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700"
>
  Save Patient
</button>

        </div>

      </div>

    </main>
  );
}