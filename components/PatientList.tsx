"use client";

import { useState } from "react";
import SearchBar from "./SearchBar";
import PatientTable from "./PatientTable";

type Patient = {
  id: string;
  full_name: string;
  age: number;
  mobile: string;
  diagnosis: string;
};

export default function PatientList({
  patients,
}: {
  patients: Patient[];
}) {
  const [search, setSearch] = useState("");

  const filteredPatients = patients.filter((patient) =>
    patient.full_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="mb-6">
        <SearchBar
          placeholder="🔍 Search Patient..."
          value={search}
          onChange={setSearch}
        />
      </div>

      <div className="rounded-xl bg-white p-6 shadow">
        <PatientTable patients={filteredPatients} />
      </div>
    </>
  );
}