import { initTRPC } from "@trpc/server";
import superjson from "superjson";
export function createContext({ req, res }) {
    return {
        req,
        res,
    };
}
export const t = initTRPC.meta().context().create({
    transformer: superjson,
});
// Logging middleware
const log = t.middleware(async ({ next, path }) => {
    const start = Date.now();
    const result = await next();
    const ms = Date.now() - start;
    if (result.ok) {
        console.log(`[OK ${ms}ms] ${path}`.green);
    }
    else {
        console.log(`[ERROR ${ms}ms] ${path}`.red);
    }
    return result;
});
export const baseProcedure = t.procedure.use(log);
