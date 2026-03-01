// Sanity.io Client Configuration
// ---------------------------------
// This file is prepared for when you create a Sanity.io project.
// Instructions:
// 1. Go to sanity.io and create a new project
// 2. Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET in your env vars
// 3. Replace the static blog data imports with Sanity queries
//
// import { createClient } from "next-sanity"
// import imageUrlBuilder from "@sanity/image-url"
//
// export const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
//   apiVersion: "2026-02-21",
//   useCdn: true,
// })
//
// const builder = imageUrlBuilder(client)
// export function urlFor(source: any) {
//   return builder.image(source)
// }
//
// // GROQ Queries
// export const allPostsQuery = `*[_type == "post"] | order(publishedAt desc) {
//   _id,
//   title,
//   slug,
//   excerpt,
//   mainImage,
//   category->{title, slug},
//   persona->{title, slug},
//   publishedAt,
//   estimatedReadTime,
//   author->{name, image}
// }`
//
// export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
//   _id,
//   title,
//   slug,
//   excerpt,
//   body,
//   mainImage,
//   category->{title, slug},
//   persona->{title, slug},
//   publishedAt,
//   estimatedReadTime,
//   author->{name, image}
// }`

export {}
