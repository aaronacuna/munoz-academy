export default {
  name: 'siteSettings',
  title: 'Configuración del Sitio',
  type: 'document',
  fields: [
    { name: 'academyName', title: 'Nombre de la Academia', type: 'string' },
    { name: 'tagline', title: 'Tagline', type: 'text' },
    { name: 'phone', title: 'Teléfono', type: 'string' },
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'instagramUrl', title: 'Instagram URL', type: 'url' },
    { name: 'facebookUrl', title: 'Facebook URL', type: 'url' },
  ],
  __experimental_actions: ['update', 'publish'],
}
