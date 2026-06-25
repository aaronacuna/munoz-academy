import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: '7tx2dcqx',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

export async function getCoaches() {
  return client.fetch(`*[_type == "coach"] | order(order asc)`)
}

export async function getPrograms() {
  return client.fetch(`*[_type == "program"] | order(order asc)`)
}

export async function getRecursos() {
  return client.fetch(`*[_type == "recurso"] | order(order asc)`)
}

export async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]`)
}
