
// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://oyywkocpvvzawkvkchtd.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95eXdrb2NwdnZ6YXdrdmtjaHRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4NDcyNTksImV4cCI6MjA2MzQyMzI1OX0.VClWYRLwWkySbRCKP2riqtln6APG-gH5rkwNe-wjoZU";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
