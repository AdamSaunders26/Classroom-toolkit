import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  try {
    const fetchedClass = await prisma.cTClass.findUnique({
      where: { id: Number(params.id) },
      include: {
        pupils: { orderBy: { first_name: "asc" } },
      },
    });

    return NextResponse.json(fetchedClass);
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: number } }
) {
  const deletedPupils = await prisma.pupil.deleteMany({
    where: {
      CTClassId: Number(params.id),
    },
  });

  const deletedClass = await prisma.cTClass.delete({
    where: {
      id: Number(params.id),
    },
    include: {
      pupils: { orderBy: { first_name: "asc" } },
    },
  });

  return NextResponse.json(deletedClass);
}

export async function POST(
  request: Request,
  { params }: { params: { id: number } }
) {
  const { first_name, last_name_initials } = await request.json();

  try {
    const postPupil = await prisma.cTClass.update({
      where: { id: Number(params.id) },
      data: {
        pupils: {
          create: {
            first_name,
            last_name_initials,
          },
        },
      },
      include: {
        pupils: { orderBy: { first_name: "asc" } },
      },
    });

    return NextResponse.json(postPupil);
  } catch (error) {
    console.log(error);
  }
}
