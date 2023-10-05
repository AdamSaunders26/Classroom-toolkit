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
  })) as unknown as Teacher;

  return NextResponse.json(fetchedClass);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: number } }
) {
  const deletedClass = await prisma.cTClass.delete({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(deletedClass);
}

export async function POST(
  request: Request,
  { params }: { params: { id: number } }
) {
  const { first_name, last_name } = await request.json();

  try {
    const postPupil = await prisma.cTClass.update({
      where: { id: Number(params.id) },
      data: {
        pupils: {
          create: {
            first_name,
            last_name,
          },
        },
      },
      include: {
        pupils: true,
      },
    });

    return NextResponse.json(postPupil);
  } catch (error) {
    console.log(error);
  }
}
