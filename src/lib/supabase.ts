import { createClient } from '@supabase/supabase-js';

// Anon key is safe to expose in the client (row-level security applies);
// env vars let staging/production point at different projects.
const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL || 'https://krjgjaemysvutpwbwgst.supabase.co';
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtyamdqYWVteXN2dXRwd2J3Z3N0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY1Mjc0MDIsImV4cCI6MjA5MjEwMzQwMn0.Gn2lMkcghvdO93nOahBSdUGtXyjxj6Qp15OBTWH-PJw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
