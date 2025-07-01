// apiBookings.ts
import supabase from "./client";

// 📄 Read operations

export async function getAllBookings() {
  const { data, error } = await supabase.from("booking").select("*");
  if (error) throw new Error(error.message);
  return data;
}

export async function getSelectedBookingColumns(columns: string) {
  const { data, error } = await supabase.from("booking").select(columns);
  if (error) throw new Error(error.message);
  return data;
}

export async function getBookingsWithRelations(selectStatement: string) {
  const { data, error } = await supabase
    .from("booking")
    .select(selectStatement);
  if (error) throw new Error(error.message);
  return data;
}

export async function getBookingsPaginated(start: number, end: number) {
  const { data, error } = await supabase
    .from("booking")
    .select("*")
    .range(start, end);
  if (error) throw new Error(error.message);
  return data;
}

export async function getFilteredBookings(filters: {
  column: string;
  op: string;
  value: any;
}[]) {
  let query: any = supabase.from("booking").select("*");
  for (const { column, op, value } of filters) {
    query = query[op](column, value);
  }
  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return data;
}

// ✍️ Insert operations

export async function insertBooking(newBooking: Record<string, any>) {
  const { data, error } = await supabase
    .from("booking")
    .insert([newBooking])
    .select();
  if (error) throw new Error(error.message);
  return data;
}

export async function insertBookings(bookings: Record<string, any>[]) {
  const { data, error } = await supabase
    .from("booking")
    .insert(bookings)
    .select();
  if (error) throw new Error(error.message);
  return data;
}

// 🔁 Upsert operation

export async function upsertBooking(booking: Record<string, any>) {
  const { data, error } = await supabase
    .from("booking")
    .upsert(booking)
    .select();
  if (error) throw new Error(error.message);
  return data;
}

// 🔄 Update operation

export async function updateBooking(
  matchColumn: string,
  matchValue: any,
  updateData: Record<string, any>
) {
  const { data, error } = await supabase
    .from("booking")
    .update(updateData)
    .eq(matchColumn, matchValue)
    .select();
  if (error) throw new Error(error.message);
  return data;
}

// 🚫 Delete operation

export async function deleteBooking(matchColumn: string, matchValue: any) {
  const { error } = await supabase
    .from("booking")
    .delete()
    .eq(matchColumn, matchValue);
  if (error) throw new Error(error.message);
}
