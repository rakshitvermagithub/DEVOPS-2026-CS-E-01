import express from "express";
const router = express.router();
import { createShortUrlController } from "../controllers/shortUrl.js";

router.post("/", createShortUrlController );

export default router;