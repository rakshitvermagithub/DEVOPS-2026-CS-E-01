import express from "express";
const router = express.Router();
import { createShortUrl } from "../controllers/shortUrl.controllers.js";

router.post("/", createShortUrl);

export default router;