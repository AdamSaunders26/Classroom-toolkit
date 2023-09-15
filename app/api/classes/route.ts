import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  console.log("fetch me!");
  const CTClass = await prisma.pupil.findMany({
    where: {
      CTClassId: 2,
    },
  });

  return NextResponse.json(CTClass);
}
