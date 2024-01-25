import { db } from "../lib/db";
import { NewBtn } from "@splash/render";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@splash/ui";
const page = async () => {
  const user = await db.user.findFirst();
  return (
    <div className="bg-red-400 ">
      <p className=""></p>
      {user?.name}
      <p className="font-red ">1122</p>
      <Button>ss</Button>
      <NewBtn />
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">1234</div>
              <div className="flex flex-col space-y-1.5">4456</div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
      <div className=" bg-red-300">2323</div>
    </div>
  );
};

export default page;
