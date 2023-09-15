import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const fetchedClass = await prisma.cTClass.findMany();

  return NextResponse.json(fetchedClass);
}
