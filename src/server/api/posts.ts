import { DefinitionBase, Elysia, EphemeralType, MergeSchema, MetadataBase, t, TSchema, UnwrapRoute, InputSchema } from "elysia";
import { eq } from 'drizzle-orm'
import { createInsertSchema, createSelectSchema } from 'drizzle-typebox'
import { db } from "../db";
import { posts, PostSelect } from "../db/schema";
import { InlineHandler, JoinPath, SingletonBase } from "elysia/types";

const createPostSchema = createInsertSchema(posts)
const selectPostSchema = createSelectSchema(posts)

export default new Elysia<'/posts'>({ prefix: "/posts" })
  .get("/", async () => db.select().from(posts).all(), {
    response: t.Array(selectPostSchema)
  })
  .get("/:id",
      async ({ params: { id } }) => db.query.posts.findFirst({ where: eq(posts.id, id) }),
      {
          params: t.Object({
              id: t.Number(),
          }),
          response: t.Union([selectPostSchema, t.Undefined()]),
      }
  )
  .post("/", async ({ body }) => db.insert(posts).values(body).returning(), {
    body: t.Omit(createPostSchema, ['id', 'createdAt', 'updatedAt'])
  });
