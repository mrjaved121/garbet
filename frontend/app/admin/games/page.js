'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import AdminProtectedRoute from '@/components/AdminProtectedRoute'

function GameManagement() {
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState('')
  const [gameTypeFilter, setGameTypeFilter] = useState('Game Type')
  const [providerFilter, setProviderFilter] = useState('Provider')

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard', href: '/admin' },
    { id: 'users', label: 'Users', icon: 'group', href: '/admin/users' },
    { id: 'games', label: 'Game Management', icon: 'stadia_controller', href: '/admin/games' },
    { id: 'finances', label: 'Finances', icon: 'credit_card', href: '/admin/finances' },
    { id: 'settings', label: 'Settings', icon: 'settings', href: '/admin/settings' },
  ]

  const games = [
    {
      id: 1,
      name: 'Starburst',
      provider: 'NetEnt',
      type: 'Slot',
      status: 'Active',
      statusColor: 'bg-green-500/20 text-green-400',
      statusDot: 'bg-green-500',
      dateAdded: '2023-10-26',
      thumbnail:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCTXeN1RDAaX29UaMHxQK6OQxNczMvchhuBadiyOGIPmdd_FQ3zrqj3wgkDnUF2V3PugW1mYcDjuNynvcL0-HmwBRJxs0rpfAHSlSLAmJ_CrVIUKAL1eAXmNDXUobnt2jhJa9EBoDiMhmYSgmjmscGS8zbmaRPH-w1ZSiiI2ORLj6VX1P2Pw-Ny1hyUoO7IuRehXjWfI4ZmwSpfmL8R_y17X_VPgglqycqjqAgKEW8SU1nZuG5hhDUtQ1jCbaMeeAvc-ky3dq5J9O0',
    },
    {
      id: 2,
      name: 'Lightning Roulette',
      provider: 'Evolution Gaming',
      type: 'Live Casino',
      status: 'Active',
      statusColor: 'bg-green-500/20 text-green-400',
      statusDot: 'bg-green-500',
      dateAdded: '2023-10-25',
      thumbnail:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBwXbR1vDLaPEmfTaYV94INPNuckI1FF-uDy8HYUtydzc06FWncBIVSP91ItlTiMzO3trDZxJz3jsBPqtClifHNK3D2A7UNof0DS6CJqRD5xZzZZ5GA4UzJJUSh2HenSG5rEcOrtSO2fCMKY5jSC7-8gbgZstshJOLTv4Lf9ALsQFFgrjYIw7WFQMU5KVZEXUHb0T9cI7pqFPRcwNqEBVJCwn4unFfUVh0hEI-p5dkJ2AUtIkYjADG1myutc8Tkh_K4ssmPNWilvgw',
    },
    {
      id: 3,
      name: 'Aviator',
      provider: 'Spribe',
      type: 'Crash',
      status: 'Active',
      statusColor: 'bg-green-500/20 text-green-400',
      statusDot: 'bg-green-500',
      dateAdded: '2023-10-22',
      thumbnail:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDvOJTNVIKHyTQYNulur9DFQECXmt9wVYfnekPe_MOj72W7nNRGnMUtJSjjNiEbwT2OnDq0QxZOpMwKktwqywU388Ozu4-U2Mv4gyGLtF3_T3fGeklRNTsk9o_7Uk21a06VMLwTrkFf2jZmeiW7a-jbCJLno-1Y4GP9NDD5C7Cx1xjLpeiTNIRXZJj7pp8qI-lkgUqy2Ib5WnrW-bn0BtqpeU7pn4huxGCEN2Sqx4eJziklv4YhoSkuJCEcXMeIsWJstRnziIdvIKo',
    },
    {
      id: 4,
      name: 'Book of Dead',
      provider: "Play'n GO",
      type: 'Slot',
      status: 'Inactive',
      statusColor: 'bg-zinc-500/20 text-zinc-400',
      statusDot: 'bg-zinc-500',
      dateAdded: '2023-10-20',
      thumbnail:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBeTy9xdVWo790mGOB9I7b6K1MMofZpZlWxbkujwsRefO45qLkuhSKnJ-8OCq0fjqa1jp70dkUwD6gxyvb42BRbti2T3HVZqp_6J2xJ01bTMmedqTK-Wxgk2NuaWEoj9mX_UlyAILxXGMejrUW2s73HtDWm-gpPmmNPnHe7BxFXaEumf_T7xhwgz25KVgTyOdt6K30uamqRKq_3DYgDq9AOn7ztAqQwooic1kuU3piEcUWW1tSajoDwrWS0x6nNNa_h6LG42EO-07w',
    },
    {
      id: 5,
      name: 'Gates of Olympus',
      provider: 'Pragmatic Play',
      type: 'Slot',
      status: 'Active',
      statusColor: 'bg-green-500/20 text-green-400',
      statusDot: 'bg-green-500',
      dateAdded: '2023-10-18',
      thumbnail:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBuMOTPKlT59VQckWNgu-LaxSzlUpl_ENeUdPFyYEsSNzG4d9P7CbOhHxuVWydnF_wbODxLtLYT7UmBYGoDrZvbTaDhKxL_G1JgL2bliC_gCEtSKfnkDVBJsOFQGKDYCCMDdY2XFJ3tiyMCnz_QBk3-xp2U1WsRxakyRnc55NTZyIJYW1kab-mIQpmGl3lIUcl4E-KWDAIwB41Vhhj8-JDayaIej4AAV8FnxyjJyHolea8kMOkSePGpN8LNTmISREaEzlQ7G_tCkyg',
    },
  ]

  return (
    <div className="flex min-h-screen w-full bg-background-dark">
      {/* SideNavBar */}
      <aside className="w-64 shrink-0 flex-col bg-[#111718] p-4 hidden lg:flex">
        <div className="flex h-full flex-col justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 p-2">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCFvzFg10ePV8m17TIIro8X8p5TOiPoN941Wc_SrIYGg1LJOcHrjAX8Yo4b4sHgyOYG_O-FDdHRJCNz4pq1I3e0RPhzLXrkYS2H0cAywNNbT-82xO-JUzs7rL_XA26gMkXbVxulgMGmagMCgvYrU0luGC0WJxA_1U07OoORWW1BLPFZqY0F9aEhg2IYAjzSz0twdyvXS0o1oEjwT5C98iwQGzMT_OYT5F-B9Hpyo5eZwFqPBNh5M0j_cCWbCPmkKDHEpdPcbLKdtho")'
                }}
              ></div>
              <div className="flex flex-col">
                <h1 className="text-white text-base font-medium leading-normal">Alex Mercer</h1>
                <p className="text-[#9cb5ba] text-sm font-normal leading-normal">Administrator</p>
              </div>
            </div>

            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    pathname === item.href
                      ? 'bg-[#0dccf2]/20 text-[#0dccf2]'
                      : 'text-white hover:bg-[#0dccf2]/20'
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
          </div>

          <div className="flex flex-col gap-1">
            <Link
              href="/admin/support"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-white hover:bg-[#0dccf2]/20 transition-colors"
            >
              <span className="material-symbols-outlined">help</span>
              <p className="text-sm font-medium leading-normal">Support</p>
            </Link>
            <Link
              href="/admin/logout"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-white hover:bg-[#0dccf2]/20 transition-colors"
            >
              <span className="material-symbols-outlined">logout</span>
              <p className="text-sm font-medium leading-normal">Logout</p>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-7xl mx-auto">
          {/* PageHeading */}
          <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
            <h1 className="text-zinc-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
              Game Management
            </h1>
            <button className="flex items-center justify-center gap-2 min-w-[84px] cursor-pointer rounded-lg h-11 px-5 bg-[#0dccf2] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors">
              <span className="material-symbols-outlined">add_circle</span>
              <span className="truncate">Add New Game</span>
            </button>
          </div>

          {/* Search and Filters */}
          <div className="bg-white dark:bg-[#111718] p-4 rounded-xl shadow-sm mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="lg:col-span-2">
                <label className="flex flex-col min-w-40 h-12 w-full">
                  <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                    <div className="text-[#9cb5ba] flex border-none bg-zinc-100 dark:bg-[#283639] items-center justify-center pl-4 rounded-l-lg border-r-0">
                      <span className="material-symbols-outlined">search</span>
                    </div>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-zinc-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-[#0dccf2] border-none bg-zinc-100 dark:bg-[#283639] h-full placeholder:text-[#9cb5ba] px-4 pl-2 text-base font-normal leading-normal"
                      placeholder="Search by name, provider..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      type="text"
                    />
                  </div>
                </label>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setGameTypeFilter(gameTypeFilter === 'Game Type' ? '' : 'Game Type')}
                  className="flex h-12 w-full items-center justify-between gap-x-2 rounded-lg bg-zinc-100 dark:bg-[#283639] px-4 hover:bg-zinc-200 dark:hover:bg-[#1b2527] transition-colors"
                >
                  <p className="text-zinc-900 dark:text-white text-sm font-medium leading-normal">{gameTypeFilter}</p>
                  <span className="material-symbols-outlined text-zinc-500 dark:text-white">expand_more</span>
                </button>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setProviderFilter(providerFilter === 'Provider' ? '' : 'Provider')}
                  className="flex h-12 w-full items-center justify-between gap-x-2 rounded-lg bg-zinc-100 dark:bg-[#283639] px-4 hover:bg-zinc-200 dark:hover:bg-[#1b2527] transition-colors"
                >
                  <p className="text-zinc-900 dark:text-white text-sm font-medium leading-normal">{providerFilter}</p>
                  <span className="material-symbols-outlined text-zinc-500 dark:text-white">expand_more</span>
                </button>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-[#3b5054] bg-white dark:bg-[#111718] shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-zinc-50 dark:bg-[#1b2527]">
                  <tr>
                    <th className="px-6 py-4 text-left text-zinc-600 dark:text-white font-medium">Game</th>
                    <th className="px-6 py-4 text-left text-zinc-600 dark:text-white font-medium">Provider</th>
                    <th className="px-6 py-4 text-left text-zinc-600 dark:text-white font-medium">Type</th>
                    <th className="px-6 py-4 text-left text-zinc-600 dark:text-white font-medium">Status</th>
                    <th className="px-6 py-4 text-left text-zinc-600 dark:text-white font-medium">Date Added</th>
                    <th className="px-6 py-4 text-right text-zinc-600 dark:text-[#9cb5ba] font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-t-[#3b5054]">
                  {games.map((game) => (
                    <tr key={game.id} className="hover:bg-zinc-50 dark:hover:bg-[#1b2527]/50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-4">
                          <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-10"
                            style={{ backgroundImage: `url("${game.thumbnail}")` }}
                          ></div>
                          <span className="font-medium text-zinc-900 dark:text-white">{game.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-zinc-600 dark:text-[#9cb5ba]">{game.provider}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-zinc-600 dark:text-[#9cb5ba]">{game.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${game.statusColor}`}>
                          <span className={`size-2 ${game.statusDot} rounded-full mr-2`}></span>
                          {game.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-zinc-600 dark:text-[#9cb5ba]">{game.dateAdded}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <button className="text-zinc-500 dark:text-[#9cb5ba] hover:text-[#0dccf2] dark:hover:text-[#0dccf2] transition-colors">
                          <span className="material-symbols-outlined">more_vert</span>
                        </button>
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
  )
}

export default function GameManagementPage() {
  return (
    <AdminProtectedRoute>
      <GameManagement />
    </AdminProtectedRoute>
  )
}

