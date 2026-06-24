import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://owqmuxisxjugakqccsuw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93cW11eGlzeGp1Z2FrcWNjc3V3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzNDQ5MDcsImV4cCI6MjA4ODkyMDkwN30.NH3ixQyckcGjHf2kCjkZYe8x70onS-TxTxslGUatNAU');

async function check() {
  const { data, error } = await supabase.storage.listBuckets();
  console.log('Buckets:', data);
  if (error) console.error('Error:', error.message);
}
check();
