import express from "express";
const router = express.Router();
import { createShortUrlController } from "../controllers/shortUrl.js";

router.post("/", createShortUrlController);

export default router;