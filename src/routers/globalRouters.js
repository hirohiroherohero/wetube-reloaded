import express from "express";
import { trending, search } from "../controllers/videosControllers";
import { join, login } from "../controllers/usersController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;
