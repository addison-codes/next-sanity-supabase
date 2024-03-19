import { Button } from '@/components/ui/button'

import { login, logout, signup } from './actions'
import { loginWithGoogle } from './google-login'

export default function LoginPage() {
  return (
    <div>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <Button formAction={login}>Log in</Button>
        <Button formAction={signup}>Sign up</Button>
      </form>
      <form>
        <Button formAction={loginWithGoogle}>Log in with Google</Button>
        <Button formAction={logout}>Log out</Button>
      </form>
    </div>
  )
}
