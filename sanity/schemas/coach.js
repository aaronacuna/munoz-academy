export default {
  name: 'coach',
  title: 'Profesores',
  type: 'document',
  fields: [
    { name: 'name', title: 'Nombre', type: 'string', validation: R => R.required() },
    { name: 'role', title: 'Cargo', type: 'string' },
    { name: 'bio', title: 'Biografía', type: 'text' },
    { name: 'photo', title: 'Foto', type: 'image', options: { hotspot: true } },
    { name: 'order', title: 'Orden', type: 'number' },
  ],
  orderings: [{ title: 'Orden', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
}
