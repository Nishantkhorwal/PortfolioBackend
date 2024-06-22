import controller from "../controllers/portfolio.controller.js";
import express from "express";

const router = express.Router();

router.post ('/message',controller);

export default router;

