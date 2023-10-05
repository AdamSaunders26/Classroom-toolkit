import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const fetchedClass = await prisma.cTClass.findMany();

  return NextResponse.json(fetchedClass);
}

export async function POST(request: Request) {
  const { name, yearGroup, email } = await request.json();

  try {
    const newClass = await prisma.user.update({
      where: {
        email,
      },
      data: {
        CTClasses: {
          create: {
            name,
            yearGroup: yearGroup,
          },
        },
      },
      include: {
        CTClasses: true,
      },
    });

    return NextResponse.json(newClass);
  } catch (error) {
    console.log(error);
  }
}
