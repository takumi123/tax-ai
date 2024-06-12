import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// ドキュメントを作成する
async function createDocument(data: any) {
  return await prisma.document.create({
    data: data,
  });
}

// ドキュメントを取得する
async function getDocument(id: string) {
  return await prisma.document.findUnique({
    where: { id: id },
  });
}

// ドキュメント情報を更新する
async function updateDocument(id: string, data: any) {
  return await prisma.document.update({
    where: { id: id },
    data: data,
  });
}

// ドキュメントを削除する
async function deleteDocument(id: string) {
  return await prisma.document.delete({
    where: { id: id },
  });
}

// ユーザーIDに基づいて全てのドキュメントをページ分けして取得する
async function getAllDocumentsByUserId(userId: string, page: number, pageSize: number = 10) {
  return await prisma.document.findMany({
    where: { userId: userId },
    skip: (page - 1) * pageSize,
    take: pageSize,
  });
}

// ドキュメントのCRUD操作をエクスポートする
export { createDocument, getDocument, updateDocument, deleteDocument, getAllDocumentsByUserId };

