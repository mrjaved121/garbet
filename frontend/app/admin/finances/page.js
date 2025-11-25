'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function DepositsWithdrawals() {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState('withdrawals')
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('Status: All')
  const [currentPage, setCurrentPage] = useState(2)

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard', href: '/admin' },
    { id: 'users', label: 'Users', icon: 'group', href: '/admin/users' },
    { id: 'games', label: 'Games', icon: 'casino', href: '/admin/games' },
    { id: 'finances', label: 'Deposits & Withdrawals', icon: 'credit_card', href: '/admin/finances' },
    { id: 'settings', label: 'Settings', icon: 'settings', href: '/admin/settings' },
  ]

  const withdrawals = [
    {
      id: 'TXN752048619',
      user: 'PlayerOne23',
      amount: '$500.00',
      method: 'Crypto (BTC)',
      date: '2023-10-27 14:30',
      status: 'Pending',
      statusColor: 'bg-yellow-500/20 text-yellow-400',
      actions: 'buttons',
    },
    {
      id: 'TXN883125470',
      user: 'HighRoller_99',
      amount: '$2,500.00',
      method: 'Bank Transfer',
      date: '2023-10-27 11:15',
      status: 'Approved',
      statusColor: 'bg-green-500/20 text-green-400',
      actions: 'completed',
    },
    {
      id: 'TXN642987135',
      user: 'LuckyLucy',
      amount: '$150.00',
      method: 'Visa',
      date: '2023-10-26 20:45',
      status: 'Rejected',
      statusColor: 'bg-red-500/20 text-red-400',
      actions: 'completed',
    },
    {
      id: 'TXN109347582',
      user: 'BetMasterZ',
      amount: '$820.00',
      method: 'Crypto (ETH)',
      date: '2023-10-26 18:00',
      status: 'Pending',
      statusColor: 'bg-yellow-500/20 text-yellow-400',
      actions: 'buttons',
    },
    {
      id: 'TXN554820193',
      user: 'CasinoKing',
      amount: '$1,200.00',
      method: 'Bank Transfer',
      date: '2023-10-25 09:12',
      status: 'Approved',
      statusColor: 'bg-green-500/20 text-green-400',
      actions: 'completed',
    },
  ]

  const deposits = [
    {
      id: 'TXN123456789',
      user: 'PlayerOne23',
      amount: '$250.00',
      method: 'Visa',
      date: '2023-10-27 15:00',
      status: 'Approved',
      statusColor: 'bg-green-500/20 text-green-400',
      actions: 'completed',
    },
    {
      id: 'TXN987654321',
      user: 'HighRoller_99',
      amount: '$1,000.00',
      method: 'Crypto (BTC)',
      date: '2023-10-27 12:30',
      status: 'Approved',
      statusColor: 'bg-green-500/20 text-green-400',
      actions: 'completed',
    },
  ]

  const transactions = activeTab === 'withdrawals' ? withdrawals : deposits

  return (
    <div className="flex min-h-screen w-full bg-background-dark">
      {/* SideNavBar */}
      <aside className="w-64 shrink-0 bg-[#1A1A2E]/30 dark:bg-black/20 p-4 flex flex-col justify-between border-r border-white/10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 p-2 mb-4">
            <span className="material-symbols-outlined text-[#0dccf2] text-3xl">sports_esports</span>
            <h1 className="text-white text-xl font-bold leading-normal">CasinoAdmin</h1>
          </div>

          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-200 ${
                  pathname === item.href
                    ? 'bg-[#0dccf2]/20 text-[#0dccf2]'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
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
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex gap-3 items-center p-2">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA7dM0HbggUprh45b9tuyvs1tiyM8veeaBqNo-mVjHxFCcSUTHKlMvTuJDT4-GUDs-ZtcY-IJVy63NNT9Qhci4O3-1sXd9aHWpsr78t7WAxUbNaQkF4exKhZExZkJbmOWrIE5iN88I1FmGMJIxLgoLoYvYPYUjSSSCzkicMy-zQ153g3xjb6-YR6YR3uiRq9LiyS_nEru0t3jLGNhCjHQjEFNC1eM-eEL8Ml97lHEXQ-6IJ46X4FWOskuskfFc5Oo6FkN1ySNQnEco")'
              }}
            ></div>
            <div className="flex flex-col">
              <h1 className="text-white text-sm font-medium leading-normal">Jane Doe</h1>
              <p className="text-white/50 text-xs font-normal leading-normal">Administrator</p>
            </div>
          </div>
          <Link
            href="/admin/logout"
            className="flex items-center gap-3 px-3 py-2 text-white/70 hover:text-white transition-colors duration-200"
          >
            <span className="material-symbols-outlined">logout</span>
            <p className="text-sm font-medium leading-normal">Logout</p>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-10 bg-background-light dark:bg-background-dark">
        <div className="layout-content-container flex flex-col w-full max-w-7xl mx-auto">
          {/* PageHeading */}
          <div className="flex flex-wrap justify-between gap-3 mb-6">
            <p className="text-black dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
              Deposits & Withdrawals
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-white/5 border border-white/10">
              <p className="text-white/70 text-base font-medium leading-normal">Total Pending Withdrawals</p>
              <p className="text-white tracking-light text-2xl font-bold leading-tight">$12,450.00</p>
              <p className="text-green-400 text-base font-medium leading-normal">+5.2%</p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-white/5 border border-white/10">
              <p className="text-white/70 text-base font-medium leading-normal">24hr Deposit Volume</p>
              <p className="text-white tracking-light text-2xl font-bold leading-tight">$89,210.50</p>
              <p className="text-red-400 text-base font-medium leading-normal">-1.8%</p>
            </div>
          </div>

          <div className="bg-[#1E1E2B]/50 dark:bg-black/20 rounded-xl border border-white/10">
            {/* Tabs */}
            <div className="pb-3">
              <div className="flex border-b border-white/10 px-4 gap-8">
                <button
                  onClick={() => setActiveTab('deposits')}
                  className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 transition-colors ${
                    activeTab === 'deposits'
                      ? 'border-b-[#0dccf2] text-[#0dccf2]'
                      : 'border-b-transparent text-white/50'
                  }`}
                >
                  <p className="text-sm font-bold leading-normal tracking-[0.015em]">Deposits</p>
                </button>
                <button
                  onClick={() => setActiveTab('withdrawals')}
                  className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 transition-colors ${
                    activeTab === 'withdrawals'
                      ? 'border-b-[#0dccf2] text-[#0dccf2]'
                      : 'border-b-transparent text-white/50'
                  }`}
                >
                  <p className="text-sm font-bold leading-normal tracking-[0.015em]">Withdrawals</p>
                </button>
              </div>
            </div>

            {/* Filters & Search */}
            <div className="p-4 flex flex-col lg:flex-row gap-4">
              {/* SearchBar */}
              <div className="flex-grow">
                <label className="flex flex-col min-w-40 h-12 w-full">
                  <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                    <div className="text-white/50 flex border-none bg-white/5 items-center justify-center pl-4 rounded-l-lg border-r-0">
                      <span className="material-symbols-outlined">search</span>
                    </div>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-[#0dccf2]/50 border-none bg-white/5 h-full placeholder:text-white/50 px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                      placeholder="Search by Transaction ID, User ID, or Name..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      type="text"
                    />
                  </div>
                </label>
              </div>

              {/* Filter Dropdowns */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <select
                    className="appearance-none form-select h-12 w-full lg:w-40 rounded-lg bg-white/5 border-none text-white/80 focus:ring-2 focus:ring-[#0dccf2]/50 pl-4 pr-10"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option>Status: All</option>
                    <option>Pending</option>
                    <option>Approved</option>
                    <option>Rejected</option>
                  </select>
                  <span className="material-symbols-outlined text-white/50 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    expand_more
                  </span>
                </div>
                <div className="relative">
                  <button className="flex items-center justify-between h-12 w-full lg:w-56 rounded-lg bg-white/5 border-none text-white/80 focus:ring-2 focus:ring-[#0dccf2]/50 px-4 hover:bg-white/10 transition-colors">
                    <span>Select Date Range</span>
                    <span className="material-symbols-outlined text-white/50">calendar_today</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Data Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-white/80">
                <thead className="text-xs text-white/50 uppercase bg-black/20">
                  <tr>
                    <th className="px-6 py-3" scope="col">
                      Transaction ID
                    </th>
                    <th className="px-6 py-3" scope="col">
                      User
                    </th>
                    <th className="px-6 py-3" scope="col">
                      Amount
                    </th>
                    <th className="px-6 py-3" scope="col">
                      Method
                    </th>
                    <th className="px-6 py-3" scope="col">
                      Date
                    </th>
                    <th className="px-6 py-3" scope="col">
                      Status
                    </th>
                    <th className="px-6 py-3 text-center" scope="col">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction) => (
                    <tr key={transaction.id} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 font-mono text-white/60">{transaction.id}</td>
                      <td className="px-6 py-4 font-medium text-white">{transaction.user}</td>
                      <td className="px-6 py-4 font-medium text-white">{transaction.amount}</td>
                      <td className="px-6 py-4">{transaction.method}</td>
                      <td className="px-6 py-4">{transaction.date}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${transaction.statusColor}`}>
                          {transaction.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {transaction.actions === 'buttons' ? (
                          <div className="flex items-center justify-center gap-2">
                            <button className="px-3 py-1 text-xs font-bold text-black bg-green-400 rounded-md hover:bg-green-500 transition-colors">
                              Approve
                            </button>
                            <button className="px-3 py-1 text-xs font-bold text-white bg-red-500/80 rounded-md hover:bg-red-500 transition-colors">
                              Reject
                            </button>
                          </div>
                        ) : (
                          <div className="text-center text-white/50 italic">Completed</div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between p-4 border-t border-white/10">
              <span className="text-sm text-white/50">Showing 1 to 5 of 27 results</span>
              <div className="inline-flex items-center -space-x-px text-sm">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-white/60 bg-white/5 border border-white/10 rounded-l-lg hover:bg-white/10 hover:text-white transition-colors"
                >
                  Previous
                </button>
                <button
                  onClick={() => setCurrentPage(1)}
                  className={`flex items-center justify-center px-3 h-8 leading-tight border border-white/10 transition-colors ${
                    currentPage === 1
                      ? 'text-white bg-[#0dccf2]/20 border-[#0dccf2]/50 hover:bg-[#0dccf2]/30'
                      : 'text-white/60 bg-white/5 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  1
                </button>
                <button
                  onClick={() => setCurrentPage(2)}
                  className={`flex items-center justify-center px-3 h-8 leading-tight border border-white/10 transition-colors ${
                    currentPage === 2
                      ? 'text-white bg-[#0dccf2]/20 border-[#0dccf2]/50 hover:bg-[#0dccf2]/30'
                      : 'text-white/60 bg-white/5 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  2
                </button>
                <button
                  onClick={() => setCurrentPage(3)}
                  className={`flex items-center justify-center px-3 h-8 leading-tight border border-white/10 transition-colors ${
                    currentPage === 3
                      ? 'text-white bg-[#0dccf2]/20 border-[#0dccf2]/50 hover:bg-[#0dccf2]/30'
                      : 'text-white/60 bg-white/5 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  3
                </button>
                <button
                  onClick={() => setCurrentPage(Math.min(3, currentPage + 1))}
                  className="flex items-center justify-center px-3 h-8 leading-tight text-white/60 bg-white/5 border border-white/10 rounded-r-lg hover:bg-white/10 hover:text-white transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

