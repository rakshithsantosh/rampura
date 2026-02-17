// @ts-ignore
import { createClient } from 'next-sanity'
// @ts-ignore
import imageUrlBuilder from '@sanity/image-url'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your_project_id'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-02-17'

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => {
    return builder.image(source)
}
