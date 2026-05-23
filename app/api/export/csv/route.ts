export async function GET(){const csv='nama,layanan\nSiti,Triage'; return new Response(csv,{headers:{'content-type':'text/csv'}});}
