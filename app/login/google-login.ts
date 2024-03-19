'use client'

import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/client'

export async function loginWithGoogle() {
  const supabase = createClient()

  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${location.origin}/auth/callback`,
    },
  })

  if (error) {
    redirect('/error')
  }
}
