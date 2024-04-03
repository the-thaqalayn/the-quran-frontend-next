export async function GET() {
  const res = await fetch("https://api.quran.com/api/v4/chapters");
  const data = await res.json();

  return Response.json({ data });
}
