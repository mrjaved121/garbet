'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AdminDashboard() {
  const pathname = usePathname()

  const navItems = [
    { id: 'dashboard', label: 'Dashboard Overview', icon: 'dashboard', href: '/admin' },
    { id: 'users', label: 'User Management', icon: 'group', href: '/admin/users' },
    { id: 'games', label: 'Game Management', icon: 'gamepad', href: '/admin/games' },
    { id: 'betting', label: 'Betting Management', icon: 'sports_soccer', href: '/admin/betting' },
    { id: 'promotions', label: 'Promotions Management', icon: 'campaign', href: '/admin/promotions' },
    { id: 'transactions', label: 'Deposits & Withdrawals', icon: 'paid', href: '/admin/transactions' },
    { id: 'content', label: 'Content Management', icon: 'wysiwyg', href: '/admin/content' },
  ]

  const recentTransactions = [
    { id: '#A8B2C3', user: 'can_yilmaz', date: '2023-10-27 14:30', amount: '₺1,500.00', type: 'Deposit', status: 'Completed', statusColor: 'bg-teal-500/20 text-teal-400' },
    { id: '#D4E5F6', user: 'ayse_kaya', date: '2023-10-27 13:55', amount: '₺750.00', type: 'Withdrawal', status: 'In Progress', statusColor: 'bg-blue-500/20 text-blue-400' },
    { id: '#G7H8I9', user: 'mehmet_oz', date: '2023-10-27 12:10', amount: '₺250.00', type: 'Deposit', status: 'Completed', statusColor: 'bg-teal-500/20 text-teal-400' },
    { id: '#J1K2L3', user: 'fatma_sahin', date: '2023-10-27 11:45', amount: '₺5,000.00', type: 'Withdrawal', status: 'Failed', statusColor: 'bg-red-500/20 text-red-400' },
  ]

  const popularGames = [
    { name: 'Blackjack', percentage: 35, color: 'bg-primary' },
    { name: 'Slots', percentage: 28, color: 'bg-cyan-400' },
    { name: 'Roulette', percentage: 19, color: 'bg-blue-500' },
    { name: 'Poker', percentage: 12, color: 'bg-fuchsia-500' },
    { name: 'Baccarat', percentage: 6, color: 'bg-gray-500' },
  ]

  return (
    <div className="flex h-screen bg-background-dark">
      {/* SideNavBar */}
      <aside className="flex w-64 flex-col bg-zinc-900/50 p-4">
        <div className="flex items-center gap-3 mb-8 px-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="material-symbols-outlined text-black">casino</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-base font-bold text-white">Casino Admin</h1>
            <p className="text-sm text-gray-400">Management</p>
          </div>
        </div>

        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                pathname === item.href || (item.id === 'dashboard' && pathname === '/admin')
                  ? 'bg-primary/20 text-primary'
                  : 'text-gray-300 hover:bg-white/10'
              }`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <p>{item.label}</p>
            </Link>
          ))}
        </nav>

        <div className="mt-auto">
          <Link
            href="/admin/settings"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined">settings</span>
            <p className="text-sm font-medium">Settings</p>
          </Link>

          <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAeBaCCsTptl1trq-7t7S9yHg2U-j1m_3eQJ6dpRP-IZjxZIDKL6U_iFBKUwWt18HwxovSG8ldqiQCa7NbmEcelTnHQGSwTeQORHSMYn7gGZDs-U982dOqo8QbAOQy7uCWkHjlHxe0m_eXtY2xDHYQYW3KAKuLgW2ZrQlV3yrUSs8tMyu4QaShzTzhohnzpDGQllaTrkdAQoFvcjS9zzhmKAnFrldqCRC16_VfbZD7OYbVjNJOiQ4Gz2-oKSG6XZ4azP4qWoBeSO74")'
              }}
            ></div>
            <div className="flex flex-col">
              <h2 className="text-sm font-medium text-white">Admin User</h2>
              <p className="text-xs text-gray-400">admin@casino.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* TopNavBar */}
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-white/10 bg-background-dark/80 px-8 backdrop-blur-sm">
          <div className="flex items-center gap-8">
            <label className="flex flex-col min-w-40 !h-10 w-80 max-w-sm">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                <div className="text-gray-400 flex border-none bg-zinc-900 items-center justify-center pl-3 rounded-l-lg border-r-0">
                  <span className="material-symbols-outlined text-xl">search</span>
                </div>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-zinc-900 focus:border-none h-full placeholder:text-gray-500 px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal"
                  placeholder="Search users, bets, games..."
                  type="text"
                />
              </div>
            </label>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-zinc-900 text-gray-300 hover:bg-zinc-800 transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBDHfcBht9qAey4KEYFav73ajdsQuGm1qJyja_Ihg-3JoO_Vo-XPo_fsRoXdWafHYwgUHmiHGE7IUOkOReak_4vvzQtss7vlLyE1bgqyEP3CTHb4AUAWX7_gXBLRadD6bV6EllnQiCgbwHYpH0mxo5D5Z_C4helVgAruTkL2ojnhcWSS5W9HjZBVcIoF50lslCFTmu8Wv8MY_M216NV8LmzLsw2geGDZLJvV9YR3CJXW8aH6jGSLBH-sinH5BzVZjO1uNbTDKLPAu0")'
              }}
            ></div>
          </div>
        </header>

        <div className="p-8">
          {/* PageHeading */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex min-w-72 flex-col gap-1">
              <p className="text-3xl font-bold text-white">Dashboard Overview</p>
              <p className="text-base font-normal text-gray-400">Welcome back, Admin! Here&apos;s what&apos;s happening today.</p>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-primary text-black text-sm font-bold hover:bg-yellow-400 transition-colors">
              <span className="material-symbols-outlined text-xl">download</span>
              <span className="truncate">Export Data</span>
            </button>
          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col gap-2 rounded-xl bg-zinc-900 p-5">
              <p className="text-sm font-medium text-gray-400">Total Users</p>
              <p className="text-3xl font-bold text-white">12,450</p>
              <p className="text-sm font-medium text-teal-400">+1.5%</p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl bg-zinc-900 p-5">
              <p className="text-sm font-medium text-gray-400">Active Bets</p>
              <p className="text-3xl font-bold text-white">3,128</p>
              <p className="text-sm font-medium text-red-400">-0.8%</p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl bg-zinc-900 p-5">
              <p className="text-sm font-medium text-gray-400">Pending Withdrawals</p>
              <p className="text-3xl font-bold text-white">₺85,600</p>
              <p className="text-sm font-medium text-teal-400">+5.2%</p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl bg-zinc-900 p-5">
              <p className="text-sm font-medium text-gray-400">New Registrations (24h)</p>
              <p className="text-3xl font-bold text-white">152</p>
              <p className="text-sm font-medium text-teal-400">+12%</p>
            </div>
          </div>

          {/* Charts */}
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="flex flex-col gap-2 rounded-xl bg-zinc-900 p-6 lg:col-span-2">
              <p className="text-lg font-medium text-white">Revenue Over Time</p>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-bold text-white">₺1,250,000</p>
                <p className="text-sm font-medium text-teal-400">+7.8%</p>
              </div>
              <p className="text-sm text-gray-400">Last 30 Days</p>
              <div className="mt-4 flex min-h-[250px] flex-1 flex-col">
                <svg
                  fill="none"
                  height="100%"
                  preserveAspectRatio="none"
                  viewBox="0 0 500 150"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 109C19.2308 109 19.2308 21 38.4615 21C57.6923 21 57.6923 41 76.9231 41C96.1538 41 96.1538 93 115.385 93C134.615 93 134.615 33 153.846 33C173.077 33 173.077 101 192.308 101C211.538 101 211.538 61 230.769 61C250 61 250 45 269.231 45C288.462 45 288.462 121 307.692 121C326.923 121 326.923 149 346.154 149C365.385 149 365.385 1 384.615 1C403.846 1 403.846 81 423.077 81C442.308 81 442.308 129 461.538 129C480.769 129 480.769 25 500 25V150H0V109Z"
                    fill="url(#chart-gradient)"
                  ></path>
                  <path
                    d="M0 109C19.2308 109 19.2308 21 38.4615 21C57.6923 21 57.6923 41 76.9231 41C96.1538 41 96.1538 93 115.385 93C134.615 93 134.615 33 153.846 33C173.077 33 173.077 101 192.308 101C211.538 101 211.538 61 230.769 61C250 61 250 45 269.231 45C288.462 45 288.462 121 307.692 121C326.923 121 326.923 149 346.154 149C365.385 149 365.385 1 384.615 1C403.846 1 403.846 81 423.077 81C442.308 81 442.308 129 461.538 129C480.769 129 480.769 25 500 25"
                    stroke="#f1c84b"
                    strokeLinecap="round"
                    strokeWidth="2"
                  ></path>
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="chart-gradient" x1="250" x2="250" y1="1" y2="150">
                      <stop stopColor="#f1c84b" stopOpacity="0.3"></stop>
                      <stop offset="1" stopColor="#f1c84b" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <div className="flex flex-col gap-2 rounded-xl bg-zinc-900 p-6">
              <p className="text-lg font-medium text-white">Most Popular Games</p>
              <p className="text-sm text-gray-400">This Month</p>
              <div className="mt-4 grid flex-1 auto-rows-fr gap-y-4">
                {popularGames.map((game) => (
                  <div key={game.name}>
                    <div className="flex justify-between text-sm">
                      <p className="font-medium text-gray-300">{game.name}</p>
                      <p className="text-gray-400">{game.percentage}%</p>
                    </div>
                    <div className="mt-1 h-2 w-full rounded-full bg-zinc-800">
                      <div className={`h-2 rounded-full ${game.color}`} style={{ width: `${game.percentage}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Transactions Table */}
          <div className="mt-6 flex flex-col rounded-xl bg-zinc-900">
            <div className="p-6">
              <h3 className="text-lg font-medium text-white">Recent Transactions</h3>
              <p className="text-sm text-gray-400">Latest deposits and withdrawals.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="border-b border-white/10 text-left text-xs uppercase text-gray-400">
                  <tr>
                    <th className="px-6 py-3 font-medium">Transaction ID</th>
                    <th className="px-6 py-3 font-medium">User</th>
                    <th className="px-6 py-3 font-medium">Date</th>
                    <th className="px-6 py-3 font-medium">Amount</th>
                    <th className="px-6 py-3 font-medium">Type</th>
                    <th className="px-6 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {recentTransactions.map((transaction) => (
                    <tr key={transaction.id}>
                      <td className="whitespace-nowrap px-6 py-4 font-mono text-gray-400">{transaction.id}</td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium text-white">{transaction.user}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-gray-300">{transaction.date}</td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium text-white">{transaction.amount}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-gray-300">{transaction.type}</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${transaction.statusColor}`}>
                          {transaction.status}
                        </span>
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

