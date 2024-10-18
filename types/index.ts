import type { PortableTextBlock } from 'next-sanity'
import type { Image } from 'sanity'

export interface MenuItem {
  _type: string
  slug?: string
  title?: string
}

export interface MilestoneItem {
  description?: string
  duration?: {
    start?: string
    end?: string
  }
  image?: Image
  tags?: string[]
  title?: string
}

export interface ShowcaseProject {
  _type: string
  coverImage?: Image
  overview?: PortableTextBlock[]
  slug?: string
  tags?: string[]
  title?: string
}

// Define types for each member of the pageBuilder array
interface Hero {
  image: any
  alt: any
  tagline: any
  heading: any
  _type: 'hero'
  // Add other properties specific to the hero type if any
}

interface TextWithIllustration {
  _type: 'textWithIllustration'
  // Add other properties specific to the textWithIllustration type if any
}

interface Gallery {
  _type: 'gallery'
  // Add other properties specific to the gallery type if any
}

interface Form {
  _type: 'form'
  // Add other properties specific to the form type if any
}

interface Video {
  _type: 'video'
  // Add other properties specific to the video type if any
}

interface CallToAction {
  _type: 'callToAction'
  // Add other properties specific to the callToAction type if any
  to: { type: 'promotion' }[]
}

// Union type for all possible pageBuilder members
type PageBuilder = Hero | TextWithIllustration | Gallery | Form | Video | CallToAction

// Page payloads

export interface HomePagePayload {
  footer?: PortableTextBlock[]
  overview?: PortableTextBlock[]
  showcaseProjects?: ShowcaseProject[]
  title?: string
}

export interface PagePayload {
  body?: PortableTextBlock[]
  name?: string
  overview?: PortableTextBlock[]
  title?: string
  slug?: string
  pageBuilder?: PageBuilder[]
}

export interface ProjectPayload {
  client?: string
  coverImage?: Image
  description?: PortableTextBlock[]
  duration?: {
    start?: string
    end?: string
  }
  overview?: PortableTextBlock[]
  site?: string
  slug: string
  tags?: string[]
  title?: string
}

export interface SettingsPayload {
  footer?: PortableTextBlock[]
  menuItems?: MenuItem[]
  ogImage?: Image
}

