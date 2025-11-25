'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function AdminLoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      // For now, we'll use a simple check. In production, this should call your backend API
      // Check if it's an admin email (you can customize this)
      const adminEmails = ['admin@casino.com', 'admin@example.com']
      
      if (!adminEmails.includes(email.toLowerCase())) {
        setError('Access denied. Admin credentials required.')
        setLoading(false)
        return
      }

      // Simulate API call - Replace with actual API call
      // const response = await authAPI.login(email, password)
      // const { token, user } = response.data
      
      // For demo purposes, we'll just check the password
      // In production, this should be handled by your backend
      if (password === 'admin123' || password.length >= 6) {
        // Store admin session
        localStorage.setItem('adminToken', 'admin_' + Date.now())
        localStorage.setItem('adminEmail', email)
        localStorage.setItem('isAdmin', 'true')
        
        // Redirect to admin dashboard
        router.push('/admin')
      } else {
        setError('Invalid credentials')
      }
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-dark p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md">
        <header className="mb-8 flex flex-col items-center gap-4 text-white">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#0dccf2] text-4xl">sports_esports</span>
            <h1 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em]">CasinoAdmin</h1>
          </div>
          <p className="text-white/70 text-sm">Administrator Login</p>
        </header>

        <main className="w-full rounded-xl bg-[#1E1E1E] p-6 sm:p-8 shadow-[0_0_20px_rgba(13,204,242,0.1)] border border-white/10">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white">Admin Access</h2>
            <p className="mt-2 text-sm text-gray-400">Enter your administrator credentials</p>
          </div>

          {error && (
            <div className="mb-4 rounded-lg bg-red-500/20 border border-red-500/50 p-3">
              <p className="text-sm text-red-400">{error}</p>
            </div>
          )}

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <label className="flex flex-col">
              <p className="text-sm font-medium leading-normal text-gray-300 pb-2">Email Address</p>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1E1E1E] focus:ring-[#0dccf2] border border-gray-700 bg-gray-800 h-12 placeholder:text-gray-500 px-4 text-sm font-normal leading-normal"
                placeholder="admin@casino.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </label>

            <label className="flex flex-col">
              <p className="text-sm font-medium leading-normal text-gray-300 pb-2">Password</p>
              <div className="relative flex w-full flex-1 items-center">
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1E1E1E] focus:ring-[#0dccf2] border border-gray-700 bg-gray-800 h-12 placeholder:text-gray-500 pl-4 pr-10 text-sm font-normal leading-normal"
                  placeholder="••••••••"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                />
                <button
                  className="absolute right-3 text-gray-400 hover:text-white"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={loading}
                >
                  <span className="material-symbols-outlined !text-xl">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </label>

            <button
              className="mt-4 flex h-12 w-full items-center justify-center rounded-lg bg-[#0dccf2] text-center text-sm font-bold text-black transition-transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#0dccf2] focus:ring-offset-2 focus:ring-offset-[#1E1E1E] disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              Demo: Use admin@casino.com or admin@example.com
            </p>
            <Link className="mt-4 inline-block text-sm font-medium text-[#0dccf2] hover:underline" href="/">
              Back to Home
            </Link>
          </div>
        </main>
      </div>
    </div>
  )
}

