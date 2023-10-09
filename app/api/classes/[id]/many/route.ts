import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  { params }: { params: { id: number } }
) {
  const newPupils: { first_name: string; last_name_initials?: string }[] =
    await request.json();

  try {
    const postPupils = await prisma.cTClass.update({
      where: { id: Number(params.id) },
      data: {
        pupils: {
          createMany: {
            data: newPupils,
          },
        },
      },
      include: {
        pupils: true,
      },
    });

    return NextResponse.json(postPupils);
  } catch (error) {
    console.log(error);
  }
}
