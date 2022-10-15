import { TRPCError } from "@trpc/server"
import { t, baseProcedure } from "../trpc/init.js"
import database from "../modules/database.js"
import { Contact } from "../../../prisma/prisma-client"

export const contactsRouter = t.router({
    getAll: baseProcedure.query(async ({ input, ctx }) => {
        const contacts = await database.contact.findMany()

        return { contacts }
    }),
    get: baseProcedure
        .input((val: { id: string }) => val)
        .query(async ({ input, ctx }) => {
            const contact = await database.contact.findUniqueOrThrow({
                where: { id: input.id },
            })

            return { contact }
        }),
    create: baseProcedure
        .input(
            (val: {
                contact: Pick<Contact, "firstName" | "lastName" | "phoneNumber">
            }) => val
        )
        .mutation(async ({ input, ctx }) => {
            const { firstName, lastName, phoneNumber } = input.contact

            const contact = await database.contact.create({
                data: {
                    firstName,
                    lastName,
                    phoneNumber,
                },
            })

            return { contact }
        }),
    update: baseProcedure
        .input(
            (val: {
                id: string
                contact: Partial<
                    Pick<Contact, "firstName" | "lastName" | "phoneNumber">
                >
            }) => val
        )
        .mutation(async ({ input, ctx }) => {
            const { firstName, lastName, phoneNumber } = input.contact

            const contact = await database.contact.update({
                data: {
                    firstName,
                    lastName,
                    phoneNumber,
                },
                where: {
                    id: input.id,
                },
            })

            return { contact }
        }),
    delete: baseProcedure
        .input((val: { id: string }) => val)
        .mutation(async ({ input, ctx }) => {
            await database.contact.delete({
                where: {
                    id: input.id,
                },
            })
        }),
})
