import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { email: string } }
) {
  const teacher = (await prisma.user.findUnique({
    where: {
      email: params.email,
    },
  })) as unknown as Teacher;

  const classes = await prisma.cTClass.findMany({
    where: {
      teacherId: teacher.id,
    },
  });
  console.log(classes);
  return NextResponse.json(classes);
}
