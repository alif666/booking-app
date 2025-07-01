import supabase from "./client";
// Get all cabins
export async function getAllCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) throw new Error(error.message);
  return data;
}

// Get selected columns
export async function getSelectedCabinColumns(columns: string) {
  const { data, error } = await supabase.from("cabins").select(columns);
  if (error) throw new Error(error.message);
  return data;
}

// Get cabins with referenced tables
export async function getCabinsWithRelations() {
  const { data, error } = await supabase
    .from("cabins")
    .select(`
      some_column,
      other_table (
        foreign_key
      )
    `);
  if (error) throw new Error(error.message);
  return data;
}

// Get cabins with pagination
export async function getCabinsPaginated(start: number, end: number) {
  const { data, error } = await supabase
    .from("cabins")
    .select("*")
    .range(start, end);
  if (error) throw new Error(error.message);
  return data;
}

// Get cabins with filters
export async function getFilteredCabins() {
  const { data, error } = await supabase
    .from("cabins")
    .select("*")
    .eq("column", "Equal to")
    .gt("column", "Greater than")
    .lt("column", "Less than")
    .gte("column", "Greater than or equal to")
    .lte("column", "Less than or equal to")
    .like("column", "%CaseSensitive%")
    .ilike("column", "%CaseInsensitive%")
    .is("column", null)
    .in("column", ["Array", "Values"])
    .neq("column", "Not equal to")
    .contains("array_column", ["array", "contains"])
    .containedBy("array_column", ["contained", "by"])
    .not("column", "like", "Negate filter")
    .or("some_column.eq.Some value,other_column.eq.Other value");
  if (error) throw new Error(error.message);
  return data;
}

// Insert a single cabin
export async function insertCabin(newCabin: Record<string, any>) {
  const { data, error } = await supabase
    .from("cabins")
    .insert([newCabin])
    .select();
  if (error) throw new Error(error.message);
  return data;
}

// Insert multiple cabins
export async function insertCabins(cabins: Record<string, any>[]) {
  const { data, error } = await supabase
    .from("cabins")
    .insert(cabins)
    .select();
  if (error) throw new Error(error.message);
  return data;
}

// Upsert a cabin
export async function upsertCabin(cabin: Record<string, any>) {
  const { data, error } = await supabase
    .from("cabins")
    .upsert(cabin)
    .select();
  if (error) throw new Error(error.message);
  return data;
}

// Update cabin(s)
export async function updateCabin(matchColumn: string, matchValue: any, updateData: Record<string, any>) {
  const { data, error } = await supabase
    .from("cabins")
    .update(updateData)
    .eq(matchColumn, matchValue)
    .select();
  if (error) throw new Error(error.message);
  return data;
}

// Delete cabin(s)
export async function deleteCabin(matchColumn: string, matchValue: any) {
  const { error } = await supabase
    .from("cabins")
    .delete()
    .eq(matchColumn, matchValue);
  if (error) throw new Error(error.message);
}
