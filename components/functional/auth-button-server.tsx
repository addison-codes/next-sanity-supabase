import AuthButtonCient from '@/components/functional/auth-button-client'
import { createClient } from '@/utils/supabase/server'

export default async function AuthButtonServer() {
  const supabase = createClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()

  return <AuthButtonCient session={session} />
}
