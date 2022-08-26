// src/utils/trpc.ts
import type { AppRouter } from '../server/router';
import { httpBatchLink, loggerLink } from '@trpc/react';
import { setupTRPC } from '@trpc/next';
import superjson from 'superjson';

/**
 * A set of strongly-typed React hooks from your `AppRouter` type signature with `createReactQueryHooks`.
 * @link https://trpc.io/docs/react#3-create-trpc-hooks
 */

const getBaseUrl = () => {
  if (typeof window !== 'undefined') return ''; // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export const trpc = setupTRPC<AppRouter>({
  // // eslint-disable-next-line @typescript-eslint/no-unused-vars
  config() {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    return {
      /**
       * @link https://trpc.io/docs/data-transformers
       */
      queryClientConfig: {
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      },
      transformer: superjson,
      /**
       * @link https://trpc.io/docs/links
       */
      links: [
        // adds pretty logs to your console in development and logs errors in production
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === 'development' ||
            (opts.direction === 'down' && opts.result instanceof Error),
        }),
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: true,
  /**
   * Set headers or status code when doing SSR
   */
  responseMeta(opts) {
    // [...]
    return {};
  },
});

/**
 * This is a helper method to infer the output of a query resolver
 * @example type HelloOutput = inferQueryOutput<'hello'>
 */
// export type inferQueryOutput<
//   TRouteKey extends keyof AppRouter['_def']['queries']
// > = inferProcedureOutput<AppRouter['_def']['queries'][TRouteKey]>;

// export type inferQueryInput<
//   TRouteKey extends keyof AppRouter['_def']['queries']
// > = inferProcedureInput<AppRouter['_def']['queries'][TRouteKey]>;

// export type inferMutationOutput<
//   TRouteKey extends keyof AppRouter['_def']['mutations']
// > = inferProcedureOutput<AppRouter['_def']['mutations'][TRouteKey]>;

// export type inferMutationInput<
//   TRouteKey extends keyof AppRouter['_def']['mutations']
// > = inferProcedureInput<AppRouter['_def']['mutations'][TRouteKey]>;
