import { PageRender } from "@splash/render";

const RenderPage = async ({ params }: { params: { id: string } }) => {
  console.log(process.env.JSON_SERVICE);

  const res = await fetch(
    process.env.JSON_SERVICE + "/api/config-json/" + params.id,
    // process.env.JSON_SERVICE + "/api/config-json/" + params.id,
    {
      // cache: "no-store",
      next: {
        tags: ["config"],
      },
    }
  );
  const json = await res.json();
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  return <PageRender pageschema={json.data} />;
};

export default RenderPage;
