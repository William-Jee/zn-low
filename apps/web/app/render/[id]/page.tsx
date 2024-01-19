import ResetBtn from "./_component/reset-button";
import FormItem from "./_component/form-item";
import Late from "./_component/late";
import { Suspense } from "react";
import { Card } from "@splash/render";
// import { Button } from "@splash/ui";
import { Button } from "testui";
// import "../../globals.css";
// import FormItem from "./_component/form-item";

const RenderPage = async ({ params }: { params: any }) => {
  console.log(params.id);
  const res = await fetch(
    "http://localhost:7777/api/config-json/" + params.id,
    {
      // cache: "no-store",
      next: {
        tags: ["config"],
      },
    }
  );
  const json = await res.json();
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div className="">
      {JSON.stringify(json)}
      <Suspense fallback={<p>dddd....</p>}>{/* <Late /> */}</Suspense>
      <FormItem ctx={json} />
      <ResetBtn />
      <Card />
      {/* <resetButton />
      <resetButton /> */}
      <Button sdf />
      <div className=" text-orange-600">1232</div>
    </div>
  );
};

export default RenderPage;
