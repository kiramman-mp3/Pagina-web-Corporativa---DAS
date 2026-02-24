import { BlogSchema } from "../infrastructure/validators/blog.ts";
import { BlogModel } from "../model/blog.ts";

interface BlogData {
    title: string,
    url: string,
    description: string
}
export class BlogService {
    static async getBlogs() {
        return BlogModel.findAll();
    }
    static async getBlog(id: number) {
        const blog = await BlogModel.findById(id);
        if (!blog) {
            throw new Error("Blog not found");
        }
        return blog;
    }
    static async createBlog(data: BlogData) {
        const validated = BlogSchema.parse(data)
        return BlogModel.create({
            description: data.description,
            title: data.title,
            url: data.url
        });
    }
    static async updateBlog(id: number, newData: BlogData) {
        const validated = BlogSchema.parse(newData)
        const updated = await BlogModel.update(id, newData);
        if (!updated) {
            throw new Error("Blog not found");
        }
        return updated;
    }
    static async deleteBlog(id: number) {
        const deleted = await BlogModel.delete(id);
        if (!deleted) {
            throw new Error("Blog not found");
        }
        return deleted;
    }
}