'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'
import LanguageSwitcher from '@/components/LanguageSwitcher'

export default function WithdrawPage() {
  const { t } = useTranslation()
  const [amount, setAmount] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('Papara')
  const [accountDetails, setAccountDetails] = useState('')

  const quickAmounts = ['100', '250', '500']
  const maxAmount = 5400 // Current balance

  const recentTransactions = [
    {
      id: 1,
      date: '24 Eki 2023, 15:30',
      method: 'Banka Transferi',
      amount: '₺ 1,250.00',
      statusKey: 'completed',
      statusColor: 'bg-green-500/20 text-green-400'
    },
    {
      id: 2,
      date: '22 Eki 2023, 11:05',
      method: 'Papara',
      amount: '₺ 500.00',
      statusKey: 'pending',
      statusColor: 'bg-orange-500/20 text-orange-400'
    },
    {
      id: 3,
      date: '20 Eki 2023, 09:12',
      method: 'Bitcoin',
      amount: '₺ 3,500.00',
      statusKey: 'completed',
      statusColor: 'bg-green-500/20 text-green-400'
    },
    {
      id: 4,
      date: '18 Eki 2023, 18:45',
      method: 'Papara',
      amount: '₺ 750.00',
      statusKey: 'failed',
      statusColor: 'bg-red-500/20 text-red-400'
    }
  ]

  const handleQuickAmount = (value) => {
    setAmount(value)
  }

  const handleMaxAmount = () => {
    setAmount(maxAmount.toString())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Withdrawal request:', { amount, paymentMethod, accountDetails })
    // Handle withdrawal logic here
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-dark font-display text-[#EAEAEA]">
      {/* TopNavBar */}
      <header className="sticky top-0 z-50 border-b border-solid border-white/10 bg-background-dark/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between whitespace-nowrap px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="size-6 text-primary">
              <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6_319)">
                  <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"></path>
                </g>
                <defs>
                  <clipPath id="clip0_6_319"><rect fill="white" height="48" width="48"></rect></clipPath>
                </defs>
              </svg>
            </div>
            <Link href="/">
              <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">CasinoPlatform</h2>
            </Link>
          </div>
          <nav className="hidden items-center gap-9 lg:flex">
            <Link href="/sports" className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors">{t('common.sports')}</Link>
            <Link href="/live-casino" className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors">{t('common.liveCasino')}</Link>
            <Link href="/promotions" className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors">{t('common.promotions')}</Link>
            <Link href="/deposit" className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors">{t('common.deposit')}</Link>
          </nav>
          <div className="hidden sm:flex items-center gap-2">
            <LanguageSwitcher />
          </div>
          <div className="flex flex-1 items-center justify-end gap-4">
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-black text-sm font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105">
              <span className="truncate">Bakiye: 5,400 ₺</span>
            </button>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBbCyORcr1EI5j-4KwaTekYTZLcs5uGemmQnFL7JzlmuYCEjgp6q7FFYnUsfg1sxJ4OqlKGxkhAHuvjM4QheKL-RdxeIwVXV0pDJdCcBHpmdsp1mzaPcEm7VA1RskRxzCQkKXHpismmTszvh38JZYTxtA0IgItT_c3TE0V4BJ8aA1Lxsa_k6_YqnBlrkIfjmEQOodwjoH603ylMQzX7Bfq_wpcOdMFTGNTo4LQL6oo2SKzBKeeqjB0sXIkc7wGdGlkcW6KYjf4eUac")' }}></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-4xl flex-col gap-10">
            {/* Page Heading */}
            <div className="flex flex-wrap items-end justify-between gap-3 p-4">
              <div className="flex flex-col gap-2">
                <p className="text-white text-4xl font-bold leading-tight tracking-[-0.033em]">{t('common.withdrawTitle')}</p>
                <p className="text-white/60 text-base font-normal leading-normal">{t('common.withdrawInstructions')}</p>
              </div>
            </div>

            {/* Withdrawal Form Section */}
            <div className="flex flex-col gap-6 rounded-xl bg-component-dark p-6 shadow-lg sm:p-8">
              <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">{t('common.newWithdrawalRequest')}</h2>
              <form action="#" className="grid grid-cols-1 gap-6 sm:grid-cols-2" method="POST" onSubmit={handleSubmit}>
                {/* Amount Input */}
                <div className="sm:col-span-2">
                  <label className="flex flex-col">
                    <p className="pb-2 text-base font-medium leading-normal text-white">{t('common.amount')} (₺)</p>
                    <div className="relative">
                      <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/50">payments</span>
                      <input
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-white/10 bg-background-dark py-3 pl-10 pr-4 text-white placeholder:text-white/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder={t('common.enterAmount')}
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>
                  </label>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {quickAmounts.map((quickAmount) => (
                      <button
                        key={quickAmount}
                        type="button"
                        onClick={() => handleQuickAmount(quickAmount)}
                        className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-background-dark px-4 transition-colors hover:bg-white/10"
                      >
                        <p className="text-white/80 text-sm font-medium leading-normal">{quickAmount} ₺</p>
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={handleMaxAmount}
                      className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/20 px-4 text-primary transition-colors hover:bg-primary/30"
                    >
                      <p className="font-semibold leading-normal text-sm">{t('common.maximum')}</p>
                    </button>
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <label className="block pb-2 text-base font-medium leading-normal text-white" htmlFor="payment-method">{t('common.paymentMethod')}</label>
                  <div className="relative">
                    <select
                      className="form-select flex w-full min-w-0 flex-1 appearance-none overflow-hidden rounded-lg border border-white/10 bg-background-dark py-3 pl-4 pr-10 text-white placeholder:text-white/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      id="payment-method"
                      name="payment-method"
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                      <option>Papara</option>
                      <option>Banka Transferi</option>
                      <option>Bitcoin</option>
                    </select>
                    <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/50">expand_more</span>
                  </div>
                </div>

                {/* Account Details */}
                <div>
                  <label className="block pb-2 text-base font-medium leading-normal text-white" htmlFor="account-details">{t('common.accountInfo')} (Papara No)</label>
                  <div className="relative">
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-white/10 bg-background-dark py-3 px-4 text-white placeholder:text-white/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      id="account-details"
                      name="account-details"
                      placeholder={t('common.accountInfoPlaceholder')}
                      type="text"
                      value={accountDetails}
                      onChange={(e) => setAccountDetails(e.target.value)}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="flex w-full min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-4 bg-primary text-black text-base font-bold leading-normal tracking-[0.015em] shadow-[0_4px_14px_rgba(249,212,6,0.25)] transition-transform hover:scale-[1.02]"
                  >
                    <span className="material-symbols-outlined">lock</span>
                    <span className="truncate">{t('common.sendWithdrawalRequest')}</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Recent Withdrawals Section */}
            <div className="flex flex-col gap-4">
              <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4">{t('common.recentTransactions')}</h2>
              <div className="overflow-x-auto rounded-xl bg-component-dark shadow-lg">
                <table className="min-w-full text-left text-sm">
                  <thead className="border-b border-white/10 text-white/60">
                    <tr>
                      <th className="px-6 py-4 font-medium" scope="col">{t('common.date')}</th>
                      <th className="px-6 py-4 font-medium" scope="col">{t('common.method')}</th>
                      <th className="px-6 py-4 font-medium" scope="col">{t('common.amount')}</th>
                      <th className="px-6 py-4 font-medium text-right" scope="col">{t('common.status')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentTransactions.map((transaction) => (
                      <tr key={transaction.id} className="border-b border-white/10 transition-colors hover:bg-white/5 last:border-b-0">
                        <td className="whitespace-nowrap px-6 py-4">{transaction.date}</td>
                        <td className="whitespace-nowrap px-6 py-4">{transaction.method}</td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium text-white">{transaction.amount}</td>
                        <td className="whitespace-nowrap px-6 py-4 text-right">
                          <span className={`inline-flex items-center rounded-full ${transaction.statusColor} px-2.5 py-0.5 text-xs font-medium`}>
                            {t(`common.${transaction.statusKey}`)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-solid border-white/10">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-white/50 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p>© 2023 CasinoPlatform. Tüm hakları saklıdır.</p>
            <div className="flex items-center gap-6">
              <a className="hover:text-white" href="#">Yardım & Destek</a>
              <a className="hover:text-white" href="#">Şartlar ve Koşullar</a>
              <a className="hover:text-white" href="#">Sorumlu Oyun</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

