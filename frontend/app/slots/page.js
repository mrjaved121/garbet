'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { useTranslation } from '@/hooks/useTranslation'

export default function SlotsPage() {
  const { t } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProvider, setSelectedProvider] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [jackpotAmount, setJackpotAmount] = useState(1018617.65)
  const [filteredGames, setFilteredGames] = useState([])

  // Live jackpot counter
  useEffect(() => {
    const interval = setInterval(() => {
      setJackpotAmount(prev => prev + Math.random() * 100)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const games = [
    // Pragmatic Play Games
    { id: 1, name: 'Gates of Olympus', provider: 'Pragmatic Play', category: 'popular', jackpot: true, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { id: 2, name: 'Sweet Bonanza', provider: 'Pragmatic Play', category: 'popular', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop' },
    { id: 3, name: 'Sugar Rush', provider: 'Pragmatic Play', category: 'new', image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=300&h=400&fit=crop' },
    { id: 4, name: 'Starlight Princess', provider: 'Pragmatic Play', category: 'popular', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop' },
    { id: 5, name: 'The Dog House', provider: 'Pragmatic Play', category: 'trending', image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=300&h=400&fit=crop' },
    { id: 6, name: 'Wolf Gold', provider: 'Pragmatic Play', category: 'jackpot', jackpot: true, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { id: 7, name: 'Great Rhino', provider: 'Pragmatic Play', category: 'popular', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop' },
    { id: 8, name: 'Mustang Gold', provider: 'Pragmatic Play', category: 'trending', image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=300&h=400&fit=crop' },
    { id: 9, name: 'Buffalo King', provider: 'Pragmatic Play', category: 'new', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop' },
    { id: 10, name: 'Chilli Heat', provider: 'Pragmatic Play', category: 'popular', image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=300&h=400&fit=crop' },
    
    // NetEnt Games
    { id: 11, name: 'Starburst', provider: 'NetEnt', category: 'popular', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { id: 12, name: 'Gonzo\'s Quest', provider: 'NetEnt', category: 'trending', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop' },
    { id: 13, name: 'Dead or Alive 2', provider: 'NetEnt', category: 'new', image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=300&h=400&fit=crop' },
    { id: 14, name: 'Mega Fortune', provider: 'NetEnt', category: 'jackpot', jackpot: true, image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop' },
    { id: 15, name: 'Divine Fortune', provider: 'NetEnt', category: 'popular', image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=300&h=400&fit=crop' },
    { id: 16, name: 'Twin Spin', provider: 'NetEnt', category: 'trending', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { id: 17, name: 'Jack and the Beanstalk', provider: 'NetEnt', category: 'popular', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop' },
    { id: 18, name: 'Bloodsuckers', provider: 'NetEnt', category: 'new', image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=300&h=400&fit=crop' },
    
    // Play'n GO Games
    { id: 19, name: 'Book of Dead', provider: "Play'n GO", category: 'popular', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop' },
    { id: 20, name: 'Reactoonz', provider: "Play'n GO", category: 'trending', image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=300&h=400&fit=crop' },
    { id: 21, name: 'Fire Joker', provider: "Play'n GO", category: 'popular', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { id: 22, name: 'Moon Princess', provider: "Play'n GO", category: 'new', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop' },
    { id: 23, name: 'Rich Wilde and the Book of Dead', provider: "Play'n GO", category: 'trending', image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=300&h=400&fit=crop' },
    { id: 24, name: 'Gemix', provider: "Play'n GO", category: 'popular', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop' },
    
    // Microgaming Games
    { id: 25, name: 'Mega Moolah', provider: 'Microgaming', category: 'jackpot', jackpot: true, image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=300&h=400&fit=crop' },
    { id: 26, name: 'Immortal Romance', provider: 'Microgaming', category: 'popular', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { id: 27, name: 'Thunderstruck II', provider: 'Microgaming', category: 'trending', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop' },
    { id: 28, name: 'Game of Thrones', provider: 'Microgaming', category: 'popular', image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=300&h=400&fit=crop' },
    { id: 29, name: 'Jurassic Park', provider: 'Microgaming', category: 'new', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop' },
    { id: 30, name: 'Break da Bank Again', provider: 'Microgaming', category: 'trending', image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=300&h=400&fit=crop' },
    
    // Big Time Gaming
    { id: 31, name: 'Bonanza', provider: 'Big Time Gaming', category: 'popular', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { id: 32, name: 'Extra Chilli', provider: 'Big Time Gaming', category: 'trending', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop' },
    { id: 33, name: 'White Rabbit', provider: 'Big Time Gaming', category: 'new', image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=300&h=400&fit=crop' },
    { id: 34, name: 'Danger High Voltage', provider: 'Big Time Gaming', category: 'popular', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop' },
    
    // Evolution Gaming
    { id: 35, name: 'Lightning Roulette', provider: 'Evolution', category: 'live', image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=300&h=400&fit=crop' },
    { id: 36, name: 'Crazy Time', provider: 'Evolution', category: 'live', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { id: 37, name: 'Dream Catcher', provider: 'Evolution', category: 'live', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop' },
    { id: 38, name: 'Monopoly Live', provider: 'Evolution', category: 'live', image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=300&h=400&fit=crop' },
    
    // More Popular Games (39-100)
    { id: 39, name: 'Aztec Gems', provider: 'Pragmatic Play', category: 'popular', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop' },
    { id: 40, name: 'Fruit Party', provider: 'Pragmatic Play', category: 'new', image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=300&h=400&fit=crop' },
    { id: 41, name: 'Madame Destiny', provider: 'Pragmatic Play', category: 'trending', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { id: 42, name: 'John Hunter', provider: 'Pragmatic Play', category: 'popular', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop' },
    { id: 43, name: 'Pirate Gold', provider: 'Pragmatic Play', category: 'new', image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=300&h=400&fit=crop' },
    { id: 44, name: 'Wild West Gold', provider: 'Pragmatic Play', category: 'trending', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop' },
    { id: 45, name: 'Jungle Gorilla', provider: 'Pragmatic Play', category: 'popular', image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=300&h=400&fit=crop' },
    { id: 46, name: 'Fire Strike', provider: 'Pragmatic Play', category: 'new', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { id: 47, name: 'Curse of the Werewolf', provider: 'Pragmatic Play', category: 'trending', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop' },
    { id: 48, name: 'Diamond Strike', provider: 'Pragmatic Play', category: 'popular', image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=300&h=400&fit=crop' },
    
    // NetEnt Extended
    { id: 49, name: 'Finn and the Swirly Spin', provider: 'NetEnt', category: 'new', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop' },
    { id: 50, name: 'Vikings', provider: 'NetEnt', category: 'trending', image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=300&h=400&fit=crop' },
    { id: 51, name: 'Planet of the Apes', provider: 'NetEnt', category: 'popular', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { id: 52, name: 'Narcos', provider: 'NetEnt', category: 'new', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop' },
    { id: 53, name: 'Hotline', provider: 'NetEnt', category: 'trending', image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=300&h=400&fit=crop' },
    { id: 54, name: 'Neon Staxx', provider: 'NetEnt', category: 'popular', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop' },
    { id: 55, name: 'Butterfly Staxx', provider: 'NetEnt', category: 'new', image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=300&h=400&fit=crop' },
    { id: 56, name: 'Emoji Planet', provider: 'NetEnt', category: 'trending', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { id: 57, name: 'Jungle Spirit', provider: 'NetEnt', category: 'popular', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop' },
    { id: 58, name: 'Scruffy Duck', provider: 'NetEnt', category: 'new', image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=300&h=400&fit=crop' },
    
    // Play'n GO Extended
    { id: 59, name: 'Legacy of Egypt', provider: "Play'n GO", category: 'trending', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop' },
    { id: 60, name: 'Viking Runecraft', provider: "Play'n GO", category: 'popular', image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=300&h=400&fit=crop' },
    { id: 61, name: 'Golden Colts', provider: "Play'n GO", category: 'new', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { id: 62, name: 'Rise of Olympus', provider: "Play'n GO", category: 'trending', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop' },
    { id: 63, name: 'Pimped', provider: "Play'n GO", category: 'popular', image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=300&h=400&fit=crop' },
    { id: 64, name: 'Wild North', provider: "Play'n GO", category: 'new', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop' },
    { id: 65, name: 'Coils of Cash', provider: "Play'n GO", category: 'trending', image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=300&h=400&fit=crop' },
    { id: 66, name: 'Disco Diamonds', provider: "Play'n GO", category: 'popular', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { id: 67, name: 'Honey Rush', provider: "Play'n GO", category: 'new', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop' },
    { id: 68, name: 'Crystal Sun', provider: "Play'n GO", category: 'trending', image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=300&h=400&fit=crop' },
    
    // Additional Providers and Games (69-100)
    { id: 69, name: 'Jammin Jars', provider: 'Push Gaming', category: 'popular', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop' },
    { id: 70, name: 'Fat Rabbit', provider: 'Push Gaming', category: 'new', image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=300&h=400&fit=crop' },
    { id: 71, name: 'Razor Shark', provider: 'Push Gaming', category: 'trending', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { id: 72, name: 'Mystery Museum', provider: 'Push Gaming', category: 'popular', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop' },
    { id: 73, name: 'Wild Swarm', provider: 'Push Gaming', category: 'new', image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=300&h=400&fit=crop' },
    { id: 74, name: 'The Shadow Order', provider: 'Push Gaming', category: 'trending', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop' },
    { id: 75, name: 'Blaze of Ra', provider: 'Push Gaming', category: 'popular', image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=300&h=400&fit=crop' },
    
    // Yggdrasil Games
    { id: 76, name: 'Valley of the Gods', provider: 'Yggdrasil', category: 'new', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { id: 77, name: 'Vikings go Berzerk', provider: 'Yggdrasil', category: 'trending', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop' },
    { id: 78, name: 'Holmes and the Stolen Stones', provider: 'Yggdrasil', category: 'popular', image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=300&h=400&fit=crop' },
    { id: 79, name: 'Ozwin\'s Jackpots', provider: 'Yggdrasil', category: 'jackpot', jackpot: true, image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop' },
    { id: 80, name: 'Jungle Books', provider: 'Yggdrasil', category: 'new', image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=300&h=400&fit=crop' },
    
    // Quickspin Games
    { id: 81, name: 'Big Bad Wolf', provider: 'Quickspin', category: 'trending', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { id: 82, name: 'Sakura Fortune', provider: 'Quickspin', category: 'popular', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop' },
    { id: 83, name: 'Eastern Emeralds', provider: 'Quickspin', category: 'new', image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=300&h=400&fit=crop' },
    { id: 84, name: 'Sticky Bandits', provider: 'Quickspin', category: 'trending', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop' },
    { id: 85, name: 'Phoenix Sun', provider: 'Quickspin', category: 'popular', image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=300&h=400&fit=crop' },
    
    // Red Tiger Games
    { id: 86, name: 'Pirates Plenty', provider: 'Red Tiger', category: 'new', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { id: 87, name: 'Dragon\'s Luck', provider: 'Red Tiger', category: 'trending', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop' },
    { id: 88, name: 'Mystery Reels', provider: 'Red Tiger', category: 'popular', image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=300&h=400&fit=crop' },
    { id: 89, name: 'Primate King', provider: 'Red Tiger', category: 'new', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop' },
    { id: 90, name: 'Vault of Anubis', provider: 'Red Tiger', category: 'trending', image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=300&h=400&fit=crop' },
    
    // Hacksaw Gaming
    { id: 91, name: 'Chaos Crew', provider: 'Hacksaw Gaming', category: 'popular', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { id: 92, name: 'Wanted Dead or a Wild', provider: 'Hacksaw Gaming', category: 'new', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop' },
    { id: 93, name: 'Pocketa Reels', provider: 'Hacksaw Gaming', category: 'trending', image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=300&h=400&fit=crop' },
    { id: 94, name: 'Stack Em', provider: 'Hacksaw Gaming', category: 'popular', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop' },
    { id: 95, name: 'Cubes', provider: 'Hacksaw Gaming', category: 'new', image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=300&h=400&fit=crop' },
    
    // Final Games
    { id: 96, name: 'Money Train 2', provider: 'Relax Gaming', category: 'trending', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { id: 97, name: 'Temple Tumble', provider: 'Relax Gaming', category: 'popular', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop' },
    { id: 98, name: 'Snake Arena', provider: 'Relax Gaming', category: 'new', image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=300&h=400&fit=crop' },
    { id: 99, name: 'Hellcatraz', provider: 'Relax Gaming', category: 'trending', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop' },
    { id: 100, name: 'Iron Bank', provider: 'Relax Gaming', category: 'popular', image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=300&h=400&fit=crop' }
  ]

  const providers = ['all', 'Pragmatic Play', 'NetEnt', "Play'n GO", 'Microgaming', 'Big Time Gaming', 'Evolution', 'Push Gaming', 'Yggdrasil', 'Quickspin', 'Red Tiger', 'Hacksaw Gaming', 'Relax Gaming']
  const categories = ['all', 'popular', 'new', 'trending', 'jackpot', 'live']
  
  const tournaments = [
    { id: 1, name: 'Daily Drops & Wins', prize: '₺50,000', participants: 1247, timeLeft: '2h 15m' },
    { id: 2, name: 'Mega Tournament', prize: '₺100,000', participants: 2891, timeLeft: '1d 5h' },
    { id: 3, name: 'Weekend Warriors', prize: '₺25,000', participants: 856, timeLeft: '4h 32m' },
    { id: 4, name: 'Jackpot Race', prize: '₺75,000', participants: 1654, timeLeft: '6h 18m' }
  ]

  // Filter games based on search, category, and provider
  useEffect(() => {
    let filtered = games

    if (searchQuery) {
      filtered = filtered.filter(game => 
        game.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.provider.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(game => game.category === selectedCategory)
    }

    if (selectedProvider !== 'all') {
      filtered = filtered.filter(game => game.provider === selectedProvider)
    }

    setFilteredGames(filtered)
  }, [searchQuery, selectedCategory, selectedProvider, games])

  const gamesPerPage = 24
  const totalPages = Math.ceil(filteredGames.length / gamesPerPage)
  const startIndex = (currentPage - 1) * gamesPerPage
  const displayedGames = filteredGames.slice(startIndex, startIndex + gamesPerPage)

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#181611]">
      <Navbar />

      <div className="flex w-full max-w-screen-2xl mx-auto">
        {/* Left Sidebar - Tournaments */}
        <aside className="hidden lg:block w-80 p-4">
          <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-xl p-6 mb-6">
            <div className="text-center text-white">
              <h3 className="text-lg font-bold mb-2">DAILY JACKPOT</h3>
              <div className="text-3xl font-black mb-2">₺{jackpotAmount.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}</div>
              <p className="text-sm opacity-90">Must be won today!</p>
            </div>
          </div>

          <div className="bg-[#2a2a2a] rounded-xl p-4">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-yellow-500">emoji_events</span>
              TOURNAMENTS
            </h3>
            <div className="space-y-3">
              {tournaments.map((tournament) => (
                <div key={tournament.id} className="bg-[#1a1a1a] rounded-lg p-3 border border-gray-700">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-white text-sm font-semibold">{tournament.name}</h4>
                    <span className="text-xs text-gray-400">{tournament.timeLeft}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-yellow-500 font-bold text-sm">{tournament.prize}</span>
                    <span className="text-gray-400 text-xs">{tournament.participants} players</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4">
          {/* Promotional Banner */}
          <div className="mb-6">
            <div 
              className="relative flex min-h-[200px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-center p-8 text-left overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(139, 69, 19, 0.9) 0%, rgba(139, 69, 19, 0.3) 100%), url("https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=1200&h=400&fit=crop")`
              }}
            >
              <div className="absolute top-4 right-4">
                <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=150&fit=crop" alt="Bounty Hunter" className="w-24 h-24 rounded-lg" />
              </div>
              <div className="flex flex-col gap-4 max-w-lg z-10">
                <h1 className="text-white text-3xl font-black leading-tight">BOUNTY HUNTER</h1>
                <h2 className="text-yellow-400 text-2xl font-bold">10000X'E VARAN</h2>
                <h3 className="text-white text-xl font-semibold">KAZANÇ SİZİ BEKLİYOR!</h3>
                <button className="flex min-w-[120px] w-fit cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-black text-sm font-bold leading-normal tracking-[0.015em] hover:bg-yellow-400 transition-all">
                  <span className="truncate">ŞİMDİ OYNA</span>
                </button>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="mb-6 space-y-4">
            {/* Search Bar */}
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">search</span>
                <input
                  type="text"
                  placeholder={t('slots.searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-12 pl-10 pr-4 bg-[#2a2a2a] text-white rounded-lg border border-gray-600 focus:border-primary focus:outline-none"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-black'
                      : 'bg-[#2a2a2a] text-white hover:bg-[#3a3a3a]'
                  }`}
                >
                  {category.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Provider Filters */}
            <div className="flex flex-wrap gap-2">
              {providers.map((provider) => (
                <button
                  key={provider}
                  onClick={() => setSelectedProvider(provider)}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                    selectedProvider === provider
                      ? 'bg-blue-600 text-white'
                      : 'bg-[#1a1a1a] text-gray-300 hover:bg-[#2a2a2a]'
                  }`}
                >
                  {provider === 'all' ? 'ALL PROVIDERS' : provider}
                </button>
              ))}
            </div>
          </div>

          {/* Games Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            {displayedGames.map((game) => (
              <div key={game.id} className="group relative bg-[#2a2a2a] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-200 cursor-pointer">
                <div className="relative">
                  <img 
                    src={game.image} 
                    alt={game.name}
                    className="w-full h-32 sm:h-40 object-cover"
                  />
                  {game.jackpot && (
                    <div className="absolute top-2 left-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
                      JACKPOT
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center">
                    <button className="opacity-0 group-hover:opacity-100 bg-primary text-black px-4 py-2 rounded-lg font-bold text-sm transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                      PLAY
                    </button>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-white text-sm font-semibold truncate">{game.name}</h3>
                  <p className="text-gray-400 text-xs truncate">{game.provider}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#2a2a2a] text-white hover:bg-[#3a3a3a] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const page = i + 1
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-lg text-sm font-medium ${
                      currentPage === page
                        ? 'bg-primary text-black'
                        : 'bg-[#2a2a2a] text-white hover:bg-[#3a3a3a]'
                    }`}
                  >
                    {page}
                  </button>
                )
              })}
              
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#2a2a2a] text-white hover:bg-[#3a3a3a] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}