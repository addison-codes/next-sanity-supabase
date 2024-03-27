'use client'

import Link from 'next/link'
import React from 'react'

import { Button } from '@/components/ui/button'

export default function AuthButtonCient({ session }) {
  return session ? (
    <Button asChild>
      <Link href="/dashboard">Dashboard</Link>
    </Button>
  ) : (
    <Button asChild>
      <Link href="/login">Login</Link>
    </Button>
  )
}
