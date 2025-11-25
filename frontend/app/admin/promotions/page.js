'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function PromotionsManagement() {
  const pathname = usePathname()
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [typeFilter, setTypeFilter] = useState('All')

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard', href: '/admin' },
    { id: 'users', label: 'Users', icon: 'group', href: '/admin/users' },
    { id: 'games', label: 'Games', icon: 'sports_esports', href: '/admin/games' },
    { id: 'promotions', label: 'Promotions', icon: 'sell', href: '/admin/promotions' },
    { id: 'settings', label: 'Settings', icon: 'settings', href: '/admin/settings' },
  ]

  const promotions = [
    {
      id: 1,
      title: 'Welcome Bonus',
      type: 'Welcome',
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      status: 'Active',
      statusColor: 'bg-green-500/20 text-green-300',
    },
    {
      id: 2,
      title: '10% Cashback Offer',
      type: 'Cashback',
      startDate: '2024-05-10',
      endDate: '2024-06-10',
      status: 'Active',
      statusColor: 'bg-green-500/20 text-green-300',
    },
    {
      id: 3,
      title: 'Weekend Reload',
      type: 'Reload',
      startDate: '2024-04-01',
      endDate: '2024-04-30',
      status: 'Inactive',
      statusColor: 'bg-gray-500/20 text-gray-300',
    },
    {
      id: 4,
      title: '50 Free Spins',
      type: 'Free Spins',
      startDate: '2024-06-01',
      endDate: '2024-06-07',
      status: 'Scheduled',
      statusColor: 'bg-yellow-500/20 text-yellow-300',
    },
    {
      id: 5,
      title: 'VIP Special',
      type: 'VIP',
      startDate: '2024-03-15',
      endDate: '2024-03-22',
      status: 'Inactive',
      statusColor: 'bg-gray-500/20 text-gray-300',
    },
  ]

  const totalResults = 25
  const resultsPerPage = 5
  const startResult = (currentPage - 1) * resultsPerPage + 1
  const endResult = Math.min(currentPage * resultsPerPage, totalResults)

  return (
    <div className="relative flex min-h-screen w-full bg-background-dark">
      {/* SideNavBar */}
      <aside className="flex w-64 flex-col bg-[#111718] p-4 border-r border-r-[#3b5054]">
        <div className="flex h-full flex-col justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBKOX4D-McHDsZ8FzYlkGKElHtZFTSRxktqljBmlYOTWiPUjTF8GLSMTQqfH4Tdkx7UYJ12ebFI0t_wu2PwZvpWHc7IpozK5WSB7hLoU9LW-1fv_rTz1-MobneriKYEstyxyDlIjSG6I1aYBLxk1pfbJzQJMyuuWrzcWru27G8Z0Kb84LQr1BTB6rZa3DlrG8s4t72Ge7e6v_7ucy5naFfD6wdne3tQOtY2R9wtTZNomfX-9i_eEhDbXooG6s6uAQZ0LUJ1vi2D2Ps")'
                }}
              ></div>
              <div className="flex flex-col">
                <h1 className="text-white text-base font-medium leading-normal">Alex Morgan</h1>
                <p className="text-[#9cb5ba] text-sm font-normal leading-normal">Casino Manager</p>
              </div>
            </div>

            <nav className="flex flex-col gap-2 mt-4">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    pathname === item.href
                      ? 'bg-[#283639]'
                      : 'text-white hover:bg-[#283639]'
                  }`}
                >
                  <span
                    className={`material-symbols-outlined ${
                      pathname === item.href && item.id === 'promotions' ? 'fill text-[#0dccf2]' : 'text-white'
                    }`}
                    style={pathname === item.href && item.id === 'promotions' ? { fontVariationSettings: "'FILL' 1" } : {}}
                  >
                    {item.icon}
                  </span>
                  <p className={`text-sm font-medium leading-normal ${pathname === item.href && item.id === 'promotions' ? 'text-[#0dccf2]' : 'text-white'}`}>
                    {item.label}
                  </p>
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <Link
                href="/admin/support"
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-white hover:bg-[#283639] transition-colors"
              >
                <span className="material-symbols-outlined">help</span>
                <p className="text-sm font-medium leading-normal">Support</p>
              </Link>
            </div>
            <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0dccf2] text-[#111718] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#0dccf2]/90 transition-colors">
              <span className="truncate">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex flex-col gap-6">
          {/* PageHeading */}
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Promotions Management</p>
              <p className="text-[#9cb5ba] text-base font-normal leading-normal">Create, view, edit, and delete promotions and bonuses.</p>
            </div>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-11 px-6 bg-[#0dccf2] text-[#111718] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#0dccf2]/90 transition-colors">
              <span className="material-symbols-outlined">add_circle</span>
              <span className="truncate">Create New Promotion</span>
            </button>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* SearchBar */}
            <div className="flex-1">
              <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                  <div className="text-[#9cb5ba] flex border-none bg-[#1b2527] items-center justify-center pl-4 rounded-l-lg">
                    <span className="material-symbols-outlined">search</span>
                  </div>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-white focus:outline-0 focus:ring-2 focus:ring-[#0dccf2] focus:ring-inset border-none bg-[#1b2527] h-full placeholder:text-[#9cb5ba] px-4 text-base font-normal leading-normal"
                    placeholder="Search by promotion title..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    type="text"
                  />
                </div>
              </label>
            </div>

            {/* Chips/Filters */}
            <div className="flex items-center gap-3 overflow-x-auto">
              <button
                onClick={() => setStatusFilter(statusFilter === 'All' ? '' : 'All')}
                className="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#1b2527] px-4 hover:bg-[#283639] transition-colors"
              >
                <p className="text-white text-sm font-medium leading-normal">Status: {statusFilter || 'All'}</p>
                <span className="material-symbols-outlined text-white text-lg">expand_more</span>
              </button>
              <button
                onClick={() => setTypeFilter(typeFilter === 'All' ? '' : 'All')}
                className="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#1b2527] px-4 hover:bg-[#283639] transition-colors"
              >
                <p className="text-white text-sm font-medium leading-normal">Type: {typeFilter || 'All'}</p>
                <span className="material-symbols-outlined text-white text-lg">expand_more</span>
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="@container">
            <div className="overflow-hidden rounded-lg border border-[#3b5054] bg-[#111718]">
              <table className="min-w-full">
                <thead className="bg-[#1b2527]">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider w-2/6">
                      Promotion Title
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Start Date</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">End Date</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#3b5054]">
                  {promotions.map((promo) => (
                    <tr key={promo.id} className="hover:bg-[#1b2527]/50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-white text-sm font-medium">{promo.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-[#9cb5ba] text-sm">{promo.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-[#9cb5ba] text-sm">{promo.startDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-[#9cb5ba] text-sm">{promo.endDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${promo.statusColor}`}>
                          {promo.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-[#9cb5ba] hover:text-[#0dccf2] transition-colors">
                          <span className="material-symbols-outlined">more_vert</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between text-sm text-[#9cb5ba]">
            <p>
              Showing <span className="font-medium text-white">{startResult}</span> to{' '}
              <span className="font-medium text-white">{endResult}</span> of{' '}
              <span className="font-medium text-white">{totalResults}</span> results
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="flex items-center justify-center p-2 rounded-lg hover:bg-[#1b2527] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button
                onClick={() => setCurrentPage(1)}
                className={`w-8 h-8 rounded-lg font-bold transition-colors ${
                  currentPage === 1 ? 'bg-[#0dccf2] text-[#111718]' : 'hover:bg-[#1b2527] text-white'
                }`}
              >
                1
              </button>
              <button
                onClick={() => setCurrentPage(2)}
                className={`w-8 h-8 rounded-lg transition-colors ${
                  currentPage === 2 ? 'bg-[#0dccf2] text-[#111718] font-bold' : 'hover:bg-[#1b2527] text-white'
                }`}
              >
                2
              </button>
              <button
                onClick={() => setCurrentPage(3)}
                className={`w-8 h-8 rounded-lg transition-colors ${
                  currentPage === 3 ? 'bg-[#0dccf2] text-[#111718] font-bold' : 'hover:bg-[#1b2527] text-white'
                }`}
              >
                3
              </button>
              <span className="text-white">...</span>
              <button
                onClick={() => setCurrentPage(5)}
                className={`w-8 h-8 rounded-lg transition-colors ${
                  currentPage === 5 ? 'bg-[#0dccf2] text-[#111718] font-bold' : 'hover:bg-[#1b2527] text-white'
                }`}
              >
                5
              </button>
              <button
                onClick={() => setCurrentPage(Math.min(5, currentPage + 1))}
                disabled={currentPage === 5}
                className="flex items-center justify-center p-2 rounded-lg hover:bg-[#1b2527] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

