// apiGuests.ts
import supabase from "./client";

// 🧩 Read operations

export async function getAllGuests() {
  const { data, error } = await supabase.from("guests").select("*");
  if (error) throw new Error(error.message);
  return data;
}

export async function getSelectedGuestColumns(columns: string) {
  const { data, error } = await supabase.from("guests").select(columns);
  if (error) throw new Error(error.message);
  return data;
}

export async function getGuestsWithRelations(selectStatement: string) {
  const { data, error } = await supabase
    .from("guests")
    .select(selectStatement);
  if (error) throw new Error(error.message);
  return data;
}

export async function getGuestsPaginated(start: number, end: number) {
  const { data, error } = await supabase
    .from("guests")
    .select("*")
    .range(start, end);
  if (error) throw new Error(error.message);
  return data;
}

export async function getFilteredGuests(filters: {
  column: string;
  op: string;
  value: any;
}[]) {
  let query = supabase.from("guests").select("*");
  for (const { column, op, value } of filters) {
    // dynamically apply simple filters; expand as needed
    (query as any)[op](column, value);
  }
  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return data;
}

// ✍️ Insert operations

export async function insertGuest(newGuest: Record<string, any>) {
  const { data, error } = await supabase
    .from("guests")
    .insert([newGuest])
    .select();
  if (error) throw new Error(error.message);
  return data;
}

export async function insertGuests(guests: Record<string, any>[]) {
  const { data, error } = await supabase
    .from("guests")
    .insert(guests)
    .select();
  if (error) throw new Error(error.message);
  return data;
}

// 🔁 Upsert operation

export async function upsertGuest(guest: Record<string, any>) {
  const { data, error } = await supabase
    .from("guests")
    .upsert(guest)
    .select();
  if (error) throw new Error(error.message);
  return data;
}

// 🔄 Update operation

export async function updateGuest(
  matchColumn: string,
  matchValue: any,
  updateData: Record<string, any>
) {
  const { data, error } = await supabase
    .from("guests")
    .update(updateData)
    .eq(matchColumn, matchValue)
    .select();
  if (error) throw new Error(error.message);
  return data;
}

// 🚫 Delete operation

export async function deleteGuest(matchColumn: string, matchValue: any) {
  const { error } = await supabase
    .from("guests")
    .delete()
    .eq(matchColumn, matchValue);
  if (error) throw new Error(error.message);
}
