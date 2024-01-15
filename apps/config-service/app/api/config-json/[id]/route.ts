import fs from "fs/promises";
import path from "path";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  console.log({ id });
  const filepath = path.join((process.cwd(), `public/files/${id}.json`));
  const jsondata = await fs.readFile(filepath);
  const data = JSON.parse(jsondata.toString());
  return Response.json({ data });
}
