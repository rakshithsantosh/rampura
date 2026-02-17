// @ts-ignore
import { createClient, type QueryParams } from 'next-sanity'
import { client } from './client'

export async function sanityFetch<QueryResponse>({
    query,
    params = {},
    tags,
}: {
    query: string
    params?: QueryParams
    tags?: string[]
}) {
    return client.fetch<QueryResponse>(query, params, {
        next: {
            revalidate: 30, // for simple ISR
            tags,
        },
    })
}
