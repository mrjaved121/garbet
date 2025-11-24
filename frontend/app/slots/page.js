'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SlotsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü')
  const [currentPage, setCurrentPage] = useState(1)

  const games = [
    {
      id: 1,
      name: 'Gates of Olympus',
      provider: 'Pragmatic Play',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXFZ5p4ijhM8T5x-6l6okmPdSNjMRRJ0JZgvLJT2VC3IFHqvh4rPP5Lym8pRfu2YMLRycQiyq4Q1OQjweRUeKqLQBFipTETf6DfpLccIIf-9dhjfmPNQwgR2M96zF4gdOwTy7XALiobeZ9u974RUld7_9lrW5YlR91aEqhJ3VVk1av_Fu-zCuag0UIHxFE_rmCgONtfgAWkJORmjXUUj0EctG3muIu6oN-3l-Ic-KcwYj2bblLliuZxeDyWKyKUltlS5S9JiVzbPY'
    },
    {
      id: 2,
      name: 'Sweet Bonanza',
      provider: 'Pragmatic Play',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAM81JBbIX6h6n75cpxkKGr8WQYV49gExzorKGIR3FVgPlgRRdaMCPG7n30bosHSc2rTe4JfXB7iVwBXsP4YNXWKW3oVR5FjbDp8HXSPOzcmeZ4zH_3XrRVoduug2nDLA7GCGeNl7q-PFTcUgxTXAedSLCX_1-kXMhAs0bWv22OdB4RGanIFoAt-hf-UBkiBWILt6fjuta6KnL8XvDbs7UbZDGeJ4jaqomfmJzVC1wsK8Mpwy0idNVJyf7VTaSXYjsL5-reLUF-ZOg'
    },
    {
      id: 3,
      name: 'Big Bass Splash',
      provider: 'Reel Kingdom',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA1RUYJyabiPWLEB9gg_9HEbAiyLS7QaMPL9JVmC8lV9Cb-XNWI0SNO6bBIJgFm-RObPm2SEKrqhwLtZP6DDSvNDLsCRdAJ6GX80UiSRarTTcGLHLe3op9O7Artcbut6hVysip-h-S-gp0tWHfRpsjz5hZaHqLJPaQzi8MchQc7EDYHMABK5ZVhLnMHjjcEOZ569Kd9AR0HEQ0xsAkLquuGNb8v4d4O4cdE0mhSZGpARBLQ3QrqxkWjYM19_wNJRfz-ZSfBr3ekf0'
    },
    {
      id: 4,
      name: 'Sugar Rush',
      provider: 'Pragmatic Play',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKglxUTR3a68pa0hhqBOfIwqTT6IGgSFp4-mZTPLW5pmtACYL23VQg06QwlakwgswRLbgcRMX0it4-KMS5Ybmmvybfe4YZczrDByj9NSmvNUfvkTAhI9F8v_669ObZCU5BwlVtaCfzSuq3HL5XENDvKGaVd0Dx0yIOf77HyRCbx0ngc50DlhrXIWdFg3oY9GU5g56kvHc0jH55GJcrhoDtz2jr2zuvaEA5I77CmBrLhttN-d1UOZG9unw8F9vhmr54LFwpPhBK8Fc'
    },
    {
      id: 5,
      name: 'Starlight Princess',
      provider: 'Pragmatic Play',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHglJ69nOHy-W-48ooTZtxJajPL7U0K8x3-PHo7nmq7TGJh6IY2DfallXuaDIFjXAGqVEtohhvdH9xxB_N4W_4Nli_tzKhRN7e6p5tEFnSKkPrdqNgXdMEyMaNNQg4QjEW5lzAPSgZxOIIHLpBJKABviDqM0zddD4Y5Jb9a6XyuSl83u5KTjIcprrsHVJwSY7Uq4xHGdBpBrtzjYZBHe--cgfw-tJUvUk6XNqkJxQioEqgnl8UrhL2L4HlG9J70WjJUz18ojFXXS8'
    },
    {
      id: 6,
      name: 'The Dog House',
      provider: 'Pragmatic Play',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsF7ECipFzyNut4r8-iPNacwiGE_Gd3wdKQT2k9TvyFC6Kncez3BfkJjdJkPDInzynF4n-xdm9Mh3YN0Aet4i2lbfhAaSRbcOQNwZXBTt9t9Q4V7AgDnKhH2vg4O_xqq7Q0E6RT9dp4WROp7pughUWay3rh7eoHDTYW5C8V0GBD2uidwI1p_UEc21k0-QRDajZ2b1iARjPUP_cEEGSVjDUz15LY-c6wy-YaQw9JA8FtGEGoW51WtDC8ub4KSjUPlXijl_jrVcYWQA'
    },
    {
      id: 7,
      name: "Gonzo's Quest",
      provider: 'NetEnt',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoyVc4zvM_X6mS87B60dccUfLv6wlQmm_IH9Bi-bn16OQY8rVx_hDjkpv-oYIrC81gFUhCeId-BuAiRzB3ILFPviEjSlYMBSteZw1HtveQ-9jFZ4lQCLaem0RmaSfTfk6rWDdTmZhkPHAlmZn4oZGAhQoz6GMMDdoKAR6Mtk5eQw9lkLw7E-d0rKvER8QmGFlxckrJo-sfKQ1dPV0zFS1N8TYh_U6cG56Ojq04dDsjIGewtfLt_DD2ci9c1RhcIaalDho4pX617QE'
    },
    {
      id: 8,
      name: 'Book of Dead',
      provider: "Play'n GO",
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLKz4Oo4X7eNKzPfECTPRGXGXUN_pyvrw4oOrLsdDC3FB7D9fbKsKcb-nQzDsJHPAKbqo7UEkqC8l24mmRWJW7CxZ9HGBYpY8xUQ1bXvomHUjjTkXwaXKs1WkMfE-a-cdORr4Oa5wq_ZfusyBTXB93-SlaHDgBTDkyaejq6FXMho9XBlBBJOF-9BJL38R1HXIQzHBJ-PBWrQDMxokNqSaA5PBCQzBiLuqFzQ_5uZlKC_nJ0owYw3mQkbXkYULbX5Ao5Xc7ono-kh4'
    },
    {
      id: 9,
      name: 'Money Train 3',
      provider: 'Relax Gaming',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDb0LNOKyaXdhieCTUuj6SPUlvUAHfj7_VINNmB0GgsKakJ9tnMOFhVykSL8JFUGMU90-um64OUnQorMuH5rZKuenWXme_BRZXz_J-uaeufufh0JvIE5vrHMqvlMRiderKyu37boQ8WwUpx2nygrkybQ_5p9rB8zW8ojkmkPtAArkbhJXd0oKBuGf1Oe6R6ryPtVZYj_Bl_37ApJMqjJJjO1CY77HjJBX5XcNu6hljzip8U1WZS_3vIVTAMTezODxCI2_VcdNVmlKQ'
    },
    {
      id: 10,
      name: "Jammin' Jars",
      provider: 'Push Gaming',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcVyz1oKWTY75syysgAaXEguJiqCbqzo9JHRSTKKZPKbBCV7wepsPxk7peBqJJygGabirmdi_r_fHYe9E43ePOUZ6POe5KI1yJ3Of_nkyw0QRQyyTL5qqjoyjQzEJ745I3Y0Imx-U-jHez9DtRy4NdqCpK-jNGdKLDDzLjJLl-urbdDWWXo6bSpJAlzYVcfUf8960prtCtr-I3olM-Zlqzu8yMhwDZ0ENzIpdLC4rm1X5y2AhQGj74CuDbBI1B3Zvn5xpmBaQeBis'
    },
    {
      id: 11,
      name: 'Wolf Gold',
      provider: 'Pragmatic Play',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqCWObXldcVTLaY3wZ8EUYiY2I5WxU6riwL0cFjS-Yp3y0UHmbxzPt8yAuvITryoPVJq6k6GqUZm3Z97s12yntu0TyXF_uPedcQpYU9Xc8rt7Y0NGiZ3LPhVJwZDhMMt7b4kjO-0yZxdipMNMmgSK_a8jOmxr2Dwapf3nXHeng3r46DJ3K5SkFap1s4IhxDDC7VVYptMgnG9BfpjE4BT_X4EIdCl-uWJkTAxIl1-XfyDHzutgsFDLQtCEjbVuTAB8MEmxNZSaLacQ'
    },
    {
      id: 12,
      name: 'Reactoonz',
      provider: "Play'n GO",
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWeJWGwWvm5Ii7X_3e-dYFRP72GgfKYs_D2VrqT1suA33JU8ORRJEHLdOqDfKKPphrXp-urw52gIxdWwD7k13IIDXI-d1iShXGm8hmuCYnVm2KKQqGXS4uT7_Amq02TEUettV5nL9NllkszI82qOCfD9EfuEdboZcTWtzszYo7XJlqqN8GakOgOy5CWvcC49IB79qxiqGV5fsI0TE82IqFnxtPfUUqV7iICvbGcdVE44-5UcCp2VNPA4YzkZNsBT5RBjgqSA5YcRE'
    }
  ]

  const categories = ['Tümü', 'Popüler', 'Yeni', 'Jackpot', 'Yüksek Volatilite', 'Megaways']

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#181611]">
      {/* TopNavBar */}
      <header className="sticky top-0 z-50 flex items-center justify-center border-b border-solid border-b-[#393528] bg-[#181611]/80 px-4 py-3 backdrop-blur-md sm:px-6 lg:px-8">
        <div className="flex w-full max-w-7xl items-center justify-between whitespace-nowrap">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 text-white">
              <div className="size-6 shrink-0">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
                </svg>
              </div>
              <Link href="/">
                <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">CasinoBet</h2>
              </Link>
            </div>
            <nav className="hidden items-center gap-9 lg:flex">
              <Link href="/sports" className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors">Spor Bahisleri</Link>
              <Link href="/live-casino" className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors">Canlı Casino</Link>
              <Link href="/slots" className="text-primary text-sm font-bold leading-normal">Slotlar</Link>
              <Link href="/promotions" className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors">Promosyonlar</Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end gap-2 sm:gap-4">
            <label className="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                <div className="text-[#b9b29d] flex bg-[#393528] items-center justify-center pl-3 rounded-l-xl">
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>search</span>
                </div>
                <input 
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#393528] focus:border-none h-full placeholder:text-[#b9b29d] pr-4 pl-2 text-sm font-normal leading-normal" 
                  placeholder="Oyun ara..." 
                  type="text"
                />
              </div>
            </label>
            <div className="hidden sm:flex gap-2">
              <Link href="/auth/login" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-primary text-[#181611] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-yellow-400 transition-colors">
                <span className="truncate">Giriş Yap</span>
              </Link>
              <Link href="/auth/register" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#393528] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-neutral-700 transition-colors">
                <span className="truncate">Kayıt Ol</span>
              </Link>
            </div>
            <button className="lg:hidden p-2 rounded-xl bg-[#393528]">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Heading */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
          <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Slot Oyunları</h1>
        </div>

        {/* Chips / Filters */}
        <div className="flex flex-col sm:flex-row gap-3 overflow-x-auto pb-4 mb-6 scrollbar-hide">
          <div className="relative w-full sm:w-auto">
            <select className="appearance-none cursor-pointer w-full sm:w-auto h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#393528] pl-4 pr-10 text-white text-sm font-medium leading-normal focus:outline-none focus:ring-2 focus:ring-primary">
              <option>Tüm Sağlayıcılar</option>
              <option>Pragmatic Play</option>
              <option>Hacksaw Gaming</option>
              <option>EGT</option>
              <option>NetEnt</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-white">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>expand_more</span>
            </div>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl px-4 ${
                  selectedCategory === category
                    ? 'bg-primary'
                    : 'bg-[#393528] hover:bg-neutral-700 transition-colors'
                }`}
              >
                <p className={`text-sm font-medium leading-normal ${
                  selectedCategory === category
                    ? 'text-[#181611] font-bold'
                    : 'text-white'
                }`}>
                  {category}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {games.map((game) => (
            <div key={game.id} className="group relative overflow-hidden rounded-xl aspect-[3/4] flex flex-col justify-end">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110" 
                style={{ backgroundImage: `url("${game.image}")` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="relative p-4 text-white z-10">
                <h3 className="text-base font-bold leading-tight">{game.name}</h3>
                <p className="text-xs text-neutral-400">{game.provider}</p>
              </div>
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="flex items-center justify-center gap-2 rounded-xl h-12 px-6 bg-primary text-[#181611] text-lg font-bold hover:bg-yellow-400 transition-colors">
                  <span className="material-symbols-outlined">play_arrow</span>
                  Oyna
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center p-4 mt-8">
          <button 
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className="flex size-10 items-center justify-center text-white/50 hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>chevron_left</span>
          </button>
          <button 
            onClick={() => setCurrentPage(1)}
            className={`text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center rounded-full ${
              currentPage === 1 ? 'text-[#181611] bg-primary' : 'text-white hover:bg-[#393528] transition-colors'
            }`}
          >
            1
          </button>
          <button 
            onClick={() => setCurrentPage(2)}
            className={`text-sm font-normal leading-normal flex size-10 items-center justify-center rounded-full ${
              currentPage === 2 ? 'text-[#181611] bg-primary' : 'text-white hover:bg-[#393528] transition-colors'
            }`}
          >
            2
          </button>
          <button 
            onClick={() => setCurrentPage(3)}
            className={`text-sm font-normal leading-normal flex size-10 items-center justify-center rounded-full ${
              currentPage === 3 ? 'text-[#181611] bg-primary' : 'text-white hover:bg-[#393528] transition-colors'
            }`}
          >
            3
          </button>
          <span className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-white rounded-full">...</span>
          <button 
            onClick={() => setCurrentPage(10)}
            className={`text-sm font-normal leading-normal flex size-10 items-center justify-center rounded-full ${
              currentPage === 10 ? 'text-[#181611] bg-primary' : 'text-white hover:bg-[#393528] transition-colors'
            }`}
          >
            10
          </button>
          <button 
            onClick={() => setCurrentPage(Math.min(10, currentPage + 1))}
            className="flex size-10 items-center justify-center text-white hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>chevron_right</span>
          </button>
        </div>
      </main>
    </div>
  )
}

