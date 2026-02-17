import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'recipe',
    title: 'Recipe',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            description: 'Short summary for card view',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'datetime',
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: { type: 'category' },
        }),
        defineField({
            name: 'courtesy',
            title: 'Courtesy (Author)',
            type: 'reference',
            to: { type: 'author' },
        }),
        defineField({
            name: 'ingredients',
            title: 'Ingredients',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'name', type: 'string', title: 'Name' },
                        { name: 'quantity', type: 'string', title: 'Quantity' },
                    ],
                },
            ],
        }),
        defineField({
            name: 'method',
            title: 'Method',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'videoUrl',
            title: 'Video URL',
            type: 'url',
        }),
        defineField({
            name: 'relatedProducts',
            title: 'Related Products',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'productName', type: 'string', title: 'Product Name' },
                        { name: 'shopifyUrl', type: 'url', title: 'Shopify URL' },
                        { name: 'productImage', type: 'image', title: 'Product Image' },
                    ],
                },
            ],
        }),
        defineField({
            name: 'featured',
            title: 'Featured',
            type: 'boolean',
            initialValue: false,
        }),
    ],
})
