import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://krjgjaemysvutpwbwgst.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtyamdqYWVteXN2dXRwd2J3Z3N0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY1Mjc0MDIsImV4cCI6MjA5MjEwMzQwMn0.Gn2lMkcghvdO93nOahBSdUGtXyjxj6Qp15OBTWH-PJw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
