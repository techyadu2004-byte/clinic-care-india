import { supabase } from "../../lib/supabase";

export default async function TestPage() {
  const { data, error } = await supabase
    .from("patients")
    .select("*");

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Supabase Test</h1>

      {error ? (
        <p className="text-red-600">❌ {error.message}</p>
      ) : (
        <>
          <p className="text-green-600">
            ✅ Connected Successfully
          </p>

          <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
      )}
    </main>
  );
}