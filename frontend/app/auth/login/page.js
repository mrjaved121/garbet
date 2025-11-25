'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempt:', { email, password })
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-[#121212] bg-[url('https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat p-4 md:p-6 lg:p-8">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      
      <div className="relative z-10 flex w-full max-w-md flex-col items-center">
        <header className="mb-8 text-center">
          <svg className="mx-auto h-12 w-auto text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"></path>
          </svg>
        </header>

        <main className="w-full rounded-xl border border-white/10 bg-[#1E1E1E]/85 p-6 shadow-2xl shadow-black/30 md:p-8">
          <div className="flex flex-col gap-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold leading-tight tracking-tight text-white md:text-3xl">Welcome Back</h1>
              <p className="mt-1 text-sm text-[#E0E0E0]/60">Login to your account to continue</p>
            </div>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label className="pb-2 text-sm font-medium leading-normal text-[#E0E0E0]" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="form-input h-12 w-full flex-1 resize-none overflow-hidden rounded-lg border border-[#544d3b] bg-[#27241c] p-3 text-base font-normal leading-normal text-white placeholder:text-[#b9b29d]/70 focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/40"
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="pb-2 text-sm font-medium leading-normal text-[#E0E0E0]" htmlFor="password">
                  Password
                </label>
                <div className="relative flex w-full flex-1 items-stretch">
                  <input
                    className="form-input h-12 w-full flex-1 resize-none overflow-hidden rounded-lg border border-[#544d3b] bg-[#27241c] p-3 pr-10 text-base font-normal leading-normal text-white placeholder:text-[#b9b29d]/70 focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/40"
                    id="password"
                    placeholder="Enter your password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    aria-label="Toggle password visibility"
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#b9b29d] hover:text-white"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="material-symbols-outlined text-xl">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>

              <div className="text-right">
                <Link
                  className="text-sm font-normal leading-normal text-[#4D96FF] underline hover:text-primary"
                  href="/auth/forgot-password"
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                className="flex h-12 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-5 text-base font-bold leading-normal tracking-[0.015em] text-[#181611] transition-all hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#1E1E1E]"
                type="submit"
              >
                <span className="truncate">Login</span>
              </button>
            </form>

            <div className="mt-2 text-center">
              <p className="text-sm text-[#E0E0E0]/80">
                Don&apos;t have an account?{' '}
                <Link className="font-semibold text-[#4D96FF] hover:text-primary" href="/auth/register">
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </main>
      </div>

      <footer className="absolute bottom-4 left-4 right-4 z-10 text-center">
        <p className="text-xs text-white/50">© 2024 Your Casino. All rights reserved. Please play responsibly.</p>
      </footer>
    </div>
  )
}
