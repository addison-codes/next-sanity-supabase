import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    overview,
    showcaseProjects[]->{
      _type,
      coverImage,
      overview,
      "slug": slug.current,
      tags,
      title,
    },
    title,
  }
`

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    body,
    overview,
    title,
    "slug": slug.current,
    pageBuilder[]{
      _type == "hero" => {
        _type,
        heading,
        tagline,
        image
      },
      _type == "textWithIllustration" => {
        _type,
        heading,
        tagline,
        excerpt,
        image,
        altText
      },
      _type == "gallery" => {
        _type,
        images[]
      },
      _type == "form" => {
        _type,
        heading,
        label,
        form
      },
      _type == "video" => {
        _type,
        label,
        url
      },
      _type == "callToAction" => @-> {
        _type,
        title,
        link
      },
    }
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    client,
    coverImage,
    description,
    duration,
    overview,
    site,
    "slug": slug.current,
    tags,
    title,
  }
`

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    footer,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },
    ogImage,
  }
`
