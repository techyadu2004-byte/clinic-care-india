export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white p-5 shadow">

      <input
        type="text"
        placeholder="🔍 Search..."
        className="w-80 rounded-lg border p-3"
      />

      <h2 className="text-2xl font-bold text-blue-700">
        Clinic Care India
      </h2>

      <div className="flex items-center gap-4">

        <button className="text-2xl">
          🔔
        </button>

        <div className="rounded-full bg-blue-700 px-4 py-2 text-white">
          Dr. Vivek
        </div>

      </div>

    </header>
  );
}