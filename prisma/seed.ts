import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const adam = await prisma.user.upsert({
    where: { email: "adam@classroom-toolkit.co.uk" },
    update: {},
    create: {
      email: "adam@classroom-toolkit.co.uk",
      title: "Mr",
      first_name: "Adam",
      last_name: "Saunders",
      CTClasses: {
        create: {
          name: "Acer",
          year: 5,
        },
      },
    },
  });

  const amy = await prisma.user.upsert({
    where: { email: "amy@classroom-toolkit.co.uk" },
    update: {},
    create: {
      email: "amy@classroom-toolkit.co.uk",
      title: "Mrs",
      first_name: "Amy",
      last_name: "Saunders",
      CTClasses: {
        create: {
          name: "EYFS",
          year: 0,
        },
      },
    },
  });

  const children = await prisma.pupil.createMany({
    data: [
      {
        first_name: "Peggy",
        last_name: "Eliza",
        CTClassId: 2,
      },
      {
        first_name: "Billy",
        last_name: "Hampster",
        CTClassId: 2,
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
