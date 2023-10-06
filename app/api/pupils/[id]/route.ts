import prisma from "@/lib/prisma";
import { Erica_One } from "next/font/google";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { id: number } }
) {
  try {
    const deletedPupil = await prisma.pupil.delete({
      where: { id: Number(params.id) },
      include: {
        CTClass: {
          include: {
            pupils: true,
          },
        },
      },
    });

    return NextResponse.json(deletedPupil.CTClass);
  } catch (error) {
    console.log(error);
  }
}
