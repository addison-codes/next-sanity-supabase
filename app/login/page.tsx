import Image from 'next/image'
import Link from 'next/link'

import GoogleLogo from '@/components/google-logo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { login, forgotPassword } from './actions'
import { loginWithGoogle } from './google-login'

export default function LoginPage() {
  // return (
  //   <div>
  //     <form>
  //       <label htmlFor="email">Email:</label>
  //       <input id="email" name="email" type="email" required />
  //       <label htmlFor="password">Password:</label>
  //       <input id="password" name="password" type="password" required />
  //       <Button formAction={login}>Log in</Button>
  //       <Button formAction={signup}>Sign up</Button>
  //     </form>
  //     <form className="flex gap-4 center">
  //       <Button formAction={loginWithGoogle} className="center">
  //         <GoogleLogo className="mr-2" /> Log in with Google
  //       </Button>
  //       <Button formAction={logout}>Log out</Button>
  //     </form>
  //   </div>
  // )
  return (
    <section className="flex min-h-screen">
      <div className="hidden md:block w-1/2 bg-gradient-to-r from-[#62501d] to-[#3b1c2d]" />

      <div className="w-1/2">
        <div className="flex items-center justify-center h-screen py-12">
          <div className="grid gap-6 mx-auto">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="text-balance text-muted-foreground">
                Enter your email below to login to your account
              </p>
            </div>
            <div className="space-y-4">
              <form>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="name@example.com"
                    required
                    type="email"
                  />
                </div>
                <div className="relative space-y-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <Button
                      className="inline-block ml-auto text-sm underline"
                      variant="link"
                      formAction={forgotPassword}
                    >
                      Forgot your password?
                    </Button>
                  </div>
                  <Input id="password" required type="password" />
                  <Button
                    className="absolute bottom-1 right-1 h-7 w-7"
                    size="icon"
                    variant="ghost"
                  >
                    <EyeIcon className="w-4 h-4" />
                    <span className="sr-only">Toggle password visibility</span>
                  </Button>
                </div>
                <Button formAction={login} className="w-full" type="submit">
                  Login
                </Button>
              </form>
              <form>
                <Button
                  formAction={loginWithGoogle}
                  className="w-full"
                  variant="outline"
                >
                  <GoogleLogo className="mr-2" />
                  Login with Google
                </Button>
              </form>
            </div>
            <div className="mt-4 text-sm text-center">
              Don&apos;t have an account?&nbsp;
              <Link className="underline" href="#">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function EyeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
