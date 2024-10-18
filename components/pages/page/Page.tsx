import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Header } from '@/components/shared/Header'
import HeroSectionCentredWithImage from '@/components/shared/Hero'
import type { PagePayload } from '@/types'

export interface PageProps {
  data: PagePayload | null
}

export function Page({ data }: PageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { body, overview, title, pageBuilder } = data ?? {}

  console.log(pageBuilder)

  return (
    <div>
      <div className="mb-14">
        {/* Header */}
        <Header title={title} description={overview} />

        {/* Body */}
        {body && (
          <CustomPortableText
            paragraphClasses="max-w-3xl text-xl"
            value={body}
          />
        )}

        {/* TODO: Build out components for the rest of the page builder. */}

        {pageBuilder &&
          pageBuilder.map((block, key) => {
            // console.log(block)
            switch (block._type) {
              case 'hero':
                return <HeroSectionCentredWithImage block={block} key={key} />
              default:
                return null
            }
          })}
      </div>
      <div className="absolute left-0 w-screen border-t" />
    </div>
  )
}

export default Page
