"use client";

import { Patient } from "../types/patient";
import { supabase } from "../lib/supabase";
import { useRouter } from "next/navigation";

export default function PatientTable({
  patients,
}: {
  patients: Patient[];
}) {
  const router = useRouter();

  async function handleDelete(id: string) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this patient?"
    );

    if (!confirmed) return;

    const { error } = await supabase
      .from("patients")
      .delete()
      .eq("id", id);

    if (error) {
      alert("❌ Error: " + error.message);
      return;
    }

    alert("✅ Patient deleted successfully!");

    router.refresh();
  }

  return (
    <table className="w-full">
      <thead>
        <tr className="border-b">
          <th className="p-3 text-left">Name</th>
          <th className="p-3 text-left">Age</th>
          <th className="p-3 text-left">Mobile</th>
          <th className="p-3 text-left">Diagnosis</th>
          <th className="p-3 text-left">Action</th>
        </tr>
      </thead>

      <tbody>
        {patients.map((patient) => (
          <tr key={patient.id} className="border-b">
            <td className="p-3">{patient.full_name}</td>

            <td className="p-3">{patient.age}</td>

            <td className="p-3">{patient.mobile}</td>

            <td className="p-3">{patient.diagnosis}</td>

            <td className="p-3">
              <div className="flex gap-2">

                <a
                  href={`/patients/${patient.id}`}
                  className="rounded bg-green-600 px-4 py-2 text-white"
                >
                  View
                </a>

                <a
                  href={`/patients/${patient.id}/edit`}
                  className="rounded bg-yellow-500 px-4 py-2 text-white"
                >
                  Edit
                </a>

                <button
                  onClick={() => handleDelete(patient.id)}
                  className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                >
                  Delete
                </button>

              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}