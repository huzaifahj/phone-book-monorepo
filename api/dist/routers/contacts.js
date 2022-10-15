import { t, baseProcedure } from "../trpc/init.js";
import database from "../modules/database.js";
export const contactsRouter = t.router({
    getAll: baseProcedure.query(async ({ input, ctx }) => {
        const contacts = await database.contact.findMany();
        return { contacts };
    }),
});
