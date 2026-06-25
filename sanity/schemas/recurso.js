export default {
  name: 'recurso',
  title: 'Recursos',
  type: 'document',
  fields: [
    { name: 'title', title: 'Título', type: 'string' },
    { name: 'type', title: 'Tipo', type: 'string',
      options: { list: ['photo', 'video'], layout: 'radio' } },
    { name: 'categoria', title: 'Categoría', type: 'string' },
    { name: 'photo', title: 'Foto', type: 'image', options: { hotspot: true } },
    { name: 'youtubeId', title: 'YouTube ID', type: 'string' },
    { name: 'order', title: 'Orden', type: 'number' },
  ],
}
