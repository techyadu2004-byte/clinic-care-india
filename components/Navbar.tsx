export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-blue-700 px-8 py-4 text-white shadow-lg">
      <h1 className="text-2xl font-bold">
        Clinic Care India
      </h1>

      <div className="flex gap-6">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/appointment">Appointment</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>

      <a
        href="/login"
        className="rounded-lg bg-white px-5 py-2 font-semibold text-blue-700"
      >
        Login
      </a>
    </nav>
  );
}