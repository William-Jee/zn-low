"use client";
import { Button } from "@splash/ui";

export default ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="">
      <p className=""></p>
      <Button onClick={reset}>返回</Button>
      {error.message}
    </div>
  );
};
