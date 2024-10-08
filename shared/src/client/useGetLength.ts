import { api } from "./api";
import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptions } from "@tanstack/react-query";

type Options = Omit<UseQueryOptions<number, unknown, number, string[]>, "queryKey">;

/**
 * Query helper to get length information.
 * @param uri The URI to get length information for.
 * @param options Options to configure the query.
 * @returns React-Query properties.
 */
export function useGetLength(uri: string, options?: Options) {
    return useQuery({
        ...options,
        queryKey: ["getLength", uri],
        queryFn: async (context) => await api.getLength(uri, context.signal),
    });
}
