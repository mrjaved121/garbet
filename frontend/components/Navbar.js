'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslation } from '@/hooks/useTranslation'
import LanguageSwitcher from '@/components/LanguageSwitcher'

export default function Navbar() {
  const { t } = useTranslation()
  const pathname = usePathname()
  const [currentTime, setCurrentTime] = useState('00:00:00')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      const seconds = String(now.getSeconds()).padStart(2, '0')
      setCurrentTime(`${hours}:${minutes}:${seconds}`)
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const isActive = (path) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path)
  }

  return (
    <header className="flex flex-col sticky top-0 z-50 bg-[#151328]/90 backdrop-blur-sm">
      {/* Top Bar */}
      <div className="flex items-center justify-between whitespace-nowrap px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center gap-4">
          <Link href="/">
            <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] italic">betsilin</h2>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <Link href="/deposit" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded h-9 px-4 bg-green-500 text-white text-xs font-bold leading-normal tracking-wide hover:bg-green-600 transition-all gap-1">
            <span className="material-symbols-outlined text-base">account_balance_wallet</span>
            <span className="truncate">DEPOSIT</span>
          </Link>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded h-9 px-4 bg-yellow-500 text-black text-xs font-bold leading-normal tracking-wide hover:bg-yellow-600 transition-colors gap-1">
            <span className="material-symbols-outlined text-base">star</span>
            <span className="truncate">BONUSES</span>
          </button>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded h-9 px-4 bg-[#2b284e] text-white text-xs font-bold leading-normal tracking-wide hover:bg-[#3a376a] transition-colors gap-1">
            <span className="material-symbols-outlined text-base">email</span>
            <span className="truncate">MESSAGES</span>
          </button>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/auth/login" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded h-9 px-4 bg-blue-600 text-white text-xs font-bold leading-normal tracking-wide hover:bg-blue-700 transition-all">
            <span className="truncate">{t('common.signIn')}</span>
          </Link>
          <Link href="/auth/register" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded h-9 px-4 bg-gray-600 text-white text-xs font-bold leading-normal tracking-wide hover:bg-gray-700 transition-colors">
            <span className="truncate">{t('common.signUp')}</span>
          </Link>
          <div className="hidden sm:flex items-center gap-4 pl-2">
            <LanguageSwitcher />
            <div className="flex items-center gap-1.5 text-white/80 text-xs">
              <span className="material-symbols-outlined text-base">schedule</span>
              <span>{currentTime}</span>
            </div>
          </div>
          <button className="lg:hidden flex items-center justify-center h-9 w-9 text-white">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="hidden lg:flex items-center justify-center gap-8 border-t border-b border-white/10 px-4 sm:px-6 lg:px-8 bg-[#1f1d37]">
        <Link 
          href="/promotions" 
          className={`secondary-nav-item ${isActive('/promotions') ? 'active' : ''}`}
        >
          <span className="material-symbols-outlined text-base">military_tech</span> {t('common.promotions')}
        </Link>
        <Link 
          href="/live-betting" 
          className={`secondary-nav-item ${isActive('/live-betting') ? 'active' : ''}`}
        >
          <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: isActive('/live-betting') ? "'FILL' 1" : "'FILL' 0" }}>bolt</span> {t('common.liveBet')}
        </Link>
        <Link 
          href="/sports" 
          className={`secondary-nav-item ${isActive('/sports') ? 'active' : ''}`}
        >
          <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: isActive('/sports') ? "'FILL' 1" : "'FILL' 0" }}>sports_soccer</span> {t('common.sports')}
        </Link>
        <Link 
          href="/slots" 
          className={`secondary-nav-item ${isActive('/slots') ? 'active' : ''}`}
        >
          <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: isActive('/slots') ? "'FILL' 1" : "'FILL' 0" }}>casino</span> {t('common.slotGames')}
        </Link>
        <Link 
          href="/live-casino" 
          className={`secondary-nav-item ${isActive('/live-casino') ? 'active' : ''}`}
        >
          <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: isActive('/live-casino') ? "'FILL' 1" : "'FILL' 0" }}>playing_cards</span> {t('common.liveCasino')}
        </Link>
        <Link 
          href="/crash" 
          className={`secondary-nav-item ${isActive('/crash') ? 'active' : ''}`}
        >
          <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: isActive('/crash') ? "'FILL' 1" : "'FILL' 0" }}>trending_up</span> CRASH
        </Link>
        <a className="secondary-nav-item" href="#">
          <span className="material-symbols-outlined text-base">live_tv</span> TV GAMES
        </a>
        <a className="secondary-nav-item" href="#">
          <span className="material-symbols-outlined text-base">emoji_events</span> TOURNAMENTS
        </a>
        <a className="secondary-nav-item" href="#">
          <span className="material-symbols-outlined text-base">more_horiz</span> More
        </a>
      </nav>
    </header>
  )
}

