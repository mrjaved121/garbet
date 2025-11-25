'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { useTranslation } from '@/hooks/useTranslation'

export default function LiveBettingPage() {
  const { t } = useTranslation()
  const [selectedBets, setSelectedBets] = useState([
    { match: 'Galatasaray vs Fenerbahçe', type: t('liveBetting.matchResult'), selection: '1', odds: 1.85 },
    { match: 'Man City vs Arsenal', type: t('liveBetting.matchResult'), selection: 'X', odds: 4.00 }
  ])
  const [stake, setStake] = useState('10.00')
  const [timeFilter, setTimeFilter] = useState(t('liveBetting.live'))

  const totalOdds = selectedBets.reduce((acc, bet) => acc * bet.odds, 1).toFixed(2)
  const maxWinnings = (parseFloat(stake) * parseFloat(totalOdds)).toFixed(2)

  const removeBet = (index) => {
    setSelectedBets(selectedBets.filter((_, i) => i !== index))
  }

  const matches = [
    {
      league: 'Süper Lig',
      games: [
        {
          id: 'match1',
          time: "68'",
          teams: 'Galatasaray vs Fenerbahçe',
          score: '2 - 1',
          odds: { '1': 1.85, 'X': 3.50, '2': 4.20 }
        },
        {
          id: 'match2',
          time: 'HT',
          teams: 'Beşiktaş vs Trabzonspor',
          score: '0 - 0',
          odds: { '1': 2.10, 'X': 3.20, '2': 3.80 }
        }
      ]
    },
    {
      league: 'Premier League',
      games: [
        {
          id: 'match3',
          time: "75'",
          teams: 'Manchester City vs Arsenal',
          score: '1 - 1',
          odds: { '1': 1.50, 'X': 4.00, '2': 6.50 }
        }
      ]
    }
  ]

  return (
    <div className="relative min-h-screen w-full bg-background-dark">
      <Navbar />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-4 p-4 lg:flex-row lg:gap-8 lg:p-6">
        {/* Main Content */}
        <div className="w-full flex-1">
          {/* Filter Bar */}
          <div className="flex flex-col gap-4 rounded-lg bg-surface p-3 shadow-soft sm:flex-row sm:items-center">
            {/* Chips / Sport Type */}
            <div className="flex flex-1 gap-2 overflow-x-auto pb-2 sm:pb-0">
              <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-background-dark pl-3 pr-4 shadow-md">
                <span className="material-symbols-outlined text-lg text-primary">sports_soccer</span>
                <p className="text-sm font-medium text-primary-text">Futbol</p>
              </button>
              <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-surface/80 pl-3 pr-4 transition-colors hover:bg-surface">
                <span className="material-symbols-outlined text-lg text-secondary-text">sports_basketball</span>
                <p className="text-sm font-medium text-secondary-text">Basketbol</p>
              </button>
              <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-surface/80 pl-3 pr-4 transition-colors hover:bg-surface">
                <span className="material-symbols-outlined text-lg text-secondary-text">sports_tennis</span>
                <p className="text-sm font-medium text-secondary-text">Tenis</p>
              </button>
              <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-surface/80 pl-3 pr-4 transition-colors hover:bg-surface">
                <span className="material-symbols-outlined text-lg text-secondary-text">sports_volleyball</span>
                <p className="text-sm font-medium text-secondary-text">Voleybol</p>
              </button>
            </div>
            {/* SegmentedButtons */}
            <div className="flex h-10 flex-shrink-0 items-center justify-center rounded-lg bg-background-dark p-1 sm:w-auto sm:min-w-[280px]">
              <label className="flex h-full flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-md px-3 text-sm font-medium leading-normal text-secondary-text has-[:checked]:bg-surface has-[:checked]:text-primary-text">
                <span className="truncate">Canlı</span>
                <input checked={timeFilter === 'Live Now'} onChange={() => setTimeFilter('Live Now')} className="invisible w-0" name="time-filter" type="radio" value="Live Now"/>
              </label>
              <label className="flex h-full flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-md px-3 text-sm font-medium leading-normal text-secondary-text has-[:checked]:bg-surface has-[:checked]:text-primary-text">
                <span className="truncate">{t('liveBetting.today')}</span>
                <input checked={timeFilter === t('liveBetting.today')} onChange={() => setTimeFilter(t('liveBetting.today'))} className="invisible w-0" name="time-filter" type="radio" value={t('liveBetting.today')}/>
              </label>
              <label className="flex h-full flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-md px-3 text-sm font-medium leading-normal text-secondary-text has-[:checked]:bg-surface has-[:checked]:text-primary-text">
                <span className="truncate">{t('liveBetting.upcoming')}</span>
                <input checked={timeFilter === t('liveBetting.upcoming')} onChange={() => setTimeFilter(t('liveBetting.upcoming'))} className="invisible w-0" name="time-filter" type="radio" value={t('liveBetting.upcoming')}/>
              </label>
            </div>
          </div>

          {/* Match List */}
          <div className="mt-6 flex flex-col gap-4">
            {/* SectionHeader */}
            <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] text-primary-text px-2">{t('liveBetting.liveFootball')}</h2>

            {matches.map((league, leagueIndex) => (
              <div key={leagueIndex} className={`flex flex-col gap-2 ${leagueIndex > 0 ? 'mt-4' : ''}`}>
                <h3 className="text-sm font-semibold text-secondary-text px-2">{league.league}</h3>
                {league.games.map((match) => (
                  <div key={match.id} className="flex flex-col gap-3 rounded-lg bg-surface p-4 shadow-soft">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-primary">{match.time}</span>
                        <p className="text-base font-medium text-primary-text">{match.teams}</p>
                      </div>
                      <span className="text-lg font-bold text-primary-text">{match.score}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {['1', 'X', '2'].map((option) => (
                        <button
                          key={option}
                          className="group flex flex-col items-center justify-center rounded-lg bg-background-dark/50 py-2 transition-colors hover:bg-background-dark/80"
                        >
                          <span className="text-xs text-secondary-text">{option}</span>
                          <span className="font-bold text-primary-text">{match.odds[option]}</span>
                          <input className="hidden" name={`${match.id}-bet`} type="radio"/>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* BetSlip - Desktop */}
        <aside className="sticky top-24 hidden h-fit w-full max-w-xs flex-col gap-4 lg:flex">
          <div className="rounded-lg bg-surface p-4 shadow-soft">
            <h3 className="mb-4 text-lg font-bold text-primary-text">{t('liveBetting.betSlip')}</h3>

            {selectedBets.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-10">
                <span className="material-symbols-outlined text-4xl text-secondary-text">receipt_long</span>
                <p className="mt-2 text-sm text-secondary-text">{t('liveBetting.yourSelections')}</p>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {selectedBets.map((bet, index) => (
                  <div key={index} className="rounded-lg bg-background-dark p-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-medium text-primary-text">{bet.match}</p>
                        <p className="text-xs text-secondary-text">{bet.type}</p>
                      </div>
                      <button onClick={() => removeBet(index)} className="text-secondary-text hover:text-primary-text">
                        <span className="material-symbols-outlined text-base">close</span>
                      </button>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <p className="text-sm font-bold text-primary">{t('liveBetting.selectionLabel')}: {bet.selection}</p>
                      <p className="text-sm font-bold text-primary-text">@{bet.odds}</p>
                    </div>
                  </div>
                ))}

                {/* Total Odds and Stake */}
                <div className="mt-2 border-t border-background-dark pt-3">
                  <div className="flex justify-between text-sm font-medium text-secondary-text">
                    <span>{t('liveBetting.totalOdds')}</span>
                    <span className="text-primary-text">{totalOdds}</span>
                  </div>
                  <div className="mt-3">
                    <label className="mb-1 block text-sm font-medium text-secondary-text" htmlFor="stake-desktop">{t('liveBetting.stake')}</label>
                    <div className="relative">
                      <input
                        className="w-full rounded-lg border-none bg-background-dark py-2 pl-3 pr-12 text-primary-text focus:ring-2 focus:ring-primary"
                        id="stake-desktop"
                        type="text"
                        value={stake}
                        onChange={(e) => setStake(e.target.value)}
                      />
                      <span className="absolute inset-y-0 right-3 flex items-center text-sm font-bold text-secondary-text">TRY</span>
                    </div>
                  </div>
                  <div className="mt-3 flex justify-between text-sm font-medium text-secondary-text">
                    <span>{t('liveBetting.maxWinnings')}</span>
                    <span className="text-lg font-bold text-primary">{maxWinnings} TRY</span>
                  </div>
                </div>

                {/* CTA */}
                <button className="mt-4 flex h-12 w-full items-center justify-center rounded-lg bg-primary text-base font-bold text-background-dark shadow-soft transition-opacity hover:opacity-90">
                  {t('liveBetting.placeBet')}
                </button>
              </div>
            )}
          </div>
        </aside>
      </main>

      {/* BetSlip Trigger - Mobile */}
      <div className="sticky bottom-0 z-40 block bg-gradient-to-t from-background-dark to-transparent px-4 pb-4 pt-8 lg:hidden">
        <button className="flex h-14 w-full items-center justify-between rounded-lg bg-primary px-4 text-background-dark shadow-soft">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined font-semibold">receipt_long</span>
            <span className="text-base font-bold">Kuponu Görüntüle ({selectedBets.length})</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xs">Toplam Oran</span>
            <span className="text-base font-bold">{totalOdds}</span>
          </div>
        </button>
      </div>
    </div>
  )
}

