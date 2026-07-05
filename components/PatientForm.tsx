type PatientFormProps = {
  fullName: string;
  age: string;
  mobile: string;
  diagnosis: string;
};

export default function PatientForm({
  fullName,
  age,
  mobile,
  diagnosis,
}: PatientFormProps) {
  return (
    <div className="grid gap-5">
      <input
        className="rounded-lg border p-3"
        value={fullName}
        readOnly
      />

      <input
        className="rounded-lg border p-3"
        value={age}
        readOnly
      />

      <input
        className="rounded-lg border p-3"
        value={mobile}
        readOnly
      />

      <textarea
        className="rounded-lg border p-3"
        value={diagnosis}
        readOnly
      />
    </div>
  );
}