const postSchema = {
  name: "post",
  title: "Article",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titre",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "excerpt",
      title: "Extrait",
      type: "text",
    },
    {
      name: "body",
      title: "Contenu",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "mainImage",
      title: "Image principale",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "videoUrl",
      title: "Lien YouTube",
      type: "url",
    },
    {
      name: "pdfFile",
      title: "Document PDF",
      type: "file",
    },
    {
      name: "category",
      title: "Categorie",
      type: "string",
      options: { list: ["Offers", "Leads", "Models"] },
    },
    {
      name: "persona",
      title: "Persona",
      type: "string",
      options: {
        list: [
          "Freelancer",
          "Createur",
          "E-commerce",
          "Coach",
          "Agence",
          "Commercant",
        ],
      },
    },
    {
      name: "publishedAt",
      title: "Date de publication",
      type: "datetime",
    },
    {
      name: "estimatedReadTime",
      title: "Temps de lecture (min)",
      type: "number",
    },
  ],
}

const authorSchema = {
  name: "author",
  title: "Auteur",
  type: "document",
  fields: [
    { name: "name", title: "Nom", type: "string" },
    { name: "image", title: "Photo", type: "image", options: { hotspot: true } },
    { name: "bio", title: "Bio", type: "text" },
  ],
}

export const schemaTypes = [postSchema, authorSchema]