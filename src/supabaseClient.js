import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://dkxbvrgisdxdlohmzkwl.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRreGJ2cmdpc2R4ZGxvaG16a3dsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU5MTMzMjIsImV4cCI6MjA3MTQ4OTMyMn0.nQeoZ_dDQWna0odwaZpq5yWVs4TyQohDYOE0OvcEKFE';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
