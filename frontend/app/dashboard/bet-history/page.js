'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'

export default function BetHistoryPage() {
  const { t } = useTranslation()
  const [filter, setFilter] = useState('all')
  const [dateRange, setDateRange] = useState('7days')

  const betHistory = [
    {
      id: 'BET001',
      date: '2023-11-27 15:30',
      game: 'Galatasaray vs Fenerbahçe',
      type: 'Sports',
      stake: '₺50.00',
      odds: '2.15',
      status: 'won',
      payout: '₺107.50',
      profit: '₺57.50'
    },
    {
      id: 'BET002',
      date: '2023-11-27 14:15',
      game: 'Sweet Bonanza',
      type: 'Slot',
      stake: '₺25.00',
      odds: '1.00',
      status: 'lost',
      payout: '₺0.00',
      profit: '-₺25.00'
    },
    {
      id: 'BET003',
      date: '2023-11-26 21:45',
      game: 'Lightning Roulette',
      type: 'Live Casino',
      stake: '₺100.00',
      odds: '35.00',
      status: 'won',
      payout: '₺3,500.00',
      profit: '₺3,400.00'
    },
    {
      id: 'BET004',
      date: '2023-11-26 18:20',
      game: 'Aviator',
      type: 'Crash',
      stake: '₺75.00',
      odds: '2.50',
      status: 'pending',
      payout: '₺187.50',
      profit: '₺112.50'
    }
  ]

  const getStatusColor = (status) => {
    switch(status) {
      case 'won': return 'bg-green-500/20 text-green-400'
      case 'lost': return 'bg-red-500/20 text-red-400'
      case 'pending': return 'bg-yellow-500/20 text-yellow-400'
      default: return 'bg-gray-500/20 text-gray-400'
    }
  }

  const getStatusText = (status) => {
    switch(status) {
      case 'won': return 'Won'
      case 'lost': return 'Lost'
      case 'pending': return 'Pending'
      default: return 'Unknown'
    }
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Header */}
      <header className="bg-white dark:bg-surface border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary">
                <span className="material-symbols-outlined">arrow_back</span>
                <span className="text-sm font-medium">Back to Dashboard</span>
              </Link>
            </div>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Bet History</h1>
            <div className="w-32"></div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white dark:bg-surface rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Status Filter
              </label>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="all">All Bets</option>
                <option value="won">Won</option>
                <option value="lost">Lost</option>
                <option value="pending">Pending</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Date Range
              </label>
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="7days">Last 7 Days</option>
                <option value="30days">Last 30 Days</option>
                <option value="90days">Last 90 Days</option>
                <option value="all">All Time</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Game Type
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent">
                <option value="all">All Games</option>
                <option value="sports">Sports</option>
                <option value="casino">Casino</option>
                <option value="slots">Slots</option>
                <option value="crash">Crash</option>
              </select>
            </div>
          </div>
        </div>

        {/* Bet History Table */}
        <div className="bg-white dark:bg-surface rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Bet ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Date & Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Game
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Stake
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Odds
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Profit/Loss
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-surface divide-y divide-gray-200 dark:divide-gray-700">
                {betHistory.map((bet) => (
                  <tr key={bet.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900 dark:text-white">
                      {bet.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      {bet.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{bet.game}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{bet.type}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {bet.stake}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      {bet.odds}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(bet.status)}`}>
                        {getStatusText(bet.status)}
                      </span>
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${bet.profit.includes('-') ? 'text-red-500' : 'text-green-500'}`}>
                      {bet.profit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Showing 1 to 4 of 4 results
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700">
              Previous
            </button>
            <button className="px-3 py-1 text-sm bg-primary text-white rounded-md">
              1
            </button>
            <button className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
