import { db } from "../lib/db";
const page = async () => {
  const user = await db.user.findFirst();
  return <div>{user?.name}</div>;
};

export default page;
