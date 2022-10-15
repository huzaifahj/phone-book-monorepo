import { TRPCError } from "@trpc/server"
import { t, baseProcedure } from "../trpc/init.js"
import database from "../modules/database.js"
import { DateTime } from "luxon"
import store from "../modules/store.js"

export const contactsRouter = t.router({
    getAll: baseProcedure.query(async ({ input, ctx }) => {
        const contacts = await database.contact.findMany()

        return { contacts }
    }),
})
