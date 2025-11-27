'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'

export default function BonusesPage() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState('active')

  const activeBonuses = [
    {
      id: 'BONUS001',
      name: '100% Welcome Bonus',
      type: 'Deposit Bonus',
      amount: '₺500.00',
      progress: 65,
      wagering: '₺3,250 / ₺5,000',
      expires: '2023-12-15',
      status: 'active'
    },
    {
      id: 'BONUS002',
      name: 'Free Spins Friday',
      type: 'Free Spins',
      amount: '50 Spins',
      progress: 100,
      wagering: 'Completed',
      expires: '2023-11-30',
      status: 'completed'
    }
  ]

  const availableBonuses = [
    {
      id: 'PROMO001',
      name: 'Weekend Reload',
      type: 'Deposit Bonus',
      description: '50% bonus up to ₺1,000 on weekend deposits',
      minDeposit: '₺100',
      wagering: '30x',
      validUntil: '2023-12-31',
      terms: 'Valid for slots and live casino games only'
    },
    {
      id: 'PROMO002',
      name: 'Cashback Monday',
      type: 'Cashback',
      description: '10% cashback on all losses from previous week',
      minDeposit: '₺50',
      wagering: '5x',
      validUntil: '2023-12-31',
      terms: 'Maximum cashback ₺500 per week'
    },
    {
      id: 'PROMO003',
      name: 'Slot Tournament',
      type: 'Tournament',
      description: 'Compete for ₺10,000 prize pool in slot tournament',
      minDeposit: '₺25',
      wagering: 'None',
      validUntil: '2023-12-15',
      terms: 'Minimum 100 spins required to qualify'
    }
  ]

  const bonusHistory = [
    {
      id: 'HIST001',
      name: 'First Deposit Bonus',
      type: 'Deposit Bonus',
      amount: '₺250.00',
      claimed: '2023-10-15',
      completed: '2023-10-28',
      status: 'completed'
    },
    {
      id: 'HIST002',
      name: 'Birthday Bonus',
      type: 'Special Bonus',
      amount: '₺100.00',
      claimed: '2023-09-20',
      completed: '2023-09-25',
      status: 'completed'
    }
  ]

  const getStatusColor = (status) => {
    switch(status) {
      case 'active': return 'bg-blue-500/20 text-blue-400'
      case 'completed': return 'bg-green-500/20 text-green-400'
      case 'expired': return 'bg-red-500/20 text-red-400'
      default: return 'bg-gray-500/20 text-gray-400'
    }
  }

  const getTypeIcon = (type) => {
    switch(type) {
      case 'Deposit Bonus': return 'account_balance_wallet'
      case 'Free Spins': return 'casino'
      case 'Cashback': return 'savings'
      case 'Tournament': return 'emoji_events'
      default: return 'card_giftcard'
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
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Bonuses & Promotions</h1>
            <div className="w-32"></div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('active')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'active'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              Active Bonuses
            </button>
            <button
              onClick={() => setActiveTab('available')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'available'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              Available Bonuses
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'history'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              Bonus History
            </button>
          </nav>
        </div>

        {/* Active Bonuses Tab */}
        {activeTab === 'active' && (
          <div className="space-y-6">
            {activeBonuses.map((bonus) => (
              <div key={bonus.id} className="bg-white dark:bg-surface rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="material-symbols-outlined text-2xl text-primary">{getTypeIcon(bonus.type)}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{bonus.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{bonus.type}</p>
                    </div>
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(bonus.status)}`}>
                    {bonus.status.charAt(0).toUpperCase() + bonus.status.slice(1)}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Bonus Amount</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{bonus.amount}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Wagering Progress</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{bonus.wagering}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Expires</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{bonus.expires}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                    <span>Progress</span>
                    <span>{bonus.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${bonus.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Available Bonuses Tab */}
        {activeTab === 'available' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableBonuses.map((bonus) => (
              <div key={bonus.id} className="bg-white dark:bg-surface rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="material-symbols-outlined text-2xl text-primary">{getTypeIcon(bonus.type)}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{bonus.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{bonus.type}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">{bonus.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Min Deposit:</span>
                    <span className="text-gray-900 dark:text-white font-medium">{bonus.minDeposit}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Wagering:</span>
                    <span className="text-gray-900 dark:text-white font-medium">{bonus.wagering}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Valid Until:</span>
                    <span className="text-gray-900 dark:text-white font-medium">{bonus.validUntil}</span>
                  </div>
                </div>
                
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">{bonus.terms}</p>
                
                <button className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                  Claim Bonus
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Bonus History Tab */}
        {activeTab === 'history' && (
          <div className="bg-white dark:bg-surface rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Bonus
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Claimed
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Completed
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-surface divide-y divide-gray-200 dark:divide-gray-700">
                  {bonusHistory.map((bonus) => (
                    <tr key={bonus.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">{bonus.name}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{bonus.type}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                        {bonus.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                        {bonus.claimed}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                        {bonus.completed}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(bonus.status)}`}>
                          {bonus.status.charAt(0).toUpperCase() + bonus.status.slice(1)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
