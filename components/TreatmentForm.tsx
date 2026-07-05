"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function TreatmentForm({
  patientId,
}: {
  patientId: string;
}) {
  const [treatmentGiven, setTreatmentGiven] = useState("");
  const [therapist, setTherapist] = useState("");
  const [nextVisit, setNextVisit] = useState("");
  const [notes, setNotes] = useState("");

  async function saveTreatment() {
    const { error } = await supabase
      .from("treatment_notes")
      .insert([
        {
          patient_id: patientId,
          treatment_given: treatmentGiven,
          therapist,
          next_visit: nextVisit || null,
          notes,
        },
      ]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("✅ Treatment Saved Successfully!");

    setTreatmentGiven("");
    setTherapist("");
    setNextVisit("");
    setNotes("");
  }

  return (
    <div className="grid gap-5">

      <textarea
        className="rounded-lg border p-3"
        placeholder="Treatment Given"
        value={treatmentGiven}
        onChange={(e) => setTreatmentGiven(e.target.value)}
      />

      <input
        className="rounded-lg border p-3"
        placeholder="Therapist Name"
        value={therapist}
        onChange={(e) => setTherapist(e.target.value)}
      />

      <input
        type="date"
        className="rounded-lg border p-3"
        value={nextVisit}
        onChange={(e) => setNextVisit(e.target.value)}
      />

      <textarea
        className="rounded-lg border p-3"
        placeholder="Session Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <button
        onClick={saveTreatment}
        className="rounded-lg bg-green-600 py-3 text-white hover:bg-green-700"
      >
        💾 Save Treatment
      </button>

    </div>
  );
}