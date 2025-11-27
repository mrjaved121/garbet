'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const { t } = useTranslation()
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (loginData) => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      })

      const data = await response.json()

      if (response.ok) {
        // Login successful - store token and redirect
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify({
          _id: data._id,
          name: data.name,
          email: data.email
        }))
        alert('Login successful!')
        router.push('/dashboard')
      } else {
        // Login failed
        alert(data.message || 'Login failed. Please try again.')
      }
    } catch (error) {
      console.error('Login error:', error)
      alert('Network error. Please check your connection and try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validation
    if (!email.trim()) {
      alert('Please enter your email')
      return
    }
    
    if (!password) {
      alert('Please enter your password')
      return
    }
    
    // Email validation matching backend regex
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email')
      return
    }
    
    const loginData = {
      email: email.toLowerCase().trim(),
      password: password
    }
    
    await handleLogin(loginData)
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
              <h1 className="text-2xl font-bold leading-tight tracking-tight text-white md:text-3xl">{t('login.title')}</h1>
              <p className="mt-1 text-sm text-[#E0E0E0]/60">{t('login.subtitle')}</p>
            </div>

            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-medium leading-normal text-white" htmlFor="email">
                  {t('login.email')}
                </label>
                <input
                  className="h-12 w-full rounded-lg border border-[#3a3a3a] bg-[#2a2a2a] px-4 text-sm font-normal leading-normal text-white placeholder:text-gray-500 transition-all focus:border-primary focus:bg-[#2f2f2f] focus:outline-none focus:ring-2 focus:ring-primary/20"
                  id="email"
                  placeholder={t('login.emailPlaceholder')}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-required="true"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-2 text-sm font-medium leading-normal text-white" htmlFor="password">
                  {t('login.password')}
                </label>
                <div className="relative flex w-full items-center">
                  <input
                    className="h-12 w-full rounded-lg border border-[#3a3a3a] bg-[#2a2a2a] px-4 pr-12 text-sm font-normal leading-normal text-white placeholder:text-gray-500 transition-all focus:border-primary focus:bg-[#2f2f2f] focus:outline-none focus:ring-2 focus:ring-primary/20"
                    id="password"
                    placeholder={t('login.passwordPlaceholder')}
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    aria-required="true"
                  />
                  <button
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    className="absolute right-3 flex items-center justify-center text-gray-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 rounded"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex={0}
                  >
                    <span className="material-symbols-outlined text-xl">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>

              <div className="text-right">
                <Link
                  className="text-sm font-medium text-[#4D96FF] hover:text-primary hover:underline transition-colors"
                  href="/auth/forgot-password"
                >
                  {t('login.forgotPassword')}
                </Link>
              </div>

              <button
                className="mt-2 flex h-12 w-full items-center justify-center rounded-lg bg-primary text-center text-sm font-bold text-black transition-all hover:brightness-110 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#1E1E1E] disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent"></div>
                    <span>Signing In...</span>
                  </div>
                ) : (
                  t('common.login')
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                {t('login.dontHaveAccount')}{' '}
                <Link className="font-medium text-[#4D96FF] hover:text-primary hover:underline transition-colors" href="/auth/register">
                  {t('login.createAccount')}
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
