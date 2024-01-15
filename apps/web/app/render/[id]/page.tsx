"use server";
import Image from "next/image";
import { promises as fs } from "fs";
import dynamic from "next/dynamic";
import FormItem from "./_component/form-item";
const RenderPage = async ({ params }) => {
  //   const res = await fetch("@/data/fpp.json");
  //   console.log(res);
  const file = await fs.readFile(
    process.cwd() + "/public/data/fpp.json",
    "utf8"
  );
  const json = await import("../../../public/data/foo");

  console.log(json);
  return (
    <div>
      <Image src="/data/bg2.png" width="64" height="64" alt="mem" />
      <pre>{params.id}</pre>
      <></>
      {/* {json.ctx.columns?.map((col) => <FormItem col={col} />)} */}
    </div>
  );
};

export default RenderPage;
