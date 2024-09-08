import Elysia from "elysia";
import { api } from "~/server/api";

const routeApp = new Elysia().use(api);

export const GET = function (request: Request) {
  console.log(request)
  return routeApp.handle(request);
}

export const POST = function (request: Request) {
  console.log(request)
  return routeApp.handle(request);
}
