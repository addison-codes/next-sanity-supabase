import { login, loginWithGoogle, logout, signup } from './actions'

export default function LoginPage() {
  return (
    <div>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button formAction={login}>Log in</button>
        <button formAction={signup}>Sign up</button>
      </form>
      <form>
        <button formAction={loginWithGoogle}>Log in with Google</button>
        <button formAction={logout}>Log out</button>
      </form>
    </div>
  )
}
