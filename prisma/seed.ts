// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  if (process.env.NODE_ENV !== 'development') { 
    console.log('Seeding is only allowed in development environment');
    return;
  }
  // ユーザーのシードデータ作成
  const user1 = await prisma.user.create({
    data: {
      name: 'Alice Johnson',
      company: 'Tech Corp',
      department: 'Engineering',
      email: 'alice@example.com',
      password: 'password123',
      documents: {
        create: [
          {
            content: 'Document 1 content',
            storage_url: 'http://example.com/doc1',
          },
          {
            content: 'Document 2 content',
            storage_url: 'http://example.com/doc2',
          },
        ],
      },
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: 'Bob Smith',
      company: 'Business Inc.',
      department: 'Marketing',
      email: 'bob@example.com',
      password: 'password456',
      documents: {
        create: [
          {
            content: 'Document 3 content',
            storage_url: 'http://example.com/doc3',
          },
          {
            content: 'Document 4 content',
            storage_url: 'http://example.com/doc4',
          },
        ],
      },
    },
  });

  console.log({ user1, user2 });
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