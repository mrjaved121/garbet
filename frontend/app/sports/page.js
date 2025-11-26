'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { useTranslation } from '@/hooks/useTranslation'

export default function SportsPage() {
  const { t } = useTranslation()
  const [dateFilter, setDateFilter] = useState(t('sports.today'))
  const [selectedBets, setSelectedBets] = useState([])
  const [sortBy, setSortBy] = useState(t('sports.time'))

  const matches = [
    {
      id: 'match1',
      date: 'Today, 21:00',
      teams: [
        { name: 'Galatasaray', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGCn5JMcpUb51qag2am8-XwO-c5Bp3mTxOVAMqwIC8JTKiZCfQptyiWHVT7nkw5gx8ixGJM9n_9dqaxUM1xgXqsdOKgkYJdtXR_2uV2JqvZPni15UJLq12_WpvaBxpVKBoZthChZy9D6rJa16w3Sk6OzbT6-H6VsrY7wXSo2PQohYCUe0RVDDdlOIkthOHHSVHAmfKrJp7o384TTYGRI798MXpX_ARShsYSuiz2RBHn-J5Z4SCadu10RRFK3yjAjGTqmQrrpjyjog' },
        { name: 'Fenerbahçe', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxCIiFHNTVC-PVgGCP41xpx-63BD4kikzulodkJBFIrnN0CBbI0ZEA94koLmgWtXRhl6e-p8sKy7bMY9EKMoOGknYKTM0fga6-C-Q61aogPunqv2NrDYr97iphTJWAhlPSROcE_0pKYaKLcHT1iGfGsVduPcdG3aeLOuQBPkv9rFSstyRfuz4n8QEJgUKKUz8X7CKpQrLlA9hGumJqHzAiJRRGpUxeI_JGB-LqGK4oZCfTyEOY1ZQYLstTs7XuhPiH64ObtDyJcRc' }
      ],
      odds: { '1': 2.15, 'X': 3.50, '2': 3.20 },
      moreOptions: 150
    },
    {
      id: 'match2',
      date: 'Tomorrow, 19:00',
      teams: [
        { name: 'Beşiktaş', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2ZVUopDOzff14elkNKzNhjbyOIYHQJb3wb13biJpI3T_Gia2rNXCKXY3QFtZo0d0EBL9hFcUob1-EqzngMANrfXKeKXnOrVTN4VxgUlgG0fpMN1gs49xu74u6g4Uy5_5NWcqmaei-2xQd_j5m9gxBctUcTI7ipJo9WsiLHUsdq6WfVlHDeYYkJlHIUjmO_8L8IhZ3dDQYC5dKed99luR8BqWQjB0Avn7KUqQkwFjHcKT60UmpkQQlG7mg8CKykpJx5nkCZD9ICvk' },
        { name: 'Trabzonspor', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvsSLNMt67ZlnNzhWE7xvd-CT0Kn-QswpK5EEguwEV_7ETHQIcdJyIetQmYPKOGQF0dSKXNReEfqIVFz8oHPDlZZpWVSXzv6OgGf1XrIkmIc5jEnVxi7gSjNo9hDAjHl9KTOSiWqvqyowv5bkWtfNcRoWPadmpZEbW3RH9GKgRSTZ9Og_1bdgnLTUYAPlBv71wVG5p7CmYGMe_8bS-PJWx_ftKXFfEHFnN3uBbHLZ8QfiAwcnFyNUq4HB3mJq9hF2rWLNZ3gklEFc' }
      ],
      odds: { '1': 1.90, 'X': 3.80, '2': 4.10 },
      moreOptions: 124
    }
  ]

  const totalOdds = selectedBets.length > 0 
    ? selectedBets.reduce((acc, bet) => acc * bet.odds, 1).toFixed(2)
    : '0.00'
  
  const totalStake = '0.00'
  const potentialWinnings = '0.00'

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-dark">
      <Navbar />

      {/* Main Content Layout */}
      <div className="mx-auto w-full max-w-screen-2xl p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <aside className="col-span-12 hidden lg:col-span-3 lg:block">
            <div className="sticky top-24 flex flex-col gap-6 rounded-lg bg-surface p-4">
              {/* Search Bar */}
              <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                  <div className="text-text-secondary flex border-none bg-background-dark items-center justify-center pl-4 rounded-l-lg border-r-0">
                    <span className="material-symbols-outlined">search</span>
                  </div>
                  <input 
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-primary focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-background-dark h-full placeholder:text-text-secondary px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal" 
                    placeholder={t('sports.searchPlaceholder')} 
                    type="text"
                  />
                </div>
              </label>

              {/* Segmented Buttons */}
              <div className="flex">
                <div className="flex h-10 flex-1 items-center justify-center rounded-lg bg-background-dark p-1">
                  {[t('sports.today'), t('sports.tomorrow'), t('sports.threeDays'), t('sports.all')].map((option) => (
                    <label 
                      key={option}
                      className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-2 text-text-secondary text-sm font-medium leading-normal ${
                        dateFilter === option 
                          ? 'bg-accent-teal shadow-lg shadow-accent-teal/10 text-background-dark' 
                          : ''
                      }`}
                    >
                      <span className="truncate">{option}</span>
                      <input 
                        checked={dateFilter === option}
                        onChange={() => setDateFilter(option)}
                        className="invisible w-0" 
                        name="date-filter" 
                        type="radio" 
                        value={option}
                      />
                    </label>
                  ))}
                </div>
              </div>

              {/* Accordions */}
              <div className="flex flex-col">
                <details className="flex flex-col border-t border-t-border-color py-2 group" open>
                  <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                    <p className="text-sm font-medium leading-normal text-text-primary">{t('sports.football')}</p>
                    <span className="material-symbols-outlined text-text-secondary group-open:rotate-180 transition-transform">expand_more</span>
                  </summary>
                  <div className="flex flex-col gap-1 pl-4 pb-2">
                    <Link className="text-sm font-normal leading-normal text-accent-blue hover:underline" href="/sports?country=turkey">{t('sports.turkey')}</Link>
                    <Link className="text-sm font-normal leading-normal text-text-secondary hover:text-white" href="/sports?country=england">{t('sports.england')}</Link>
                    <Link className="text-sm font-normal leading-normal text-text-secondary hover:text-white" href="/sports?country=spain">{t('sports.spain')}</Link>
                  </div>
                </details>

                <details className="flex flex-col border-t border-t-border-color py-2 group">
                  <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                    <p className="text-sm font-medium leading-normal text-text-primary">{t('sports.basketball')}</p>
                    <span className="material-symbols-outlined text-text-secondary group-open:rotate-180 transition-transform">expand_more</span>
                  </summary>
                  <div className="flex flex-col gap-1 pl-4 pb-2">
                    <Link className="text-sm font-normal leading-normal text-text-secondary hover:text-white" href="/sports?sport=basketball&country=turkey">{t('sports.turkey')}</Link>
                    <Link className="text-sm font-normal leading-normal text-text-secondary hover:text-white" href="/sports?sport=basketball&country=usa">USA</Link>
                  </div>
                </details>

                <details className="flex flex-col border-t border-t-border-color py-2 group">
                  <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                    <p className="text-sm font-medium leading-normal text-text-primary">{t('sports.tennis')}</p>
                    <span className="material-symbols-outlined text-text-secondary group-open:rotate-180 transition-transform">expand_more</span>
                  </summary>
                  <div className="flex flex-col gap-1 pl-4 pb-2">
                    <Link className="text-sm font-normal leading-normal text-text-secondary hover:text-white" href="/sports?sport=tennis">ATP Tour</Link>
                    <Link className="text-sm font-normal leading-normal text-text-secondary hover:text-white" href="/sports?sport=tennis&tour=wta">WTA Tour</Link>
                  </div>
                </details>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="col-span-12 lg:col-span-6 flex flex-col gap-6">
            {/* Breadcrumbs & Sort */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-xs text-text-secondary">{t('sports.breadcrumbSports')} &gt; {t('sports.breadcrumbFootball')} &gt; <span className="text-text-primary">{t('sports.turkey')} &gt; {t('sports.superLig')}</span></p>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-text-secondary">{t('sports.sortBy')}</span>
                <button 
                  onClick={() => setSortBy(t('sports.time'))}
                  className={`rounded-md px-3 py-1 ${sortBy === t('sports.time') ? 'bg-surface text-text-primary' : 'text-text-secondary'}`}
                >
                  {t('sports.time')}
                </button>
                <button 
                  onClick={() => setSortBy(t('sports.league'))}
                  className={`rounded-md px-3 py-1 ${sortBy === t('sports.league') ? 'bg-surface text-text-primary' : 'text-text-secondary'}`}
                >
                  {t('sports.league')}
                </button>
              </div>
            </div>

            {/* League Section */}
            <div className="flex flex-col gap-4">
              <h3 className="font-heading text-lg font-semibold text-white">{t('sports.turkey')} - {t('sports.superLig')}</h3>

              {matches.map((match) => (
                <div key={match.id} className="flex flex-col gap-3 rounded-lg bg-surface p-4 shadow-lg shadow-black/20">
                  <div className="flex justify-between items-center text-xs text-text-secondary">
                    <span>{match.date}</span>
                    <Link className="flex items-center gap-1 text-accent-blue hover:underline" href={`/sports/match/${match.id}`}>
                      <span>+{match.moreOptions}</span>
                      <span className="material-symbols-outlined !text-sm">chevron_right</span>
                    </Link>
                  </div>
                  <div className="flex flex-col gap-3">
                    {match.teams.map((team, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div 
                          className="size-6 bg-center bg-no-repeat bg-contain" 
                          style={{ backgroundImage: `url('${team.logo}')` }}
                        ></div>
                        <span className="text-sm font-medium text-text-primary">{team.name}</span>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-border-color">
                    {['1', 'X', '2'].map((option) => (
                      <button 
                        key={option}
                        className="flex items-center justify-between rounded-md p-2 bg-background-dark hover:bg-primary/20 transition-colors"
                      >
                        <span className="text-xs text-text-secondary">{option}</span>
                        <span className="text-sm font-bold text-primary">{match.odds[option]}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </main>

          {/* Right Sidebar (Bet Slip) */}
          <aside className="col-span-12 hidden lg:col-span-3 lg:block">
            <div className="sticky top-24 flex flex-col gap-4 rounded-lg bg-surface p-4">
              <h3 className="font-heading text-lg font-semibold text-white">{t('sports.betSlip')}</h3>

              {selectedBets.length === 0 ? (
                <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-border-color p-8 text-center">
                  <span className="material-symbols-outlined text-4xl text-text-secondary">receipt_long</span>
                  <p className="mt-2 text-sm text-text-secondary">{t('sports.selectOutcome')}</p>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {/* Selected bets would go here */}
                </div>
              )}

              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">{t('sports.totalOdds')}</span>
                  <span className="font-bold text-white">{totalOdds}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">{t('sports.totalStake')}</span>
                  <span className="font-bold text-white">₺{totalStake}</span>
                </div>
                <div className="flex items-center justify-between text-lg">
                  <span className="text-text-secondary">{t('sports.potentialWinnings')}</span>
                  <span className="font-bold text-primary">₺{potentialWinnings}</span>
                </div>
                <button 
                  className={`w-full rounded-lg py-3 text-sm font-bold ${
                    selectedBets.length > 0 
                      ? 'bg-primary text-background-dark cursor-pointer hover:opacity-90' 
                      : 'bg-primary/30 text-primary/60 cursor-not-allowed'
                  }`}
                  disabled={selectedBets.length === 0}
                >
                  {t('sports.placeBet')}
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Mobile Bet Slip Button */}
      <div className="sticky bottom-0 left-0 right-0 lg:hidden p-4 bg-gradient-to-t from-background-dark to-transparent">
        <button className="w-full flex justify-between items-center rounded-lg bg-primary py-3 px-4 text-background-dark font-bold shadow-lg shadow-primary/20">
          <span>{t('sports.betSlip')} ({selectedBets.length})</span>
          <span className="material-symbols-outlined">expand_less</span>
        </button>
      </div>
    </div>
  )
}

