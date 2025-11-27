'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'

export default function DashboardPage() {
  const { t } = useTranslation()
  const [activeMenu, setActiveMenu] = useState(t('dashboard.menuOverview'))

  const menuItems = [
    { id: 'overview', label: t('dashboard.menuOverview'), icon: 'dashboard', active: true },
    { id: 'deposit', label: t('dashboard.menuDeposit'), icon: 'account_balance_wallet' },
    { id: 'withdraw', label: t('dashboard.menuWithdraw'), icon: 'payments' },
    { id: 'bet-history', label: t('dashboard.menuBetHistory'), icon: 'receipt_long' },
    { id: 'game-history', label: t('dashboard.menuGameHistory'), icon: 'casino' },
    { id: 'bonuses', label: t('dashboard.menuBonuses'), icon: 'emoji_events' },
    { id: 'messages', label: t('dashboard.menuMessages'), icon: 'mail' },
    { id: 'settings', label: t('dashboard.menuSettings'), icon: 'settings' }
  ]

  const recentActivities = [
    {
      id: 1,
      type: 'deposit',
      title: t('dashboard.activityDeposit'),
      description: 'Visa Kart',
      amount: '+ ₺250.00',
      amountColor: 'text-teal',
      icon: 'paid',
      iconBg: 'bg-teal/10',
      iconColor: 'text-teal',
      date: `${t('dashboard.today')}, 14:32`
    },
    {
      id: 2,
      type: 'bet',
      title: t('dashboard.activityBet'),
      description: 'Galatasaray - Fenerbahçe',
      amount: '- ₺50.00',
      amountColor: 'text-red-400',
      icon: 'sports_soccer',
      iconBg: 'bg-red-500/10',
      iconColor: 'text-red-400',
      date: `${t('dashboard.yesterday')}, 21:05`
    },
    {
      id: 3,
      type: 'win',
      title: t('dashboard.activityWin'),
      description: 'Sweet Bonanza',
      amount: '+ ₺120.75',
      amountColor: 'text-green-400',
      icon: 'toll',
      iconBg: 'bg-green-500/10',
      iconColor: 'text-green-400',
      date: `2 ${t('dashboard.daysAgo')}`
    }
  ]

  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark font-display text-[#EAEAEA]">
      {/* SideNavBar */}
      <aside className="w-64 flex-col bg-background-dark border-r border-surface hidden lg:flex">
        <div className="flex items-center gap-3 px-6 py-5 border-b border-surface">
          <div className="size-8 text-primary">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_6_319)">
                <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"></path>
              </g>
              <defs><clipPath id="clip0_6_319"><rect fill="white" height="48" width="48"></rect></clipPath></defs>
            </svg>
          </div>
          <Link href="/">
            <h2 className="text-white text-xl font-bold">CasinoPlatform</h2>
          </Link>
        </div>
        <div className="flex flex-col flex-1 p-4">
          <div className="flex items-center gap-3 p-2 mb-4">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAuhux6dpQvPR-RdOeaTaRrgQkV5Eq0ycakfmhZ14nIjMP68y4K7cXqyORaLFyN0P3tEwtd0zZqPHn5rulfpLx7bkvQElTJmDbLf6Z44yXJAlanpWVQqtzFfVEkFtQzWBb5CBABwV-PJyT82HfkwXfNrquaMr92GzVOd2NyezQu1QoSzfn8PkY_ukvA5q1szlNZBBw1SZD83oQj2FTqIMaRH8Js3ufJIyWtGhy9ml7_96FcmxSt35SIW7FQ2v-822p0zaAR0bRc0S8")' }}></div>
            <div className="flex flex-col">
              <h1 className="text-white text-base font-medium leading-normal">Kullanıcı Adı</h1>
              <p className="text-gray-400 text-sm font-normal leading-normal">user@email.com</p>
            </div>
          </div>
          <nav className="flex flex-col gap-2">
            {menuItems.map((item) => {
              const getHref = (id) => {
                switch(id) {
                  case 'overview': return '/dashboard'
                  case 'deposit': return '/deposit'
                  case 'withdraw': return '/withdraw'
                  case 'bet-history': return '/dashboard/bet-history'
                  case 'game-history': return '/dashboard/game-history'
                  case 'bonuses': return '/dashboard/bonuses'
                  case 'messages': return '/dashboard/messages'
                  case 'settings': return '/settings'
                  default: return '/dashboard'
                }
              }
              
              return (
                <Link
                  key={item.id}
                  href={getHref(item.id)}
                  onClick={() => setActiveMenu(item.label)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                    activeMenu === item.label
                      ? 'bg-surface text-primary'
                      : 'hover:bg-surface/50'
                  }`}
                >
                  <span
                    className={`material-symbols-outlined ${activeMenu === item.label ? 'text-blue' : ''}`}
                    style={activeMenu === item.label ? { fontVariationSettings: "'FILL' 1" } : {}}
                  >
                    {item.icon}
                  </span>
                  <p className="text-white text-sm font-medium leading-normal">{item.label}</p>
                </Link>
              )
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* TopNavBar */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-surface px-4 sm:px-6 py-3">
          <div className="flex items-center gap-4 text-white">
            <button className="lg:hidden p-2 -ml-2">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="hidden items-center gap-4 text-white lg:flex">
              <div className="size-5 text-primary">
                <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip1_6_319)">
                    <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"></path>
                  </g>
                  <defs>
                    <clipPath id="clip1_6_319">
                      <rect fill="white" height="48" width="48"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <Link href="/">
                <h2 className="text-white text-lg font-bold">CasinoPlatform</h2>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-xs text-gray-400">{t('common.balance')}</span>
              <span className="font-bold text-white">₺1,500.00</span>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-background-dark text-sm font-bold shadow-md hover:brightness-110 transition-all">
              <span className="truncate">{t('common.deposit')}</span>
            </button>
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-surface text-white gap-2 text-sm font-bold min-w-0 px-2.5 hover:bg-surface/80 transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 hidden sm:block" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD_Dqon_1r08olFx9dGrieAk2FkxXdxlY_aVC96bO-COx1kf4TE6RT2zvFYTnBerRh1dbUvqTXwacCTwfYwr9-WG58W72qmIaKv93ik0_SJ55IN2zR7sobveE-fk2ed44m2aPMMlvJMYVo31_fjYj3LzQtjA4lNHc5CyAhMwXIVoX-cHiZst3G6McMDdtmWY47YTEfIPeW_C5DNSH4R7JuaHK1bRHd5M8TnxjBz5ceOS5BWyKZFaxCEIodf2NJmbeWYKvZQE-d4j1c")' }}></div>
          </div>
        </header>

        {/* Main Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col gap-8">
            {/* PageHeading */}
            <div className="flex flex-wrap justify-between gap-3">
              <div className="flex min-w-72 flex-col gap-1">
                <p className="text-white text-3xl md:text-4xl font-black tracking-tight">{t('dashboard.title')}</p>
                <p className="text-gray-400 text-base font-normal">{t('dashboard.welcomeBack')}</p>
              </div>
            </div>

            {/* Grid for cards */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              {/* Left column */}
              <div className="xl:col-span-2 flex flex-col gap-6">
                {/* Wallet Card */}
                <div className="rounded-lg bg-surface p-6 shadow-lg">
                  <p className="text-gray-400 text-sm font-medium mb-1">{t('dashboard.myWallet')}</p>
                  <p className="text-white text-4xl font-bold tracking-tight mb-2">₺1,500.00</p>
                  <p className="text-gray-300 text-base font-normal mb-6">{t('dashboard.cashBalance')}: ₺1,000.00 | {t('dashboard.bonusBalance')}: ₺500.00</p>
                  <div className="flex flex-wrap gap-3">
                    <button className="flex flex-1 sm:flex-none min-w-[120px] items-center justify-center rounded-lg h-12 px-5 bg-primary text-background-dark text-base font-bold shadow-md hover:brightness-110 transition-all">
                      <span className="truncate">{t('common.deposit')}</span>
                    </button>
                    <button className="flex flex-1 sm:flex-none min-w-[120px] items-center justify-center rounded-lg h-12 px-5 bg-[#3e3e47] text-white text-base font-bold hover:bg-[#4a4a55] transition-colors">
                      <span className="truncate">{t('common.withdraw')}</span>
                    </button>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="rounded-lg bg-surface p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-4">{t('dashboard.recentActivities')}</h3>
                  <div className="flex flex-col gap-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-center gap-4">
                        <div className={`flex items-center justify-center size-10 rounded-full ${activity.iconBg}`}>
                          <span className={`material-symbols-outlined ${activity.iconColor}`}>{activity.icon}</span>
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-white">{activity.title}</p>
                          <p className="text-sm text-gray-400">{activity.description}</p>
                        </div>
                        <div className="text-right">
                          <p className={`font-bold ${activity.amountColor}`}>{activity.amount}</p>
                          <p className="text-xs text-gray-500">{activity.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="xl:col-span-1 flex flex-col gap-6">
                {/* Active Bonuses Card */}
                <div className="rounded-lg bg-surface p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-4">{t('dashboard.activeBonuses')}</h3>
                  <div className="flex flex-col gap-4">
                    <p className="text-base font-semibold text-primary">{t('dashboard.welcomeBonus')}</p>
                    <p className="text-sm text-gray-300">{t('dashboard.welcomeBonusDescription')}</p>
                    <div>
                      <div className="flex justify-between text-xs text-gray-400 mb-1">
                        <span>{t('dashboard.progress')}</span>
                        <span>₺1,250 / ₺5,000</span>
                      </div>
                      <div className="w-full bg-[#3e3e47] rounded-full h-2.5">
                        <div className="bg-blue h-2.5 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                    </div>
                    <button className="w-full mt-2 flex items-center justify-center rounded-lg h-11 px-5 bg-[#3e3e47] text-white text-sm font-bold hover:bg-[#4a4a55] transition-colors">
                      <span className="truncate">{t('dashboard.seeAllBonuses')}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
