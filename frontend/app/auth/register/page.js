'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'

export default function RegisterPage() {
  const { t } = useTranslation()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    currency: 'TRY',
    acceptTerms: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle registration logic here
    if (formData.password !== formData.confirmPassword) {
      alert(t('register.passwordMismatch'))
      return
    }
    if (!formData.acceptTerms) {
      alert(t('register.mustAcceptTerms'))
      return
    }
    console.log('Registration attempt:', formData)
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
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">{t('register.title')}</h2>
            <p className="mt-2 text-sm text-gray-400">{t('register.subtitle')}</p>
          </div>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <label className="flex flex-col">
              <p className="text-sm font-medium leading-normal text-gray-300 pb-2">{t('register.fullName')}</p>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1E1E1E] focus:ring-[#00F5D4] border border-gray-700 bg-gray-800 h-12 placeholder:text-gray-500 px-4 text-sm font-normal leading-normal"
                placeholder={t('register.fullNamePlaceholder')}
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </label>

            <label className="flex flex-col">
              <p className="text-sm font-medium leading-normal text-gray-300 pb-2">{t('register.email')}</p>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1E1E1E] focus:ring-[#00F5D4] border border-gray-700 bg-gray-800 h-12 placeholder:text-gray-500 px-4 text-sm font-normal leading-normal"
                placeholder={t('register.emailPlaceholder')}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label className="flex flex-col">
              <p className="text-sm font-medium leading-normal text-gray-300 pb-2">{t('register.password')}</p>
              <div className="relative flex w-full flex-1 items-center">
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1E1E1E] focus:ring-[#00F5D4] border border-gray-700 bg-gray-800 h-12 placeholder:text-gray-500 pl-4 pr-10 text-sm font-normal leading-normal"
                  placeholder={t('register.passwordPlaceholder')}
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  className="absolute right-3 text-gray-400 hover:text-white"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <span className="material-symbols-outlined !text-xl">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </label>

            <label className="flex flex-col">
              <p className="text-sm font-medium leading-normal text-gray-300 pb-2">{t('register.confirmPassword')}</p>
              <div className="relative flex w-full flex-1 items-center">
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1E1E1E] focus:ring-[#00F5D4] border border-gray-700 bg-gray-800 h-12 placeholder:text-gray-500 pl-4 pr-10 text-sm font-normal leading-normal"
                  placeholder={t('register.confirmPasswordPlaceholder')}
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <button
                  className="absolute right-3 text-gray-400 hover:text-white"
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <span className="material-symbols-outlined !text-xl">
                    {showConfirmPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </label>

            <div className="relative flex flex-col">
              <p className="text-sm font-medium leading-normal text-gray-300 pb-2">{t('register.currency')}</p>
              <select
                className="form-select flex w-full cursor-pointer appearance-none items-center justify-between rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1E1E1E] focus:ring-[#00F5D4] h-12"
                name="currency"
                value={formData.currency}
                onChange={handleChange}
                required
              >
                <option value="TRY">TRY (₺)</option>
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
              </select>
              <div className="pointer-events-none absolute right-3 top-10 flex items-center text-gray-400">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 pt-2">
              <input
                className="form-checkbox mt-0.5 size-4 shrink-0 cursor-pointer rounded border-gray-600 bg-gray-700 text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#1E1E1E]"
                id="terms-checkbox"
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                required
              />
              <label className="text-xs text-gray-400" htmlFor="terms-checkbox">
                {t('register.acceptTerms')}{' '}
                <Link className="font-medium text-[#00BFFF] hover:underline" href="/terms">
                  {t('register.terms')}
                </Link>
                {' '}ve{' '}
                <Link className="font-medium text-[#00BFFF] hover:underline" href="/privacy">
                  {t('register.privacy')}
                </Link>
                {' '}{t('register.acceptTermsEnd')}
              </label>
            </div>

            <button
              className="mt-4 flex h-12 w-full items-center justify-center rounded-lg bg-primary text-center text-sm font-bold text-black transition-transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#1E1E1E]"
              type="submit"
            >
              {t('register.createAccount')}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              {t('register.alreadyHaveAccount')}{' '}
              <Link className="font-medium text-[#00BFFF] hover:underline" href="/auth/login">
                {t('register.login')}
              </Link>
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
