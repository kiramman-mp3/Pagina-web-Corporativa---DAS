import { Router } from "express";
import { BlogController } from "../controller/blog.ts";

const blogRouter = Router()
blogRouter.get("/", BlogController.getAll)
blogRouter.get("/:id", BlogController.getOne)
blogRouter.post("/", BlogController.create)
blogRouter.put("/:id", BlogController.update)
blogRouter.delete("/:id", BlogController.delete)

export default blogRouter 