import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// ユーザーを作成する
async function createUser(data: any) {
  return await prisma.user.create({
    data: data,
  });
}

// ユーザーを取得する
async function getUser(id: string) {
  return await prisma.user.findUnique({
    where: { id: id },
  });
}

// ユーザー情報を更新する
async function updateUser(id: string, data: any) {
  return await prisma.user.update({
    where: { id: id },
    data: data,
  });
}

// ユーザーを削除する
async function deleteUser(id: string) {
  return await prisma.user.delete({
    where: { id: id },
  });
}

// ユーザーのCRUD操作をエクスポートする
export { createUser, getUser, updateUser, deleteUser };
