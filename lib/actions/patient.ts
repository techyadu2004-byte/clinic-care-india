import { supabase } from "../supabase";

export async function addPatient(patient: {
  full_name: string;
  age: number;
  gender: string;
  mobile: string;
  diagnosis: string;
}) {
  const { data, error } = await supabase
    .from("patients")
    .insert([patient]);

  if (error) {
    console.error(error);
    return { success: false, error };
  }

  return { success: true, data };
}