import { Elysia } from "elysia";
import posts from "./posts";

export const api = new Elysia({ prefix: '/api' }).use(posts);

export type Api = typeof api;
