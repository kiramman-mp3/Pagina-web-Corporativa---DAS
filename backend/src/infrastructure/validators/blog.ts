import { z } from "zod";

export const BlogSchema = z.object({
    title: z.string().min(1, "Title is required"),
    url: z.url("URL is invalid"),
    description: z.string().min(1, "Description is required"),
});