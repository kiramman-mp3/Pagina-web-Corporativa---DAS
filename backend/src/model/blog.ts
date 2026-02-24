import prisma from "../repository/prisma.ts";

export class BlogModel {
    static async findAll() {
        return await prisma.blog.findMany()
    }
    static async findById(id: number) {
        return await prisma.blog.findUnique({
            where: { id }
        })
    }
    static async create(data: {
        title: string;
        url: string;
        description: string;
    }) {
        return prisma.blog.create({
            data
        });
    }
    static async update(id: number, data: {
        title?: string;
        url?: string;
        description?: string;
    }
    ) {
        try {
            return await prisma.blog.update({
                where: { id },
                data
            });
        } catch {
            return null;
        }
    }
    static async delete(id: number) {
        try {
            return await prisma.blog.delete({
                where: { id }
            })
        } catch {
            return null
        }
    }
}