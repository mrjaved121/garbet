'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import AdminProtectedRoute from '@/components/AdminProtectedRoute'

function ContentManagement() {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState('banners')
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('All Statuses')

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard', href: '/admin' },
    { id: 'users', label: 'Users', icon: 'group', href: '/admin/users' },
    { id: 'bets', label: 'Bets', icon: 'receipt_long', href: '/admin/bets' },
    { id: 'games', label: 'Games', icon: 'sports_esports', href: '/admin/games' },
    { id: 'content', label: 'Content', icon: 'article', href: '/admin/content' },
    { id: 'settings', label: 'Settings', icon: 'settings', href: '/admin/settings' },
  ]

  const tabs = [
    { id: 'banners', label: 'Banners' },
    { id: 'news', label: 'News' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'static-pages', label: 'Static Pages' },
  ]

  const banners = [
    {
      id: 1,
      title: 'Welcome Bonus Banner',
      status: 'Published',
      statusColor: 'bg-green-500/20 text-green-400',
      lastUpdated: '2024-05-20',
    },
    {
      id: 2,
      title: 'Weekend Sports Boost',
      status: 'Published',
      statusColor: 'bg-green-500/20 text-green-400',
      lastUpdated: '2024-05-18',
    },
    {
      id: 3,
      title: 'New Slot Game Promo',
      status: 'Draft',
      statusColor: 'bg-yellow-500/20 text-yellow-400',
      lastUpdated: '2024-05-15',
    },
    {
      id: 4,
      title: 'Summer Festival Banner',
      status: 'Archived',
      statusColor: 'bg-slate-500/20 text-slate-400',
      lastUpdated: '2024-05-10',
    },
  ]

  const statusOptions = ['All Statuses', 'Published', 'Draft', 'Archived']

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-dark">
      <div className="flex min-h-screen">
        {/* SideNavBar */}
        <aside className="flex w-64 flex-col bg-[#111718] p-4 border-r border-r-[#3b5054]/50">
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex gap-3 items-center">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCnsI8YvrTET1wXiX4NLZ0KLd8b3Fmd3q3wMmnHitwEkHLmY3Ao-6XGJDTutyLAos9X20hu7a2meQ_TmGHCUiuaQJ0DsJi5R0GLtspCERrt3FYlsBcFXINzLtybYxmEoElKMPWpaDldaxgHpW5WqgiZoINz2M3BfFA65fVM3sxNpz1WYYRhJCjCAZL3L56al7YP5VHe8sru38K9NFEo2mGjW9qcVkyPadh08UYS66lq90k1FaVbX3ktIa-kcyVfLnP0WGCr2gfg2VU")'
                }}
              ></div>
              <div className="flex flex-col">
                <h1 className="text-white text-base font-medium leading-normal">Admin</h1>
                <p className="text-[#9cb5ba] text-sm font-normal leading-normal">Administrator</p>
              </div>
            </div>
          </div>

          <nav className="flex flex-col gap-2 flex-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  pathname === item.href
                    ? 'bg-[#0dccf2]/20 text-[#0dccf2]'
                    : 'text-white hover:bg-[#283639]'
                }`}
              >
                <span
                  className="material-symbols-outlined"
                  style={pathname === item.href ? { fontVariationSettings: "'FILL' 1" } : {}}
                >
                  {item.icon}
                </span>
                <p className="text-sm font-medium leading-normal">{item.label}</p>
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-1">
            <Link
              href="/admin/logout"
              className="flex items-center gap-3 px-3 py-2 text-white hover:bg-[#283639] rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined">logout</span>
              <p className="text-sm font-medium leading-normal">Logout</p>
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="w-full max-w-7xl mx-auto flex flex-col gap-6">
            {/* PageHeading */}
            <div className="flex flex-wrap justify-between gap-4 items-start">
              <div className="flex flex-col gap-2">
                <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Content Management</p>
                <p className="text-[#9cb5ba] text-base font-normal leading-normal">
                  Manage promotional banners, news, FAQs, and static pages.
                </p>
              </div>
            </div>

            {/* Tabs */}
            <div className="pb-3">
              <div className="flex border-b border-[#3b5054] gap-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 transition-colors ${
                      activeTab === tab.id
                        ? 'border-b-[#0dccf2]'
                        : 'border-b-transparent text-[#9cb5ba] hover:text-white'
                    }`}
                  >
                    <p
                      className={`text-sm font-bold leading-normal tracking-[0.015em] ${
                        activeTab === tab.id ? 'text-[#0dccf2]' : ''
                      }`}
                    >
                      {tab.label}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* ToolBar */}
            <div className="flex justify-between items-center gap-4 px-4 py-3 bg-[#111718] rounded-xl border border-[#3b5054]">
              <div className="flex gap-2">
                <div className="relative w-72">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#9cb5ba]">
                    search
                  </span>
                  <input
                    className="w-full h-10 pl-10 pr-4 bg-[#283639] text-white text-sm rounded-lg border-none focus:ring-2 focus:ring-[#0dccf2] placeholder:text-[#9cb5ba]"
                    placeholder="Search by title..."
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <select
                    className="appearance-none w-40 h-10 pl-4 pr-10 bg-[#283639] text-white text-sm rounded-lg border-none focus:ring-2 focus:ring-[#0dccf2]"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    {statusOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#9cb5ba] pointer-events-none">
                    expand_more
                  </span>
                </div>
              </div>
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#0dccf2] text-[#111718] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-4 hover:bg-[#0dccf2]/90 transition-colors">
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  add
                </span>
                <span className="truncate">Create New Banner</span>
              </button>
            </div>

            {/* Table */}
            <div className="px-4 py-3">
              <div className="flex overflow-hidden rounded-xl border border-[#3b5054] bg-[#111718]">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#1b2527]">
                      <th className="px-4 py-3 text-left text-white text-sm font-medium w-2/5">Title</th>
                      <th className="px-4 py-3 text-left text-white text-sm font-medium w-1/5">Status</th>
                      <th className="px-4 py-3 text-left text-white text-sm font-medium w-1/5">Last Updated</th>
                      <th className="px-4 py-3 text-left text-white text-sm font-medium w-1/5">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {banners.map((banner) => (
                      <tr key={banner.id} className="border-t border-t-[#3b5054]">
                        <td className="h-[72px] px-4 py-2 text-white text-sm font-normal">{banner.title}</td>
                        <td className="h-[72px] px-4 py-2">
                          <span
                            className={`inline-flex items-center justify-center rounded-full text-xs font-semibold px-3 py-1 ${banner.statusColor}`}
                          >
                            {banner.status}
                          </span>
                        </td>
                        <td className="h-[72px] px-4 py-2 text-[#9cb5ba] text-sm font-normal">{banner.lastUpdated}</td>
                        <td className="h-[72px] px-4 py-2">
                          <div className="flex items-center gap-2">
                            <button className="p-2 text-white/70 hover:text-white hover:bg-[#283639] rounded-md transition-colors">
                              <span className="material-symbols-outlined text-xl">edit</span>
                            </button>
                            <button className="p-2 text-white/70 hover:text-white hover:bg-[#283639] rounded-md transition-colors">
                              <span className="material-symbols-outlined text-xl">delete</span>
                            </button>
                            <button className="p-2 text-white/70 hover:text-white hover:bg-[#283639] rounded-md transition-colors">
                              <span className="material-symbols-outlined text-xl">visibility</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default function ContentManagementPage() {
  return (
    <AdminProtectedRoute>
      <ContentManagement />
    </AdminProtectedRoute>
  )
}

