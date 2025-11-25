'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function BettingManagement() {
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('Status')
  const [dateRangeFilter, setDateRangeFilter] = useState('Date Range')

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard', href: '/admin' },
    { id: 'users', label: 'Users', icon: 'group', href: '/admin/users' },
    { id: 'games', label: 'Game Management', icon: 'stadia_controller', href: '/admin/games' },
    { id: 'betting', label: 'Betting Management', icon: 'receipt_long', href: '/admin/betting' },
    { id: 'finances', label: 'Finances', icon: 'credit_card', href: '/admin/finances' },
    { id: 'settings', label: 'Settings', icon: 'settings', href: '/admin/settings' },
  ]

  const bets = [
    {
      id: '#B58K3P9',
      user: 'Player_777',
      gameMatch: 'Aviator',
      stake: '$10.00',
      payout: '$25.00',
      status: 'Won',
      statusColor: 'bg-green-500/20 text-green-400',
      dateTime: '2023-10-26 14:30',
    },
    {
      id: '#A92J7R1',
      user: 'BetMaster92',
      gameMatch: 'Man Utd vs Chelsea',
      stake: '$50.00',
      payout: '$0.00',
      status: 'Lost',
      statusColor: 'bg-red-500/20 text-red-400',
      dateTime: '2023-10-26 12:15',
    },
    {
      id: '#C44L1Q5',
      user: 'HighRoller21',
      gameMatch: 'Lightning Roulette',
      stake: '$100.00',
      payout: '$200.00',
      status: 'Cashed Out',
      statusColor: 'bg-blue-500/20 text-blue-400',
      dateTime: '2023-10-25 21:05',
    },
    {
      id: '#D81M9Z3',
      user: 'CasinoQueen',
      gameMatch: 'Lakers vs Warriors',
      stake: '$25.00',
      payout: '$75.00',
      status: 'Pending',
      statusColor: 'bg-yellow-500/20 text-yellow-400',
      dateTime: '2023-10-25 18:00',
    },
    {
      id: '#F27N5Y8',
      user: 'LuckyLeo',
      gameMatch: 'Starburst',
      stake: '$5.00',
      payout: '$15.75',
      status: 'Won',
      statusColor: 'bg-green-500/20 text-green-400',
      dateTime: '2023-10-24 10:45',
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
              Betting Management
            </h1>
          </div>

          {/* Search and Filters */}
          <div className="bg-white dark:bg-[#111718] p-4 rounded-xl shadow-sm mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <label className="flex flex-col min-w-40 h-12 w-full">
                  <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                    <div className="text-[#9cb5ba] flex border-none bg-zinc-100 dark:bg-[#283639] items-center justify-center pl-4 rounded-l-lg border-r-0">
                      <span className="material-symbols-outlined">search</span>
                    </div>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-zinc-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-[#0dccf2] border-none bg-zinc-100 dark:bg-[#283639] h-full placeholder:text-[#9cb5ba] px-4 pl-2 text-base font-normal leading-normal"
                      placeholder="Search by Bet ID, User..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      type="text"
                    />
                  </div>
                </label>
              </div>
              <div>
                <button
                  onClick={() => setStatusFilter(statusFilter === 'Status' ? '' : 'Status')}
                  className="flex h-12 w-full items-center justify-between gap-x-2 rounded-lg bg-zinc-100 dark:bg-[#283639] px-4 hover:bg-zinc-200 dark:hover:bg-[#1b2527] transition-colors"
                >
                  <p className="text-zinc-900 dark:text-white text-sm font-medium leading-normal">{statusFilter}</p>
                  <span className="material-symbols-outlined text-zinc-500 dark:text-white">expand_more</span>
                </button>
              </div>
              <div>
                <button
                  onClick={() => setDateRangeFilter(dateRangeFilter === 'Date Range' ? '' : 'Date Range')}
                  className="flex h-12 w-full items-center justify-between gap-x-2 rounded-lg bg-zinc-100 dark:bg-[#283639] px-4 hover:bg-zinc-200 dark:hover:bg-[#1b2527] transition-colors"
                >
                  <p className="text-zinc-900 dark:text-white text-sm font-medium leading-normal">{dateRangeFilter}</p>
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
                    <th className="px-6 py-4 text-left text-zinc-600 dark:text-white font-medium">Bet ID</th>
                    <th className="px-6 py-4 text-left text-zinc-600 dark:text-white font-medium">User</th>
                    <th className="px-6 py-4 text-left text-zinc-600 dark:text-white font-medium">Game/Match</th>
                    <th className="px-6 py-4 text-left text-zinc-600 dark:text-white font-medium">Stake</th>
                    <th className="px-6 py-4 text-left text-zinc-600 dark:text-white font-medium">Payout</th>
                    <th className="px-6 py-4 text-left text-zinc-600 dark:text-white font-medium">Status</th>
                    <th className="px-6 py-4 text-left text-zinc-600 dark:text-white font-medium">Date/Time</th>
                    <th className="px-6 py-4 text-right text-zinc-600 dark:text-[#9cb5ba] font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-t-[#3b5054]">
                  {bets.map((bet) => (
                    <tr key={bet.id} className="hover:bg-zinc-50 dark:hover:bg-[#1b2527]/50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap font-mono text-zinc-600 dark:text-[#9cb5ba]">{bet.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Link
                          href={`/admin/users?search=${bet.user}`}
                          className="font-medium text-zinc-900 dark:text-white hover:text-[#0dccf2] dark:hover:text-[#0dccf2] transition-colors"
                        >
                          {bet.user}
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-zinc-600 dark:text-[#9cb5ba]">{bet.gameMatch}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-zinc-900 dark:text-white font-medium">{bet.stake}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-zinc-900 dark:text-white font-medium">{bet.payout}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${bet.statusColor}`}>
                          {bet.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-zinc-600 dark:text-[#9cb5ba]">{bet.dateTime}</td>
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

