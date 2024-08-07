import { redirect } from 'next/navigation'
import React, { ReactNode } from 'react'

import { createClient } from '@/utils/supabase/server'

import MobileSideNav from './components/MobileSideNav'
import SideNav from './components/SideNav'
import ToggleSidebar from './components/ToggleSidebar'

export default async function Layout({ children }: { children: ReactNode }) {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/')
  }
  return (
    <div className="flex w-full ">
      <div className="flex flex-col h-screen">
        <SideNav />
        <MobileSideNav />
      </div>

      <div className="w-full p-5 space-y-5 bg-gray-100 sm:flex-1 sm:p-10 dark:bg-inherit">
        <ToggleSidebar />
        {children}
      </div>
    </div>
  )
}
