import { Elysia } from "elysia";
import posts from "./posts";

export const app = new Elysia().use(posts);
