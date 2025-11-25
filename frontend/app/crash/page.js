'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { useTranslation } from '@/hooks/useTranslation'

export default function CrashPage() {
  const { t } = useTranslation()
  const [betAmount, setBetAmount] = useState('')
  const [selectedBetAmount, setSelectedBetAmount] = useState('50')
  const [autoCashOut, setAutoCashOut] = useState('1.50x')

  const recentResults = [
    { multiplier: '15.40x', color: 'bg-accent-blue/20 text-accent-blue' },
    { multiplier: '11.05x', color: 'bg-accent-teal/20 text-accent-teal' },
    { multiplier: '8.75x', color: 'bg-accent-teal/20 text-accent-teal' },
    { multiplier: '5.60x', color: 'bg-surface' },
    { multiplier: '4.12x', color: 'bg-surface' },
    { multiplier: '3.20x', color: 'bg-surface' },
    { multiplier: '2.50x', color: 'bg-surface' },
    { multiplier: '2.10x', color: 'bg-surface' },
    { multiplier: '1.89x', color: 'bg-surface' },
    { multiplier: '1.23x', color: 'bg-red-500/20 text-red-400' },
    { multiplier: '1.01x', color: 'bg-red-500/20 text-red-400' },
    { multiplier: '1.00x', color: 'bg-red-500/20 text-red-400' }
  ]

  const recentBets = [
    { player: 'Player_1234', bet: '100.00 TL', multiplier: '2.50x', profit: '+150.00 TL', profitColor: 'text-accent-teal', isCrashed: false },
    { player: 'GamerProTR', bet: '50.00 TL', multiplier: 'Crashed', profit: '-50.00 TL', profitColor: 'text-red-400', isCrashed: true },
    { player: 'LuckyStar77', bet: '250.00 TL', multiplier: '8.75x', profit: '+1937.50 TL', profitColor: 'text-accent-teal', isCrashed: false },
    { player: 'BetKing_IST', bet: '75.00 TL', multiplier: '1.89x', profit: '+66.75 TL', profitColor: 'text-accent-teal', isCrashed: false },
    { player: 'HighRoller06', bet: '1000.00 TL', multiplier: '11.05x', profit: '+10050.00 TL', profitColor: 'text-accent-teal', isCrashed: false }
  ]

  const quickBetAmounts = ['10', '50', '100', '500']

  const handleBetAmountChange = (amount) => {
    setSelectedBetAmount(amount)
    setBetAmount(amount)
  }

  const decreaseBet = () => {
    const current = parseFloat(betAmount) || 0
    if (current > 0) {
      setBetAmount((current - 1).toFixed(2))
    }
  }

  const increaseBet = () => {
    const current = parseFloat(betAmount) || 0
    setBetAmount((current + 1).toFixed(2))
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <Navbar />

      <main className="flex-grow p-4 lg:p-8">
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          <aside className="col-span-12 lg:col-span-2 order-2 lg:order-1">
            <div className="bg-surface/50 rounded-lg p-3 h-full">
              <h3 className="text-text-secondary font-semibold text-sm px-1 mb-3">Recent Results</h3>
              <div className="flex flex-row lg:flex-col gap-2 flex-wrap">
                {recentResults.map((result, index) => (
                  <div key={index} className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg px-3 text-sm font-medium ${result.color}`}>
                    {result.multiplier}
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <div className="col-span-12 lg:col-span-7 order-1 lg:order-2">
            <div className="relative w-full aspect-[16/10] bg-surface/30 rounded-lg overflow-hidden flex items-center justify-center p-8 shadow-inner">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              <div className="z-10 text-center">
                <p className="text-sm font-medium text-primary">Game in Progress</p>
                <p className="text-6xl sm:text-7xl font-bold tracking-tighter my-2 text-accent-teal">4.51x</p>
                <p className="text-text-secondary text-sm">Waiting for next round...</p>
              </div>
              <div className="absolute bottom-0 left-0 h-3/4 w-full bg-gradient-to-t from-accent-teal/20 to-transparent"></div>
            </div>
          </div>

          <aside className="col-span-12 lg:col-span-3 order-3 lg:order-3">
            <div className="bg-surface/50 rounded-lg p-4 space-y-4 h-full">
              <label className="flex flex-col">
                <p className="text-text-secondary text-sm font-medium pb-2">{t('crash.betAmount')}</p>
                <div className="flex w-full items-stretch rounded-lg">
                  <input 
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-surface h-14 placeholder:text-text-secondary p-4 rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal" 
                    placeholder="0.00" 
                    value={betAmount}
                    onChange={(e) => setBetAmount(e.target.value)}
                    type="text"
                  />
                  <div className="flex items-center bg-surface rounded-r-lg px-2">
                    <button onClick={decreaseBet} className="text-text-secondary hover:text-white transition-colors p-1">
                      <span className="material-symbols-outlined text-lg">remove</span>
                    </button>
                    <button onClick={increaseBet} className="text-text-secondary hover:text-white transition-colors p-1">
                      <span className="material-symbols-outlined text-lg">add</span>
                    </button>
                  </div>
                </div>
              </label>

              <div className="flex h-10 w-full items-center justify-center rounded-lg bg-surface p-1">
                {quickBetAmounts.map((amount) => (
                  <label key={amount} className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-2 has-[:checked]:bg-background-dark has-[:checked]:shadow-sm has-[:checked]:text-white text-text-secondary text-sm font-medium transition-colors">
                    <span className="truncate">{amount} TL</span>
                    <input 
                      className="invisible w-0" 
                      name="bet-amount" 
                      type="radio" 
                      value={amount}
                      checked={selectedBetAmount === amount}
                      onChange={() => handleBetAmountChange(amount)}
                    />
                  </label>
                ))}
              </div>

              <label className="flex flex-col">
                <p className="text-text-secondary text-sm font-medium pb-2">{t('crash.autoCashout')}</p>
                <div className="flex w-full items-stretch rounded-lg">
                  <input 
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-surface h-14 placeholder:text-text-secondary p-4 text-base font-normal leading-normal" 
                    placeholder="1.50x" 
                    value={autoCashOut}
                    onChange={(e) => setAutoCashOut(e.target.value)}
                    type="text"
                  />
                </div>
              </label>

              <button className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-4 bg-primary text-background-dark text-base font-bold leading-normal tracking-wide hover:bg-yellow-400 transition-colors shadow-md shadow-primary/20">
                <span className="truncate">{t('crash.placeBet')}</span>
              </button>
            </div>
          </aside>

          <div className="col-span-12 order-4 mt-4">
            <div className="bg-surface/50 rounded-lg p-4">
              <h3 className="text-text-secondary font-semibold text-lg mb-4">{t('crash.recentBets')}</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="text-xs text-text-secondary uppercase border-b border-surface">
                    <tr>
                      <th className="px-6 py-3" scope="col">{t('crash.player')}</th>
                      <th className="px-6 py-3" scope="col">{t('crash.bet')}</th>
                      <th className="px-6 py-3" scope="col">{t('crash.multiplier')}</th>
                      <th className="px-6 py-3 text-right" scope="col">{t('crash.profit')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentBets.map((bet, index) => (
                      <tr key={index} className={index < recentBets.length - 1 ? "border-b border-surface/50" : ""}>
                        <th className="px-6 py-4 font-medium text-white whitespace-nowrap" scope="row">{bet.player}</th>
                        <td className="px-6 py-4">{bet.bet}</td>
                        <td className={`px-6 py-4 ${bet.isCrashed ? 'text-red-400' : ''}`}>{bet.isCrashed ? t('crash.crashed') : bet.multiplier}</td>
                        <td className={`px-6 py-4 text-right ${bet.profitColor}`}>{bet.profit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

