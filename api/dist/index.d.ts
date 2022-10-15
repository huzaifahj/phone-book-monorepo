/// <reference types="node" />
import "colors";
export declare const appRouter: import("@trpc/server").Router<import("@trpc/server").RouterDef<{
    req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
    res: import("fastify").FastifyReply<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify").RouteGenericInterface, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
}, never, {}, {
    status: import("@trpc/server").Router<import("@trpc/server").RouterDef<{
        req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
        res: import("fastify").FastifyReply<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify").RouteGenericInterface, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
    }, never, {}, {
        get: import("@trpc/server").QueryProcedure<import("@trpc/server").Overwrite<{
            _config: {
                ctx: {
                    req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
                    res: import("fastify").FastifyReply<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify").RouteGenericInterface, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
                };
                meta: {};
                errorShape: never;
                transformer: import("@trpc/server").CombinedDataTransformer;
            };
            _meta: {};
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
        }, {
            _output_in: {
                message: string;
                lastUpdated: string;
            };
            _output_out: {
                message: string;
                lastUpdated: string;
            };
        }>>;
    }>> & {
        get: import("@trpc/server").QueryProcedure<import("@trpc/server").Overwrite<{
            _config: {
                ctx: {
                    req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
                    res: import("fastify").FastifyReply<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify").RouteGenericInterface, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
                };
                meta: {};
                errorShape: never;
                transformer: import("@trpc/server").CombinedDataTransformer;
            };
            _meta: {};
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
        }, {
            _output_in: {
                message: string;
                lastUpdated: string;
            };
            _output_out: {
                message: string;
                lastUpdated: string;
            };
        }>>;
    };
}>> & {
    status: import("@trpc/server").Router<import("@trpc/server").RouterDef<{
        req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
        res: import("fastify").FastifyReply<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify").RouteGenericInterface, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
    }, never, {}, {
        get: import("@trpc/server").QueryProcedure<import("@trpc/server").Overwrite<{
            _config: {
                ctx: {
                    req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
                    res: import("fastify").FastifyReply<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify").RouteGenericInterface, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
                };
                meta: {};
                errorShape: never;
                transformer: import("@trpc/server").CombinedDataTransformer;
            };
            _meta: {};
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
        }, {
            _output_in: {
                message: string;
                lastUpdated: string;
            };
            _output_out: {
                message: string;
                lastUpdated: string;
            };
        }>>;
    }>> & {
        get: import("@trpc/server").QueryProcedure<import("@trpc/server").Overwrite<{
            _config: {
                ctx: {
                    req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
                    res: import("fastify").FastifyReply<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify").RouteGenericInterface, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
                };
                meta: {};
                errorShape: never;
                transformer: import("@trpc/server").CombinedDataTransformer;
            };
            _meta: {};
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
        }, {
            _output_in: {
                message: string;
                lastUpdated: string;
            };
            _output_out: {
                message: string;
                lastUpdated: string;
            };
        }>>;
    };
};
export declare type AppRouter = typeof appRouter;
