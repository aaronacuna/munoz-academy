export default {
  name: 'program',
  title: 'Programas',
  type: 'document',
  fields: [
    { name: 'title', title: 'Título', type: 'string', validation: R => R.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'description', title: 'Descripción', type: 'text' },
    { name: 'icon', title: 'Ícono', type: 'image' },
    { name: 'order', title: 'Orden', type: 'number' },
  ],
}
