import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

// 🔥 TEMP: hard-code your real URL + anon key here
const supabaseUrl = 'https://dtrtgjanmiymoewhhxef.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0cnRnamFubWl5bW9ld2hoeGVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NzY0MzYsImV4cCI6MjA3ODU1MjQzNn0.6WNTXe-vkeK6qJt5AF8ZGdlm33SEbMRGRYsofcm2TjU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);