'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { useTranslation } from '@/hooks/useTranslation'

export default function PromotionsPage() {
  const { t } = useTranslation()
  const [selectedFilter, setSelectedFilter] = useState(t('promotions.all'))
  const [currentPage, setCurrentPage] = useState(1)

  const promotions = [
    {
      id: 1,
      title: '100% Sports Welcome Bonus',
      description: 'Match your first deposit for sports betting and kick off your winning streak.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAk_vnEsPqH--xoScRbAPF6mziTrzsq2jilF-RXlfOmulLVpzy2oKXco83kath5OnzEauZi5iOOJdVEA2z9bfxebqmFga0hrboTI3xZl8SDz_NcmWK7xsOo3PRQMbTiL0_FYWAHnFcA3E7YarC1e4iAtVr-pudu4dFAwcaNTxL-I4s7m6dhZgV4RbQP6pK_0_WUCI8ZEcbU_skLg9cBDjf2xGPDLNj99giTwEJMSGzOrLmn0XghAuu1eFG7HpQHS92UsRA1VABxwiY',
      category: 'Welcome',
      categoryColor: 'bg-blue-500/80',
      buttonText: t('promotions.claim'),
      buttonStyle: 'bg-primary text-background-dark hover:bg-yellow-400',
      type: 'Sports',
      tag: 'Welcome Bonus'
    },
    {
      id: 2,
      title: '20% Weekly Casino Cashback',
      description: 'Get cashback on your casino losses every week. Less risk, more fun!',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXRvg2gCHLRQIsqDYHn-DWSo0CkTy7PVIp_ybo5nmy0bwIHVxsV0rloZ9uqYqY1obqjGMV8717MLDi1OEdDPITXomcxHECdRZ2xtlENhsfugvMPvo722aaMLK1yHLQhpCi9LkZ2c6CbIdifXGOsF1tRRO6eT8YNsAKyTZd3-5sda8oX9AV2jkJPunyI5mKZjjRfMJ6_Xq_08dCAu8YImg8eaSaBzPNynXLPWA-VhUo023AmutH4-IaKZtVJ8Ll5IdWlxcajiusJSE',
      category: 'Cashback',
      categoryColor: 'bg-teal-500/80',
      buttonText: t('promotions.viewDetails'),
      buttonStyle: 'bg-primary/20 text-primary hover:bg-primary/30',
      type: 'Casino',
      tag: 'Cashback'
    },
    {
      id: 3,
      title: '50% Friday Reload Bonus',
      description: 'Boost your deposits every Friday to play more of your favorite games.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrFG4eQD5_CjZTdY-6cnetN4MwGN0ISMNcYrHbOD9s4YjeRGmItxbL9uRhMgd19-e-rfQEllxX4UcEk48tujdRb2PIwbCAz_4AeC7_62npqiMcXexkGUz6BEainyfzvYRMo-1U1Inh-1yhW8ynCG6_B8-8FVfE_V_jNQs_Ediun9QTkUWp3frxbg4dRi8qvgCX3YzL4BZ9kHCzNi8xzIBM72ZrscDI-3C3s_1xg-CXr1vfnwMvlgvuoRX0mqWexgeKnPGMfC56pcI',
      category: 'Reload',
      categoryColor: 'bg-purple-500/80',
      buttonText: t('promotions.viewDetails'),
      buttonStyle: 'bg-primary/20 text-primary hover:bg-primary/30',
      type: 'Casino',
      tag: 'Reload'
    },
    {
      id: 4,
      title: 'Live Casino Welcome Offer',
      description: 'A special bonus for new live casino players. Experience the thrill of real dealers.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAa8SzdL191R9gU5ZZ0vu4ibLfAa-NVCptzN4LB1NWw8kc3gX-frQLyENG9lnWpR6NOzyVWVRf9u6D_sRzqch3v6A2vmqkXw2U2w2OdHR1BmluY-phNqIDiix5Ngj7rthvVkTTJynQP-qKuU5fWeVtSixrOaoM8YX5MFYmOIKVKJxXm5u98IOG8784Xi65mfFC4FysZkMHJ49UeDX0fzuKzLHV1FQi6OwoEzURbOq5QsNVXXxO6IteLryJE1YbzNuk4nE0gbdqI8yM',
      category: 'Welcome',
      categoryColor: 'bg-blue-500/80',
      buttonText: t('promotions.claim'),
      buttonStyle: 'bg-primary text-background-dark hover:bg-yellow-400',
      type: 'Live Casino',
      tag: 'Welcome Bonus'
    },
    {
      id: 5,
      title: 'Daily Free Spins',
      description: 'Log in daily to claim your free slot spins and win big without spending a dime.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAf_diYheJlKcLeKanz4kpa9IEObVQzmOtIJ8KfDIGq0D7A5nJ7iRHYlqzHA9X_YcdmiTnhWSQjsGz34zphp5gn9ROlXLOOYwb_4oLwVMOI3KVqs91XNNb1yTmNOe3U8KE-kdbvwd3GruU_24Ei6uJUzSctS3VwcVmjvC7viJF9mvzlkJnJ_XkUJTFd_jF6WcB07G5vO9Qzgu6CVE0aXTvfS4zH_akeXiD-RAQBRE5y1KweKyjrJCiqs0yZflBHYfdXGWI5bmsj0Qw',
      category: 'Spins',
      categoryColor: 'bg-green-500/80',
      buttonText: t('promotions.viewDetails'),
      buttonStyle: 'bg-primary/20 text-primary hover:bg-primary/30',
      type: 'Casino',
      tag: 'Spins'
    },
    {
      id: 6,
      title: 'Esports Betting Bonus',
      description: 'Get extra value on all your esports bets. Back your favorite teams to win.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCb_Y51Peg7-CmwCSEzjC0KkkfnSDDycCrgLvWWEDs8H1CrQjCcw_p345FEH4gVAVCZU78NDbhdxlVYaMFI1QekR3oI67Y8bNEtmLb1HAF_G-MdVcga_9nL_A5oZCHeoRjIC8Z0r4BG0-rbt7loQm5uaRJlb0QHl0D_y4KqPmu9y-Z8tPVq6BseGuzRuOwCDDTc0O8nvvDsAOKMn05am9Q-_DgwHe41ggImKoVdw2f16TKr5f44Aifur0Q9FlYUacmic1NMkUoN1Tc',
      category: 'Esports',
      categoryColor: 'bg-red-500/80',
      buttonText: t('promotions.claim'),
      buttonStyle: 'bg-primary text-background-dark hover:bg-yellow-400',
      type: 'Sports',
      tag: 'Esports'
    }
  ]

  const filters = [t('promotions.all'), t('promotions.casino'), t('promotions.sports'), t('promotions.welcomeBonus'), t('promotions.cashback'), t('promotions.reload')]

  const filteredPromotions = selectedFilter === t('promotions.all') 
    ? promotions 
    : promotions.filter(promo => {
        if (selectedFilter === t('promotions.casino')) return promo.type === 'Casino'
        if (selectedFilter === t('promotions.sports')) return promo.type === 'Sports'
        if (selectedFilter === t('promotions.welcomeBonus')) return promo.tag === 'Welcome Bonus'
        if (selectedFilter === t('promotions.cashback')) return promo.tag === 'Cashback'
        if (selectedFilter === t('promotions.reload')) return promo.tag === 'Reload'
        return true
      })

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <Navbar />
      <div className="layout-container flex h-full grow flex-col">

        <main className="flex-1 px-4 py-8 md:px-8 lg:px-16 xl:px-24">
          <div className="mx-auto flex max-w-7xl flex-col gap-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">Promotions</h1>
            </div>

            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`flex h-10 cursor-pointer shrink-0 items-center justify-center gap-x-2 rounded-lg px-4 transition-colors ${
                    selectedFilter === filter
                      ? 'bg-primary text-background-dark'
                      : 'bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white/80 hover:text-white'
                  }`}
                >
                  <p className={`text-sm leading-normal ${selectedFilter === filter ? 'font-bold' : 'font-medium'}`}>
                    {filter}
                  </p>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPromotions.map((promo) => (
                <div key={promo.id} className="flex flex-col gap-4 overflow-hidden rounded-xl bg-[#1A1A1A] p-4 shadow-lg shadow-black/20 transition-transform hover:scale-[1.02]">
                  <div className="relative w-full">
                    <div 
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg" 
                      style={{ backgroundImage: `url("${promo.image}")` }}
                    ></div>
                    <div className={`absolute top-3 left-3 rounded-md ${promo.categoryColor} px-2.5 py-1 text-xs font-bold uppercase text-white backdrop-blur-sm`}>
                      {promo.category}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-white text-xl font-bold leading-normal">{promo.title}</h3>
                    <p className="text-white/70 text-sm font-normal leading-normal">{promo.description}</p>
                    <button className={`mt-2 flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-4 text-sm font-bold leading-normal tracking-[0.015em] transition-colors ${promo.buttonStyle}`}>
                      <span className="truncate">{promo.buttonText}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center pt-8">
              <nav className="flex items-center gap-2">
                <button 
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  className="flex size-10 items-center justify-center rounded-lg text-white/60 hover:bg-[#2a2a2a] hover:text-white transition-colors"
                >
                  <span className="material-symbols-outlined text-xl">chevron_left</span>
                </button>
                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`text-sm leading-normal flex size-10 items-center justify-center rounded-lg transition-colors ${
                      currentPage === page
                        ? 'text-background-dark bg-primary font-bold'
                        : 'text-white/60 hover:bg-[#2a2a2a] hover:text-white font-medium'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <span className="text-sm font-medium leading-normal flex size-10 items-center justify-center text-white/60 rounded-lg">...</span>
                <button
                  onClick={() => setCurrentPage(10)}
                  className={`text-sm font-medium leading-normal flex size-10 items-center justify-center rounded-lg text-white/60 hover:bg-[#2a2a2a] hover:text-white transition-colors ${
                    currentPage === 10 ? 'bg-primary text-background-dark font-bold' : ''
                  }`}
                >
                  10
                </button>
                <button 
                  onClick={() => setCurrentPage(Math.min(10, currentPage + 1))}
                  className="flex size-10 items-center justify-center rounded-lg text-white/60 hover:bg-[#2a2a2a] hover:text-white transition-colors"
                >
                  <span className="material-symbols-outlined text-xl">chevron_right</span>
                </button>
              </nav>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

