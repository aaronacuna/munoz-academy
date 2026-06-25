import coach from '../schemas/coach'
import program from '../schemas/program'
import recurso from '../schemas/recurso'
import siteSettings from '../schemas/siteSettings'

export const schemaTypes = [coach, program, recurso, siteSettings]

// sanity.config.js imports `schema`, so keep that export shape too.
export const schema = {
  types: schemaTypes,
}
