'use client'

import { useEffect } from 'react'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import { SideBar } from './SideNav'

export default function MobileSideNav() {
  useEffect(() => {
    window.addEventListener('resize', (e: UIEvent) => {
      const w = e.target as Window
      if (w.innerWidth >= 1024) {
        document.getElementById('sidebar-close')?.click()
      }
    })
    return () => {
      window.removeEventListener('resize', () => {})
    }
  }, [])

  return (
    <Sheet>
      <SheetTrigger asChild id="toggle-sidebar">
        <span></span>
      </SheetTrigger>
      <SheetContent side={'left'} className="flex dark:bg-graident-dark">
        <SideBar />
      </SheetContent>
    </Sheet>
  )
}
