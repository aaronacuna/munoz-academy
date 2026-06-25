/*
  CÓMO ACTUALIZAR ESTE ARCHIVO:

  FOTOS: Para agregar una foto, copia uno de los objetos del
  array fotos y cambia: id (número único), src (ruta a tu imagen
  en /public/images/), alt (descripción), categoria (etiqueta)

  VIDEOS: Para agregar un video de YouTube, copia uno de los
  objetos del array videos y cambia: id (número único),
  youtubeId (el código al final de la URL de YouTube, ejemplo:
  youtube.com/watch?v=ESTE_CODIGO), titulo y descripcion

  Para ELIMINAR: simplemente borra ese objeto del array
  Para CAMBIAR: edita los valores directamente
*/

export const fotos = [
  {
    id: 1,
    src: "https://placehold.co/600x400/1e5c38/f5f0e8?text=Foto+1",
    alt: "Clase de tennis para adultos",
    categoria: "Tennis",
  },
  {
    id: 2,
    src: "https://placehold.co/600x400/1e5c38/f5f0e8?text=Foto+2",
    alt: "Clases para niños",
    categoria: "Niños",
  },
  {
    id: 3,
    src: "https://placehold.co/600x400/1e5c38/f5f0e8?text=Foto+3",
    alt: "Sesión de pádel",
    categoria: "Pádel",
  },
  {
    id: 4,
    src: "https://placehold.co/600x400/1e5c38/f5f0e8?text=Foto+4",
    alt: "Tennis en silla de ruedas",
    categoria: "Inclusivo",
  },
  {
    id: 5,
    src: "https://placehold.co/600x400/1e5c38/f5f0e8?text=Foto+5",
    alt: "Clase de pickleball",
    categoria: "Pickleball",
  },
  {
    id: 6,
    src: "https://placehold.co/600x400/1e5c38/f5f0e8?text=Foto+6",
    alt: "Instalaciones de la academia",
    categoria: "Academia",
  },
];

export const videos = [
  {
    id: 1,
    youtubeId: "dQw4w9WgXcQ",
    titulo: "Bienvenidos a Muñoz Academy",
    descripcion: "Conoce nuestra academia y todo lo que ofrecemos.",
  },
  {
    id: 2,
    youtubeId: "dQw4w9WgXcQ",
    titulo: "Clases para Adultos",
    descripcion: "Así son nuestras clases para adultos principiantes.",
  },
  {
    id: 3,
    youtubeId: "dQw4w9WgXcQ",
    titulo: "Tennis en Silla de Ruedas",
    descripcion: "Nuestro programa inclusivo en acción.",
  },
  {
    id: 4,
    youtubeId: "dQw4w9WgXcQ",
    titulo: "Clases de Pádel",
    descripcion: "Aprende pádel con nuestros profesores certificados.",
  },
];
