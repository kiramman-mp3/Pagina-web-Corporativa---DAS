import { NextFunction, Request, Response } from "express";

export const apiMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const key = req.headers["x-api-key"]
    if (!key || key !== process.env["API_KEY"]) {
        throw res.status(401).json({ message: "Unauthorized" })
    }
    next()
}