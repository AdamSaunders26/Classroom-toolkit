import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const fetchedClass = (await prisma.cTClass.findUnique({
    where: {
      id: Number(params.id),
    },
  })) as CTClass;

  fetchedClass.pupils = (await prisma.pupil.findMany({
    where: {
      CTClassId: Number(params.id),
    },
  })) as unknown as Pupil[];

  fetchedClass.teacher = (await prisma.user.findUnique({
    where: {
      id: fetchedClass.teacherId,
    },
  })) as Teacher;

  return NextResponse.json(fetchedClass);
}
