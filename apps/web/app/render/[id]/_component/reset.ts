"use server";

import { revalidateTag } from "next/cache";

export default async function reset() {
  console.log(1);
  revalidateTag("config");
}
