import { PrismaClient } from "@splash/database";

declare global {
  var prisma: PrismaClient | undefined;
}

export const db: any = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
