export async function GET() {
  const res = await import("../../../public/files/foo");
  console.log(res.ctx.columns);
  //   const data = await res.json();

  return Response.json(res);
}
