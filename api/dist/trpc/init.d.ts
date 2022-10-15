/// <reference types="node" />
import { inferAsyncReturnType } from "@trpc/server";
import { CreateFastifyContextOptions } from "@trpc/server/adapters/fastify";
declare type Meta = {};
export declare function createContext({ req, res }: CreateFastifyContextOptions): {
    req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
    res: import("fastify").FastifyReply<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify").RouteGenericInterface, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
};
export declare type Context = inferAsyncReturnType<typeof createContext> & {};
export declare const t: {
    _config: {
        ctx: {
            req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
            res: import("fastify").FastifyReply<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify").RouteGenericInterface, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
        };
        meta: Meta;
        errorShape: never;
        transformer: import("@trpc/server").CombinedDataTransformer;
    };
    procedure: import("@trpc/server").ProcedureBuilder<{
        _config: {
            ctx: {
                req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
                res: import("fastify").FastifyReply<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify").RouteGenericInterface, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
            };
            meta: Meta;
            errorShape: never;
            transformer: import("@trpc/server").CombinedDataTransformer;
        };
        _ctx_in: {
            req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
            res: import("fastify").FastifyReply<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify").RouteGenericInterface, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
        };
        _ctx_out: {
            req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
            res: import("fastify").FastifyReply<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify").RouteGenericInterface, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
        };
        _input_in: typeof import("@trpc/server").unsetMarker;
        _input_out: typeof import("@trpc/server").unsetMarker;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
        _meta: Meta;
    }>;
    middleware: <$TNewParams extends import("@trpc/server").ProcedureParams<{
        transformer: import("@trpc/server").CombinedDataTransformer;
        errorShape: import("@trpc/server").DefaultErrorShape;
        ctx: Record<string, unknown>;
        meta: Record<string, unknown>;
    }, unknown, unknown, unknown, unknown, unknown, unknown, unknown>>(fn: import("@trpc/server").MiddlewareFunction<{
        _config: {
            ctx: {
                req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
                res: import("fastify").FastifyReply<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify").RouteGenericInterface, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
            };
            meta: Meta;
            errorShape: never;
            transformer: import("@trpc/server").CombinedDataTransformer;
        };
        _ctx_in: {
            req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
            res: import("fastify").FastifyReply<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify").RouteGenericInterface, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
        };
        _ctx_out: {
            req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
            res: import("fastify").FastifyReply<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify").RouteGenericInterface, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
        };
        _input_out: unknown;
        _input_in: unknown;
        _output_in: unknown;
        _output_out: unknown;
        _meta: Meta;
    }, $TNewParams>) => import("@trpc/server").MiddlewareFunction<{
        _config: {
            ctx: {
                req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
                res: import("fastify").FastifyReply<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify").RouteGenericInterface, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
            };
            meta: Meta;
            errorShape: never;
            transformer: import("@trpc/server").CombinedDataTransformer;
        };
        _ctx_in: {
            req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
            res: import("fastify").FastifyReply<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify").RouteGenericInterface, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
        };
        _ctx_out: {
            req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
            res: import("fastify").FastifyReply<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify").RouteGenericInterface, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
        };
        _input_out: unknown;
        _input_in: unknown;
        _output_in: unknown;
        _output_out: unknown;
        _meta: Meta;
    }, $TNewParams>;
    router: <TProcRouterRecord extends import("@trpc/server").ProcedureRouterRecord>(opts: TProcRouterRecord) => import("@trpc/server").Router<import("@trpc/server").RouterDef<{
        req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
        res: import("fastify").FastifyReply<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify").RouteGenericInterface, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
    }, never, Meta, TProcRouterRecord>> & TProcRouterRecord;
    mergeRouters: typeof import("@trpc/server").mergeRoutersGeneric;
};
export declare const baseProcedure: import("@trpc/server").ProcedureBuilder<{
    _config: {
        ctx: {
            req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
            res: import("fastify").FastifyReply<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify").RouteGenericInterface, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
        };
        meta: Meta;
        errorShape: never;
        transformer: import("@trpc/server").CombinedDataTransformer;
    };
    _meta: Meta;
    _ctx_in: {
        req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
        res: import("fastify").FastifyReply<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify").RouteGenericInterface, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
    };
    _ctx_out: import("@trpc/server").Overwrite<{
        req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
        res: import("fastify").FastifyReply<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify").RouteGenericInterface, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
    }, {
        req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
        res: import("fastify").FastifyReply<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify").RouteGenericInterface, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
    }>;
    _input_in: typeof import("@trpc/server").unsetMarker;
    _input_out: typeof import("@trpc/server").unsetMarker;
    _output_in: typeof import("@trpc/server").unsetMarker;
    _output_out: typeof import("@trpc/server").unsetMarker;
}>;
export {};
