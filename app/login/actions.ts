'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

// export async function loginWithGoogle() {
//   const supabase = createClient()

//   let redirectURL: string = 'http://localhost:3000/auth/callback'

//   process.env.VERCEL_ENV === 'production'
//     ? (redirectURL = `https://${process.env.VERCEL_URL}/auth/callback`)
//     : (redirectURL = `http://localhost:3000/auth/callback`)

//   const { data, error } = await supabase.auth.signInWithOAuth({
//     provider: 'google',
//     options: {
//       redirectTo: redirectURL,
//     },
//   })

//   if (error) {
//     redirect('/error')
//   }

//   revalidatePath('/', 'layout')
//   redirect(data.url)
// }

export async function logout() {
  const supabase = createClient()

  const { error } = await supabase.auth.signOut()

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}