const late = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch("http://localhost:7777/api/config-json/foo", {
    // cache: "no-store",
    next: {
      tags: ["1config2"],
    },
  });
  //   console.log(res);
  const json = await res.json();
  return <div>{JSON.stringify(json)}</div>;
};

export default late;
