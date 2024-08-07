'use client'
// import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { LoaderCircle } from 'lucide-react'
import React, { useTransition } from 'react'

import { logout } from '@/app/login/actions'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function SignOut() {
  const [isPending, startTransition] = useTransition()
  const onSubmit = async () => {
    startTransition(async () => {
      await logout()
    })
  }

  return (
    <form action={onSubmit}>
      <Button className="flex items-center w-full gap-2" variant="outline">
        SignOut{' '}
        <LoaderCircle className={cn(' animate-spin', { hidden: !isPending })} />
      </Button>
    </form>
  )
}
