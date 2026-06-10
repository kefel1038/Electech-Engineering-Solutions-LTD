import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://zxnckpruztdlkurmfbfp.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4bmNrcHJ1enRkaGt1cm1mYmZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0MTI1MDcsImV4cCI6MjA2NDk4ODUwN30.7NTLBzUBt3gFwFP6qHSq34pu7rjQx5FKgWHWAp09y6I';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
