'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'

export default function GameHistoryPage() {
  const { t } = useTranslation()
  const [filter, setFilter] = useState('all')

  const gameHistory = [
    {
      id: 'GAME001',
      date: '2023-11-27 16:45',
      game: 'Sweet Bonanza',
      provider: 'Pragmatic Play',
      type: 'Slot',
      duration: '12:34',
      totalBet: '₺125.00',
      totalWin: '₺340.75',
      profit: '₺215.75',
      rounds: 45
    },
    {
      id: 'GAME002',
      date: '2023-11-27 15:20',
      game: 'Lightning Roulette',
      provider: 'Evolution Gaming',
      type: 'Live Casino',
      duration: '25:18',
      totalBet: '₺200.00',
      totalWin: '₺180.00',
      profit: '-₺20.00',
      rounds: 12
    },
    {
      id: 'GAME003',
      date: '2023-11-26 22:30',
      game: 'Aviator',
      provider: 'Spribe',
      type: 'Crash',
      duration: '8:45',
      totalBet: '₺75.00',
      totalWin: '₺225.00',
      profit: '₺150.00',
      rounds: 8
    },
    {
      id: 'GAME004',
      date: '2023-11-26 19:15',
      game: 'Blackjack Classic',
      provider: 'Evolution Gaming',
      type: 'Live Casino',
      duration: '18:22',
      totalBet: '₺300.00',
      totalWin: '₺450.00',
      profit: '₺150.00',
      rounds: 15
    }
  ]

  const getProviderLogo = (provider) => {
    const logos = {
      'Pragmatic Play': 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=32&h=32&fit=crop&crop=center',
      'Evolution Gaming': 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=32&h=32&fit=crop&crop=center',
      'Spribe': 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=32&h=32&fit=crop&crop=center'
    }
    return logos[provider] || 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=32&h=32&fit=crop&crop=center'
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
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Game History</h1>
            <div className="w-32"></div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-surface rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="material-symbols-outlined text-2xl text-blue-500">casino</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Sessions</p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">24</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-surface rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="material-symbols-outlined text-2xl text-green-500">trending_up</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Wagered</p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">₺2,450</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-surface rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="material-symbols-outlined text-2xl text-yellow-500">emoji_events</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Won</p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">₺2,895</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-surface rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="material-symbols-outlined text-2xl text-primary">account_balance_wallet</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Net Profit</p>
                <p className="text-2xl font-semibold text-green-600">+₺445</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-surface rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Game Type
              </label>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="all">All Games</option>
                <option value="slots">Slots</option>
                <option value="live-casino">Live Casino</option>
                <option value="crash">Crash Games</option>
                <option value="table">Table Games</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Provider
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent">
                <option value="all">All Providers</option>
                <option value="pragmatic">Pragmatic Play</option>
                <option value="evolution">Evolution Gaming</option>
                <option value="spribe">Spribe</option>
                <option value="netent">NetEnt</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Date Range
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent">
                <option value="7days">Last 7 Days</option>
                <option value="30days">Last 30 Days</option>
                <option value="90days">Last 90 Days</option>
                <option value="all">All Time</option>
              </select>
            </div>
          </div>
        </div>

        {/* Game History Table */}
        <div className="bg-white dark:bg-surface rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Game
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Date & Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Rounds
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Total Bet
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Total Win
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Profit/Loss
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-surface divide-y divide-gray-200 dark:divide-gray-700">
                {gameHistory.map((session) => (
                  <tr key={session.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img className="h-8 w-8 rounded-full" src={getProviderLogo(session.provider)} alt={session.provider} />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">{session.game}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{session.provider}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      {session.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      {session.duration}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      {session.rounds}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {session.totalBet}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {session.totalWin}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${session.profit.includes('-') ? 'text-red-500' : 'text-green-500'}`}>
                      {session.profit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
