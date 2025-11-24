'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function CrashPage() {
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
    { player: 'Player_1234', bet: '100.00 TL', multiplier: '2.50x', profit: '+150.00 TL', profitColor: 'text-accent-teal' },
    { player: 'GamerProTR', bet: '50.00 TL', multiplier: 'Crashed', profit: '-50.00 TL', profitColor: 'text-red-400' },
    { player: 'LuckyStar77', bet: '250.00 TL', multiplier: '8.75x', profit: '+1937.50 TL', profitColor: 'text-accent-teal' },
    { player: 'BetKing_IST', bet: '75.00 TL', multiplier: '1.89x', profit: '+66.75 TL', profitColor: 'text-accent-teal' },
    { player: 'HighRoller06', bet: '1000.00 TL', multiplier: '11.05x', profit: '+10050.00 TL', profitColor: 'text-accent-teal' }
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
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-surface px-4 sm:px-6 lg:px-10 py-3 sticky top-0 z-50 bg-background-dark/80 backdrop-blur-sm">
        <div className="flex items-center gap-4 text-white">
          <div className="size-6 text-primary">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_6_319)">
                <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"></path>
              </g>
              <defs><clipPath id="clip0_6_319"><rect fill="white" height="48" width="48"></rect></clipPath></defs>
            </svg>
          </div>
          <Link href="/">
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">CasinoPlatform</h2>
          </Link>
        </div>
        <nav className="hidden lg:flex items-center gap-9">
          <Link href="/sports" className="text-text-secondary hover:text-white text-sm font-medium leading-normal transition-colors">Sports</Link>
          <Link href="/live-casino" className="text-text-secondary hover:text-white text-sm font-medium leading-normal transition-colors">Live Casino</Link>
          <Link href="/crash" className="text-primary text-sm font-bold leading-normal">Crash Games</Link>
          <Link href="/slots" className="text-text-secondary hover:text-white text-sm font-medium leading-normal transition-colors">Slots</Link>
        </nav>
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="hidden sm:flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-background-dark text-sm font-bold leading-normal tracking-[0.015em] hover:bg-yellow-400 transition-colors">
            <span className="truncate">Deposit</span>
          </button>
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-surface text-text-secondary hover:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 transition-colors">
            <span className="material-symbols-outlined text-xl">notifications</span>
          </button>
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCEO5d4gfXmzqHzvqx1I77gWq1vaq_S39Ngo35pSt1kmay_tAWJzMi3YyP_tfSn7jJaPf6XNPDSl-5GvkWKev-qytuXElC6KUhlXKv_H0tm6NK9RB34kWsgaKLDATcXW6rnFEI1CEq8Q_90eMlf-k7xf0ChzAjDkLYxmmtaY7zp5r9Vny3XgbU4hQ9p27X7YlTPoUNexhFkNqycF7TkJnMsJ0FrxmSfJ-xDyVjVv-DtDBGihiuvIh-25JVw-m5VzheeOD5pACrKRCI")' }}></div>
        </div>
      </header>

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
                <p className="text-text-secondary text-sm font-medium pb-2">Bet Amount (TL)</p>
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
                <p className="text-text-secondary text-sm font-medium pb-2">Auto Cash-out</p>
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
                <span className="truncate">Place Bet</span>
              </button>
            </div>
          </aside>

          <div className="col-span-12 order-4 mt-4">
            <div className="bg-surface/50 rounded-lg p-4">
              <h3 className="text-text-secondary font-semibold text-lg mb-4">Recent Bets</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="text-xs text-text-secondary uppercase border-b border-surface">
                    <tr>
                      <th className="px-6 py-3" scope="col">Player</th>
                      <th className="px-6 py-3" scope="col">Bet</th>
                      <th className="px-6 py-3" scope="col">Multiplier</th>
                      <th className="px-6 py-3 text-right" scope="col">Profit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentBets.map((bet, index) => (
                      <tr key={index} className={index < recentBets.length - 1 ? "border-b border-surface/50" : ""}>
                        <th className="px-6 py-4 font-medium text-white whitespace-nowrap" scope="row">{bet.player}</th>
                        <td className="px-6 py-4">{bet.bet}</td>
                        <td className={`px-6 py-4 ${bet.multiplier === 'Crashed' ? 'text-red-400' : ''}`}>{bet.multiplier}</td>
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

