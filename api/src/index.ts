import "colors"
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify"
import fastify from "fastify"
import cors from "@fastify/cors"
import { t, createContext } from "./trpc/init.js"
import database from "./modules/database.js"

import { statusRouter } from "./routers/status.js"

// Setup tRPC main router

export const appRouter = t.router({
    status: statusRouter,
})
export type AppRouter = typeof appRouter

// Pass tRPC to Fastify

const server = fastify({
    maxParamLength: 5000,
})

await server.register(cors)

server.register(fastifyTRPCPlugin, {
    prefix: "",
    trpcOptions: { router: appRouter, createContext },
})
;(async () => {
    try {
        await server.listen({ port: 5190 })
    } catch (err) {
        server.log.error(err)
        process.exit(1)
    }
})()

server.addHook("onReady", () => console.log("Server online.".green))
server.addHook("onError", async (req, res, error) => {
    console.log(error.message)
    await database.$disconnect()
})

const variables = {
    "Database credentials": process.env.PHONEBOOK_PRISMA_DATABASE_URL,
}
for (const [name, variable] of Object.entries(variables)) {
    if (!variable) console.log(`${name} variable is missing.`.red)
}
