'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function UserManagement() {
  const pathname = usePathname()
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [dateFilter, setDateFilter] = useState('')

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard', href: '/admin' },
    { id: 'users', label: 'User Management', icon: 'group', href: '/admin/users' },
    { id: 'games', label: 'Games', icon: 'stadia_controller', href: '/admin/games' },
    { id: 'transactions', label: 'Transactions', icon: 'receipt_long', href: '/admin/transactions' },
    { id: 'settings', label: 'Settings', icon: 'toggle_on', href: '/admin/settings' },
  ]

  const users = [
    {
      id: 1,
      username: 'NeonPlayer91',
      email: 'player91@email.com',
      registrationDate: '2023-10-26',
      lastLogin: '2023-10-27 10:45 PM',
      status: 'Active',
      statusColor: 'bg-green-500/20 text-green-400',
      balance: '$1,250.75',
    },
    {
      id: 2,
      username: 'BetMasterFlex',
      email: 'bmflex@email.com',
      registrationDate: '2023-10-25',
      lastLogin: '2023-10-27 08:12 PM',
      status: 'Active',
      statusColor: 'bg-green-500/20 text-green-400',
      balance: '$5,820.00',
    },
    {
      id: 3,
      username: 'CasinoKing',
      email: 'king.c@email.com',
      registrationDate: '2023-10-22',
      lastLogin: '2023-10-23 01:05 AM',
      status: 'Blocked',
      statusColor: 'bg-red-500/20 text-red-400',
      balance: '$0.00',
    },
    {
      id: 4,
      username: 'HighRoller22',
      email: 'roller@email.com',
      registrationDate: '2023-10-21',
      lastLogin: '2023-10-27 11:30 PM',
      status: 'Active',
      statusColor: 'bg-green-500/20 text-green-400',
      balance: '$22,100.50',
    },
    {
      id: 5,
      username: 'LuckySpinner',
      email: 'spinner@email.com',
      registrationDate: '2023-10-20',
      lastLogin: '2023-10-26 04:20 PM',
      status: 'Pending',
      statusColor: 'bg-yellow-500/20 text-yellow-400',
      balance: '$450.00',
    },
  ]

  const totalResults = 97
  const resultsPerPage = 5
  const startResult = (currentPage - 1) * resultsPerPage + 1
  const endResult = Math.min(currentPage * resultsPerPage, totalResults)

  return (
    <div className="relative flex min-h-screen w-full bg-background-dark">
      {/* SideNavBar */}
      <aside className="sticky top-0 h-screen w-64 flex-shrink-0 bg-[#111718] p-4 flex flex-col justify-between">
        <div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBHyhVZQoc_rCfv7Jf7bxfztOGaidbibXcIeny1CGBS04h4GY9XITJnIz9zcySERIRToKBhPHRNRGiGx1J9iNPB4lLc9h9OxFYZc0mkM6TjHdoSv7thYvvuLrWQ_4utKmsuIL_0mu5iPKahoV4cSyFG8lK6tfsVGaARv6c8-m-k3LBHCIqJQGF83D3c6HN8mE3_DzFGfBOhI4v01mYzySyFTJCzT9aKTPdcgGWz74XgwiVf6Y3jQwYymsuYdtCP8zRuNplIyb9gR7s")'
                }}
              ></div>
              <div className="flex flex-col">
                <h1 className="text-white text-base font-medium leading-normal">Admin Name</h1>
                <p className="text-[#9cb5ba] text-sm font-normal leading-normal">Super Administrator</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-4">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    pathname === item.href
                      ? 'bg-[#0dccf2]/20 text-[#0dccf2]'
                      : 'text-white/70 hover:bg-[#0dccf2]/10 hover:text-white'
                  }`}
                >
                  <span className={`material-symbols-outlined ${pathname === item.href ? 'fill' : ''}`}>
                    {item.icon}
                  </span>
                  <p className="text-sm font-medium leading-normal">{item.label}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0dccf2] text-[#111718] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#0dccf2]/90 transition-colors">
            <span className="truncate">Logout</span>
          </button>

          <div className="flex flex-col gap-1 border-t border-white/10 pt-4">
            <Link
              href="/admin/support"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-white/70 hover:bg-[#0dccf2]/10 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined">support_agent</span>
              <p className="text-sm font-medium leading-normal">Support</p>
            </Link>
            <Link
              href="/admin/documentation"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-white/70 hover:bg-[#0dccf2]/10 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined">description</span>
              <p className="text-sm font-medium leading-normal">Documentation</p>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="w-full max-w-7xl mx-auto">
          {/* PageHeading */}
          <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
            <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">User Management</p>
            <button className="flex items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-[#0dccf2] text-[#111718] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#0dccf2]/90 transition-colors">
              <span className="material-symbols-outlined text-lg">add_circle</span>
              <span className="truncate">Add New User</span>
            </button>
          </div>

          {/* Controls: SearchBar and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                  <div className="text-[#9cb5ba] flex border-none bg-[#111718] items-center justify-center pl-4 rounded-l-xl border-r-0">
                    <span className="material-symbols-outlined">search</span>
                  </div>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-xl text-white focus:outline-0 focus:ring-2 focus:ring-[#0dccf2]/50 border-none bg-[#111718] h-full placeholder:text-[#9cb5ba] px-4 text-base font-normal leading-normal"
                    placeholder="Search by Username, Email..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    type="text"
                  />
                </div>
              </label>
            </div>

            <div className="flex gap-3 items-center">
              <button
                onClick={() => setStatusFilter(statusFilter === 'All' ? '' : 'All')}
                className="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#111718] px-4 hover:bg-[#1b2527] transition-colors"
              >
                <span className="material-symbols-outlined text-[#9cb5ba]">tune</span>
                <p className="text-white text-sm font-medium leading-normal">Status: {statusFilter || 'All'}</p>
                <span className="material-symbols-outlined text-[#9cb5ba]">expand_more</span>
              </button>

              <button
                onClick={() => setDateFilter(dateFilter ? '' : 'date')}
                className="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#111718] px-4 hover:bg-[#1b2527] transition-colors"
              >
                <span className="material-symbols-outlined text-[#9cb5ba]">calendar_month</span>
                <p className="text-white text-sm font-medium leading-normal">Registration Date</p>
                <span className="material-symbols-outlined text-[#9cb5ba]">expand_more</span>
              </button>

              <button
                onClick={() => {
                  setSearchQuery('')
                  setStatusFilter('All')
                  setDateFilter('')
                }}
                className="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-transparent px-4 text-[#9cb5ba] hover:bg-[#111718] hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
                <p className="text-sm font-medium leading-normal">Clear Filters</p>
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="w-full @container">
            <div className="flex overflow-hidden rounded-xl border border-[#3b5054] bg-[#111718]">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#1b2527]">
                    <th className="table-col-username px-6 py-4 text-left text-white text-xs font-medium uppercase tracking-wider">
                      Username
                    </th>
                    <th className="table-col-email px-6 py-4 text-left text-white text-xs font-medium uppercase tracking-wider">
                      Email
                    </th>
                    <th className="table-col-regdate px-6 py-4 text-left text-white text-xs font-medium uppercase tracking-wider">
                      Registration Date
                    </th>
                    <th className="table-col-lastlogin px-6 py-4 text-left text-white text-xs font-medium uppercase tracking-wider">
                      Last Login
                    </th>
                    <th className="table-col-status px-6 py-4 text-left text-white text-xs font-medium uppercase tracking-wider">
                      Status
                    </th>
                    <th className="table-col-balance px-6 py-4 text-left text-white text-xs font-medium uppercase tracking-wider">
                      Wallet Balance
                    </th>
                    <th className="table-col-actions px-6 py-4 text-right text-white text-xs font-medium uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#3b5054]">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-[#1b2527] transition-colors">
                      <td className="table-col-username px-6 py-4 whitespace-nowrap text-white text-sm font-medium">
                        {user.username}
                      </td>
                      <td className="table-col-email px-6 py-4 whitespace-nowrap text-[#9cb5ba] text-sm">
                        {user.email}
                      </td>
                      <td className="table-col-regdate px-6 py-4 whitespace-nowrap text-[#9cb5ba] text-sm">
                        {user.registrationDate}
                      </td>
                      <td className="table-col-lastlogin px-6 py-4 whitespace-nowrap text-[#9cb5ba] text-sm">
                        {user.lastLogin}
                      </td>
                      <td className="table-col-status px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${user.statusColor}`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="table-col-balance px-6 py-4 whitespace-nowrap text-[#9cb5ba] text-sm">
                        {user.balance}
                      </td>
                      <td className="table-col-actions px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-[#0dccf2] hover:text-[#0dccf2]/80 transition-colors">
                          <span className="material-symbols-outlined">more_vert</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <style jsx>{`
              @container (max-width: 1024px) {
                .table-col-lastlogin,
                .table-col-regdate {
                  display: none;
                }
              }
              @container (max-width: 768px) {
                .table-col-email,
                .table-col-balance {
                  display: none;
                }
              }
              @container (max-width: 480px) {
                .table-col-status {
                  display: none;
                }
              }
            `}</style>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <p className="text-sm text-[#9cb5ba]">
              Showing <span className="font-medium text-white">{startResult}</span> to{' '}
              <span className="font-medium text-white">{endResult}</span> of{' '}
              <span className="font-medium text-white">{totalResults}</span> results
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="flex items-center justify-center h-9 w-9 rounded-lg bg-[#111718] text-white hover:bg-[#0dccf2]/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="material-symbols-outlined text-xl">chevron_left</span>
              </button>
              <button
                onClick={() => setCurrentPage(1)}
                className={`flex items-center justify-center h-9 w-9 rounded-lg text-sm font-bold transition-colors ${
                  currentPage === 1
                    ? 'bg-[#0dccf2] text-[#111718]'
                    : 'bg-[#111718] text-white hover:bg-[#0dccf2]/20'
                }`}
              >
                1
              </button>
              <button
                onClick={() => setCurrentPage(2)}
                className={`flex items-center justify-center h-9 w-9 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === 2
                    ? 'bg-[#0dccf2] text-[#111718]'
                    : 'bg-[#111718] text-white hover:bg-[#0dccf2]/20'
                }`}
              >
                2
              </button>
              <button
                onClick={() => setCurrentPage(3)}
                className={`flex items-center justify-center h-9 w-9 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === 3
                    ? 'bg-[#0dccf2] text-[#111718]'
                    : 'bg-[#111718] text-white hover:bg-[#0dccf2]/20'
                }`}
              >
                3
              </button>
              <span className="text-white">...</span>
              <button
                onClick={() => setCurrentPage(20)}
                className={`flex items-center justify-center h-9 w-9 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === 20
                    ? 'bg-[#0dccf2] text-[#111718]'
                    : 'bg-[#111718] text-white hover:bg-[#0dccf2]/20'
                }`}
              >
                20
              </button>
              <button
                onClick={() => setCurrentPage(Math.min(20, currentPage + 1))}
                disabled={currentPage === 20}
                className="flex items-center justify-center h-9 w-9 rounded-lg bg-[#111718] text-white hover:bg-[#0dccf2]/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="material-symbols-outlined text-xl">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

