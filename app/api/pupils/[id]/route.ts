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
            pupils: { orderBy: { first_name: "asc" } },
          },
        },
      },
    });

    return NextResponse.json(deletedPupil.CTClass);
  } catch (error) {
    console.log(error);
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: number } }
) {
  try {
    const { first_name, last_name_initials } = await request.json();

    const updatedPupil = await prisma.pupil.update({
      where: {
        id: Number(params.id),
      },
      data: { first_name, last_name_initials },
      include: {
        CTClass: { include: { pupils: { orderBy: { first_name: "asc" } } } },
      },
    });

    return NextResponse.json(updatedPupil);
  } catch (error) {
    console.log(error);
  }
}
