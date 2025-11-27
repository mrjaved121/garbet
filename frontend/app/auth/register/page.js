'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const { t } = useTranslation()
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    currency: 'USD',
    acceptTerms: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleRegistration = async (registrationData) => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      })

      const data = await response.json()

      if (response.ok) {
        // Registration successful
        alert('Registration successful! Please login.')
        router.push('/auth/login')
      } else {
        // Registration failed
        alert(data.message || 'Registration failed. Please try again.')
      }
    } catch (error) {
      console.error('Registration error:', error)
      alert('Network error. Please check your connection and try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validation matching backend requirements
    if (!formData.name.trim()) {
      alert('Please add a name')
      return
    }
    
    if (!formData.email.trim()) {
      alert('Please add an email')
      return
    }
    
    // Email validation matching backend regex
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!emailRegex.test(formData.email)) {
      alert('Please add a valid email')
      return
    }
    
    if (!formData.password) {
      alert('Please add a password')
      return
    }
    
    if (formData.password.length < 6) {
      alert('Password must be at least 6 characters long')
      return
    }
    
    if (formData.password !== formData.confirmPassword) {
      alert(t('register.passwordMismatch'))
      return
    }
    
    if (!formData.acceptTerms) {
      alert(t('register.mustAcceptTerms'))
      return
    }
    
    // Prepare data for backend (remove confirmPassword and acceptTerms)
    const registrationData = {
      name: formData.name.trim(),
      email: formData.email.toLowerCase().trim(),
      password: formData.password,
      currency: formData.currency
    }
    
    // Send registration data to backend
    await handleRegistration(registrationData)
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8 bg-background-dark text-[#F5F5F5]">
      <div className="w-full max-w-md">
        <header className="mb-8 flex flex-col items-center gap-4 text-white">
          <div className="flex items-center gap-3">
            <div className="size-8 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6_319)">
                  <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor"></path>
                </g>
                <defs>
                  <clipPath id="clip0_6_319">
                    <rect fill="white" height="48" width="48"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <Link href="/">
              <h1 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em]">CasinoPlatform</h1>
            </Link>
          </div>
        </header>

        <main className="w-full rounded-xl bg-[#1E1E1E] p-6 sm:p-8 shadow-[0_0_20px_rgba(255,215,0,0.1)]">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">{t('register.title')}</h2>
            <p className="mt-2 text-sm text-gray-400">{t('register.subtitle')}</p>
          </div>

          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium leading-normal text-white" htmlFor="name">
                {t('register.fullName')}
              </label>
              <input
                id="name"
                className="h-12 w-full rounded-lg border border-[#3a3a3a] bg-[#2a2a2a] px-4 text-sm font-normal leading-normal text-white placeholder:text-gray-500 transition-all focus:border-primary focus:bg-[#2f2f2f] focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder={t('register.fullNamePlaceholder')}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                minLength={1}
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium leading-normal text-white" htmlFor="email">
                {t('register.email')}
              </label>
              <input
                id="email"
                className="h-12 w-full rounded-lg border border-[#3a3a3a] bg-[#2a2a2a] px-4 text-sm font-normal leading-normal text-white placeholder:text-gray-500 transition-all focus:border-primary focus:bg-[#2f2f2f] focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder={t('register.emailPlaceholder')}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium leading-normal text-white" htmlFor="password">
                {t('register.password')}
              </label>
              <div className="relative flex w-full items-center">
                <input
                  id="password"
                  className="h-12 w-full rounded-lg border border-[#3a3a3a] bg-[#2a2a2a] px-4 pr-12 text-sm font-normal leading-normal text-white placeholder:text-gray-500 transition-all focus:border-primary focus:bg-[#2f2f2f] focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder={t('register.passwordPlaceholder')}
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={6}
                />
                <button
                  className="absolute right-3 flex items-center justify-center text-gray-400 transition-colors hover:text-white focus:outline-none"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  <span className="material-symbols-outlined text-xl">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium leading-normal text-white" htmlFor="confirmPassword">
                {t('register.confirmPassword')}
              </label>
              <div className="relative flex w-full items-center">
                <input
                  id="confirmPassword"
                  className="h-12 w-full rounded-lg border border-[#3a3a3a] bg-[#2a2a2a] px-4 pr-12 text-sm font-normal leading-normal text-white placeholder:text-gray-500 transition-all focus:border-primary focus:bg-[#2f2f2f] focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder={t('register.confirmPasswordPlaceholder')}
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <button
                  className="absolute right-3 flex items-center justify-center text-gray-400 transition-colors hover:text-white focus:outline-none"
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                >
                  <span className="material-symbols-outlined text-xl">
                    {showConfirmPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            <div className="relative flex flex-col">
              <label className="mb-2 text-sm font-medium leading-normal text-white" htmlFor="currency">
                {t('register.currency')}
              </label>
              <select
                id="currency"
                className="h-12 w-full appearance-none rounded-lg border border-[#3a3a3a] bg-[#2a2a2a] px-4 pr-10 text-sm font-normal leading-normal text-white transition-all focus:border-primary focus:bg-[#2f2f2f] focus:outline-none focus:ring-2 focus:ring-primary/20"
                name="currency"
                value={formData.currency}
                onChange={handleChange}
                required
              >
                <option value="USD" className="bg-[#2a2a2a]">USD ($)</option>
                <option value="EUR" className="bg-[#2a2a2a]">EUR (€)</option>
                <option value="TRY" className="bg-[#2a2a2a]">TRY (₺)</option>
              </select>
              <div className="pointer-events-none absolute right-3 top-[38px] flex items-center text-gray-400">
                <span className="material-symbols-outlined text-xl">expand_more</span>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-1">
              <input
                className="mt-1 size-4 shrink-0 cursor-pointer rounded border-2 border-[#3a3a3a] bg-[#2a2a2a] text-primary transition-colors checked:border-primary checked:bg-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                id="terms-checkbox"
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                required
              />
              <label className="text-xs leading-relaxed text-gray-400" htmlFor="terms-checkbox">
                {t('register.acceptTerms')}{' '}
                <Link className="font-medium text-[#4D96FF] hover:text-primary hover:underline transition-colors" href="/terms">
                  {t('register.terms')}
                </Link>
                {' '}ve{' '}
                <Link className="font-medium text-[#4D96FF] hover:text-primary hover:underline transition-colors" href="/privacy">
                  {t('register.privacy')}
                </Link>
                {' '}{t('register.acceptTermsEnd')}
              </label>
            </div>

            <button
              className="mt-2 flex h-12 w-full items-center justify-center rounded-lg bg-primary text-center text-sm font-bold text-black transition-all hover:brightness-110 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#1E1E1E] disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent"></div>
                  <span>Creating Account...</span>
                </div>
              ) : (
                t('register.createAccount')
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              {t('register.alreadyHaveAccount')}{' '}
              <Link className="font-medium text-[#4D96FF] hover:text-primary hover:underline transition-colors" href="/auth/login">
                {t('register.login')}
              </Link>
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
