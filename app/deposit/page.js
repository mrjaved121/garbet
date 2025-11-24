'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'
import LanguageSwitcher from '@/components/LanguageSwitcher'

export default function DepositPage() {
  const { t } = useTranslation()
  const [selectedMethod, setSelectedMethod] = useState('Banka Havalesi')
  const [amount, setAmount] = useState('0.00')

  const paymentMethods = [
    {
      id: 'bank-transfer',
      name: 'Banka Havalesi',
      min: '₺100',
      max: '₺50,000',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsZgsgcGE2JUbFmuBZ7K-47xXWev8BktkcvH5HsmBWtmRK2EMgX61pnEPNhRZrEjsltHla1jx33Yf62rBJc5sXnfpVbpP4J1F8uof_BLaI-jWFsN85TnMV-jjZes6oHLnVc5ZjC-H-AdE8H_jQen_7ctJYHExykKUmj-eE5kRH3xi7j1usN94Pw1OUOy643-2dzULa30kCfXP48jp--Or6te6Hs89W-OhZcNe-Z-dAWeqf287g96kmTnzR9JvNSNSboL-PwdnFVf4'
    },
    {
      id: 'papara',
      name: 'Papara',
      min: '₺50',
      max: '₺25,000',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3VxJu8h4_zpOJHHMpF2wympCuAITT-W0b-UXUHQzyML_0MwFSW1jX2DjNQ3ZlH-Z6KomIs1WXQTkqC8dADBN-mWV8hIveBXwRbQssEdUSYQsBf8FA45CGOuWnAOAbGq2YyjTe5fMWIaiDSKylFxS-yFsvDBb69rKmJI-nGdTAxlLZr1H3fqCVzkP_e1sErR8CKHijt85gGV-7d18cUWnCkOJJm3e9-2SgZNboy2rW70Y_vstqPlt1yMRV1IiiUwExjNZ5PSLPp6o'
    },
    {
      id: 'credit-card',
      name: 'Kredi Kartı',
      min: '₺75',
      max: '₺10,000',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbrkqhIF9yLuSu4wfYO1fxIUmJ5S7my0LBb4I3lQeSCYkURWhv7aegkmXyBFtXz8Niwpd_VyhcMUDY_QivlocBe4qWjTQvZatsWEcy88fqVrxkeB1wGRcS6iz8OVRCG_TRZ6xlBoxjM84yBby6qnfVlGR3Ob9owN3ZlYHGjrYJV0YgGCWjyKM2xmscw66y-9umdKkGs_HlSutEXJWu_X-DDa_fRGRNSYjnRkR7Cyr_-wv9SfLcJRiiBbsljN41SBvrh_9mPs-sxVY'
    },
    {
      id: 'payfix',
      name: 'PayFix',
      min: '₺25',
      max: '₺5,000',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdp3mmIlh7EJ3ZZIskySQbEfE4E-oPmCx-YyE5eI2rI1ulrDnC3zpX6ufS9mLuEu-7f37S-G0luayBRKaq5APWSilqllI-Q-hX8i6JlhD5u-JCU-rTsXaYssV-z4NwkmRAXZGuRtkTUb8qQvFnDAVXW1JaMKwHPYLRYfiBKXbqVgxoPMCFyWReWlqReggUlHBpOYEVx_t3rwS-oOk-Vff-w1gkURupAfsj4LBSrWBvlqkXgtgAv5vNu8D9f959TGqIU1J8iysHVo0'
    },
    {
      id: 'crypto',
      name: 'Kripto Para',
      min: '₺200',
      max: '₺100,000',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvTtxho8uFm1oh9KtLz4wgysSzct3hXmNc4OmMIs4uCUz4rZYazhOCTRlYvOEWpGlcrh1sksuok3MG-hfEemp8eTYFJIp_Svvb__qu-e6j0FsA71YUhRFxnHSMenjBpaoykUWE2WBiMJnJccxwOYO5mXBCKYXL_IpAzWiAcMRku-ssyeH-P6CHmMeXgipGtTxeaxZ3V8PzaCpCSiWd_hIqvh77EbqVnw-1WEUTaCG2Rx0_kokp7uz2F0n6FPwSBnToyr6hcGJbTjQ'
    }
  ]

  const quickAmounts = ['100₺', '250₺', '500₺']

  const selectedMethodData = paymentMethods.find(method => method.name === selectedMethod)

  const handleAmountClick = (quickAmount) => {
    const numericAmount = quickAmount.replace('₺', '').replace(',', '')
    setAmount(numericAmount)
  }

  const handleDeposit = () => {
    console.log('Deposit:', { method: selectedMethod, amount })
    // Handle deposit logic here
  }

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden font-display bg-background-light dark:bg-background-dark text-text-light">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-6xl flex-1">
            {/* TopNavBar */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-dark px-4 sm:px-6 md:px-10 py-4">
              <div className="flex items-center gap-4">
                <div className="size-6 text-primary">
                  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
                  </svg>
                </div>
                <Link href="/">
                  <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">CasinoBet</h2>
                </Link>
              </div>
              <div className="hidden lg:flex flex-1 justify-center items-center gap-9">
                <Link href="/slots" className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors">{t('common.slotGames')}</Link>
                <Link href="/sports" className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors">{t('common.sports')}</Link>
                <Link href="/promotions" className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors">{t('common.promotions')}</Link>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <LanguageSwitcher />
              </div>
              <div className="flex items-center gap-4">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-surface-dark text-white text-sm font-bold leading-normal tracking-[0.015em] border border-border-dark hover:border-primary/50 transition-colors">
                  <span className="truncate">Balance: ₺5,430.00</span>
                </button>
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD210ygeTjO8mYCDixdXKuwY_6u1Fc690a3IpNFsrpHuSs_1dqdjBV6UiBdHSY_3y1o594_kJxggABJV5vJmDpAvJeOvyL0C_3LAED5UcQGMUw5kzBXoYfT0UsDPZziMnUA7d_h37gsJaccCBzoEP0IezakuPckNOXO-hO7AfECr9WCIm0YrnLb82ixkhkcyH-5mKAUFOKoAPmt6u2CzlyKmjKax2wcmHcHn39-hgHS9hbqCUgDDht0nGiqY8qVJiP4FSjJlVcSJqg")' }}></div>
              </div>
            </header>

            <main className="flex-grow pt-8 sm:pt-12 pb-12">
              {/* PageHeading */}
              <div className="flex flex-wrap justify-between gap-4 p-4">
                <div className="flex flex-col gap-2">
                <p className="text-white text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em]">{t('common.depositTitle')}</p>
                <p className="text-text-dark text-base font-normal leading-normal">{t('common.depositInstructions')}</p>
                </div>
              </div>

              {/* Main Content */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 p-4">
                {/* Left Column: Payment Methods */}
                <div className="lg:col-span-2">
                  <h2 className="text-white text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em] mb-4">{t('common.paymentMethods')}</h2>
                  {/* ImageGrid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                    {paymentMethods.map((method) => (
                      <div
                        key={method.id}
                        onClick={() => setSelectedMethod(method.name)}
                        className={`flex flex-col gap-3 p-3 rounded-lg bg-surface-dark border-2 transition-all duration-300 cursor-pointer ${
                          selectedMethod === method.name
                            ? 'border-primary shadow-glow-primary'
                            : 'border-border-dark hover:border-primary/50'
                        }`}
                      >
                        <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg bg-white p-2">
                          <img alt={method.name} className="w-full h-full object-contain" src={method.image} />
                        </div>
                        <div>
                          <p className="text-white text-base font-medium leading-normal">{method.name}</p>
                          <p className="text-text-dark text-sm font-normal leading-normal">{t('common.min')}: {method.min} / {t('common.max')}: {method.max}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: Deposit Form */}
                <div className="lg:col-span-1">
                  <div className="bg-surface-dark rounded-xl p-6 border border-border-dark h-full flex flex-col">
                    <h2 className="text-white text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em] mb-4">{t('common.depositDetails')}</h2>
                    
                    {/* ListItem */}
                    <div className="flex items-center gap-4 bg-background-dark px-4 py-3 min-h-14 justify-between rounded-lg border border-border-dark">
                      <div className="flex items-center gap-4">
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-10 bg-white p-1">
                          <img alt={selectedMethodData?.name} className="w-full h-full object-contain" src={selectedMethodData?.image} />
                        </div>
                        <p className="text-white text-base font-normal leading-normal flex-1 truncate">{selectedMethod}</p>
                      </div>
                      <div className="shrink-0">
                        <button 
                          onClick={() => setSelectedMethod('')}
                          className="text-primary text-sm font-medium leading-normal hover:underline"
                        >
                          {t('common.change')}
                        </button>
                      </div>
                    </div>

                    <div className="mt-6">
                      <label className="block text-sm font-medium text-text-light mb-2" htmlFor="amount">{t('common.amount')}</label>
                      <div className="relative">
                        <input
                          className="w-full bg-background-dark border-border-dark text-white rounded-lg h-14 pl-12 text-lg focus:ring-primary focus:border-primary"
                          id="amount"
                          name="amount"
                          placeholder="0.00"
                          type="text"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                        />
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-text-dark">₺</span>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-3">
                      {quickAmounts.map((quickAmount) => (
                        <button
                          key={quickAmount}
                          onClick={() => handleAmountClick(quickAmount)}
                          className="flex-1 text-sm bg-background-dark rounded-md py-2 border border-border-dark hover:border-primary/50 transition-colors text-white"
                        >
                          {quickAmount}
                        </button>
                      ))}
                    </div>

                    <div className="mt-6 flex-grow flex flex-col justify-between">
                      <div>
                        <p className="text-sm font-medium text-text-light">{t('common.instructions')}</p>
                        <p className="text-sm text-text-dark mt-2 bg-background-dark p-3 rounded-lg border border-border-dark">
                          {t('common.depositInstructionText')}
                        </p>
                      </div>
                      <button
                        onClick={handleDeposit}
                        className="w-full mt-6 bg-primary text-black font-bold py-4 rounded-lg text-base hover:brightness-110 transition-all duration-300 shadow-glow-primary-lg"
                      >
                        {t('common.completeDeposit')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </main>

            {/* Footer */}
            <footer className="text-center p-6 border-t border-border-dark mt-auto">
              <div className="flex justify-center gap-6 mb-4">
                <a className="text-text-dark hover:text-white text-sm" href="#">Şartlar ve Koşullar</a>
                <a className="text-text-dark hover:text-white text-sm" href="#">Sorumlu Oyun</a>
                <a className="text-text-dark hover:text-white text-sm" href="#">Müşteri Desteği</a>
              </div>
              <p className="text-xs text-text-dark">© 2024 CasinoBet. Tüm hakları saklıdır.</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}

