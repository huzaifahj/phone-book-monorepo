import { initTRPC, inferAsyncReturnType, TRPCError } from "@trpc/server"
import { CreateFastifyContextOptions } from "@trpc/server/adapters/fastify"
import superjson from "superjson"
import database from "../modules/database.js"

type Meta = {}

export function createContext({ req, res }: CreateFastifyContextOptions) {
    return {
        req,
        res,
    }
}
export type Context = inferAsyncReturnType<typeof createContext> & {}

export const t = initTRPC.meta<Meta>().context<Context>().create({
    transformer: superjson,
})

// Logging middleware

const log = t.middleware(async ({ next, path }) => {
    const start = Date.now()
    const result = await next()
    const ms = Date.now() - start
    if (result.ok) {
        console.log(`[OK ${ms}ms] ${path}`.green)
    } else {
        console.log(`[ERROR ${ms}ms] ${path}`.red)
    }
    return result
})

export const baseProcedure = t.procedure.use(log)
