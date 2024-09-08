import Elysia from "elysia";
import { app } from "~/server/api";

const routeApp = new Elysia({ prefix: '/api' }).use(app);

export const GET = function (request: Request) {
  console.log(request)
  return routeApp.handle(request);
}

export const POST = function (request: Request) {
  console.log(request)
  return routeApp.handle(request);
}
