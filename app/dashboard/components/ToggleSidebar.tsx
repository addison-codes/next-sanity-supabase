'use client'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import React from 'react'

import { Button } from '@/components/ui/button'
export default function ToggleSidebar() {
  return (
    <Button
      variant="outline"
      className="block lg:hidden"
      onClick={() => document.getElementById('toggle-sidebar')?.click()}
    >
      <HamburgerMenuIcon />
    </Button>
  )
}
