"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function AssessmentForm({
  patientId,
}: {
  patientId: string;
}) {
  const [chiefComplaint, setChiefComplaint] = useState("");
  const [painScore, setPainScore] = useState(0);
  const [diagnosis, setDiagnosis] = useState("");
  const [treatment, setTreatment] = useState("");

  async function saveAssessment() {
    const { error } = await supabase.from("assessments").insert([
      {
        patient_id: patientId,
        chief_complaint: chiefComplaint,
        pain_score: painScore,
        diagnosis,
        treatment,
      },
    ]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("✅ Assessment Saved Successfully!");

    setChiefComplaint("");
    setPainScore(0);
    setDiagnosis("");
    setTreatment("");
  }

  return (
    <div className="grid gap-5">

      <textarea
        className="rounded-lg border p-3"
        placeholder="Chief Complaint"
        value={chiefComplaint}
        onChange={(e) => setChiefComplaint(e.target.value)}
      />

      <div>
        <label className="mb-2 block font-semibold">
          Pain Score (VAS 0–10)
        </label>

        <input
          type="range"
          min="0"
          max="10"
          value={painScore}
          onChange={(e) => setPainScore(Number(e.target.value))}
          className="w-full"
        />

        <p className="mt-2 text-lg font-bold text-blue-700">
          {painScore} / 10
        </p>
      </div>

      <textarea
        className="rounded-lg border p-3"
        placeholder="Physiotherapy Diagnosis"
        value={diagnosis}
        onChange={(e) => setDiagnosis(e.target.value)}
      />

      <textarea
        className="rounded-lg border p-3"
        placeholder="Treatment Given"
        value={treatment}
        onChange={(e) => setTreatment(e.target.value)}
      />

      <button
        onClick={saveAssessment}
        className="rounded-lg bg-purple-600 py-3 text-white hover:bg-purple-700"
      >
        💾 Save Assessment
      </button>

    </div>
  );
}