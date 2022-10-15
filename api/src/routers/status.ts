import { TRPCError } from "@trpc/server"
import { t, baseProcedure } from "../trpc/init.js"
import database from "../modules/database.js"
import { DateTime } from "luxon"
import store from "../modules/store.js"

export const statusRouter = t.router({
    get: baseProcedure.query(async ({ input, ctx }) => {
        return {
            message: "API server for phone book.",
            lastUpdated: DateTime.fromMillis(store.lastUpdated)
                .setZone("Europe/London")
                .toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS),
        }
    }),
})
