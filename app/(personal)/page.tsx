import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import Link from 'next/link'

import { HomePage } from '@/components/pages/home/HomePage'
import { studioUrl } from '@/sanity/lib/api'
import { loadHomePage } from '@/sanity/loader/loadQuery'
import { createClient } from '@/utils/supabase/server'
const HomePagePreview = dynamic(
  () => import('@/components/pages/home/HomePagePreview'),
)

export default async function IndexRoute() {
  const supabase = createClient()

  const initial = await loadHomePage()
  const { data, error } = await supabase.auth.getUser()
  console.log(data, error)

  if (draftMode().isEnabled) {
    return <HomePagePreview initial={initial} />
  }

  if (!initial.data) {
    return (
      <div className="text-center">
        You don&rsquo;t have a homepage yet,{' '}
        <Link href={`${studioUrl}/desk/home`} className="underline">
          create one now
        </Link>
        !
      </div>
    )
  }

  return <HomePage data={initial.data} />
}
