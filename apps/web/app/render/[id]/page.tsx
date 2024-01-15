import { revalidateTag } from "next/cache";
import FormItem from "./_component/reset-button";
import Late from "./_component/late";
import { resolve } from "path";
import { Suspense } from "react";
import { Card } from "@splash/render";
// import FormItem from "./_component/form-item";

const RenderPage = async ({ params }) => {
  console.log(params.id);
  const res = await fetch(
    "http://localhost:3001/api/config-json/" + params.id,
    {
      // cache: "no-store",
      next: {
        tags: ["config"],
        revalidate: 60,
      },
    }
  );
  const json = await res.json();
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div>
      {JSON.stringify(json)}
      <Suspense>
        <Late />
      </Suspense>
      <FormItem />
      <Card />
      {/* <resetButton />
      <resetButton /> */}
    </div>
  );
};

export default RenderPage;
