import { db } from "../lib/db";
import { Button } from "testui";
const page = async () => {
  const user = await db.user.findFirst();
  return (
    <div className="">
      {user?.name}
      <p className="font-red ">1122</p>
      <Button />
      <div className=" bg-red-300">2323</div>
    </div>
  );
};

export default page;
