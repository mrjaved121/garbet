'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export default function AdminProtectedRoute({ children }) {
  const router = useRouter()
  const pathname = usePathname()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAuth = () => {
      // Check if user is authenticated as admin
      const adminToken = localStorage.getItem('adminToken')
      const isAdmin = localStorage.getItem('isAdmin')
      
      if (!adminToken || isAdmin !== 'true') {
        // Redirect to admin login
        router.push('/admin/login')
        return
      }

      setIsAuthenticated(true)
      setIsLoading(false)
    }

    checkAuth()
  }, [router])

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-background-dark">
        <div className="flex flex-col items-center gap-4">
          <div className="size-8 animate-spin rounded-full border-4 border-[#0dccf2] border-t-transparent"></div>
          <p className="text-white/70 text-sm">Verifying access...</p>
        </div>
      </div>
    )
  }

  // Only render children if authenticated
  if (!isAuthenticated) {
    return null
  }

  return <>{children}</>
}

