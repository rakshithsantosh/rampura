import { type SchemaTypeDefinition } from 'sanity'

import recipe from './recipe'
import category from './category'
import author from './author'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [recipe, category, author],
}
