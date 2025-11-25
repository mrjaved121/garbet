'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'
import Navbar from '@/components/Navbar'

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
      <Navbar />

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

