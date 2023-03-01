import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gglboymwfsgpwzzmysjb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdnbGJveW13ZnNncHd6em15c2piIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc1MDEyNjAsImV4cCI6MTk5MzA3NzI2MH0.cIdcXyLaIutKZUKjOC2VZbf2pzR0iMU6EX8L8xk2mRY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
