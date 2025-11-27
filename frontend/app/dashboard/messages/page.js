'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'

export default function MessagesPage() {
  const { t } = useTranslation()
  const [selectedMessage, setSelectedMessage] = useState(null)
  const [filter, setFilter] = useState('all')

  const messages = [
    {
      id: 'MSG001',
      subject: 'Welcome to CasinoPlatform!',
      from: 'Support Team',
      date: '2023-11-27 10:30',
      type: 'welcome',
      read: false,
      priority: 'normal',
      content: `Dear Player,

Welcome to CasinoPlatform! We're excited to have you join our community of players.

Your account has been successfully created and verified. You can now:
- Make deposits and withdrawals
- Play our extensive collection of games
- Claim exciting bonuses and promotions
- Participate in tournaments

If you have any questions, our support team is available 24/7 via live chat or email.

Best regards,
CasinoPlatform Team`
    },
    {
      id: 'MSG002',
      subject: 'Bonus Credited to Your Account',
      from: 'Promotions Team',
      date: '2023-11-26 15:45',
      type: 'bonus',
      read: true,
      priority: 'normal',
      content: `Hello,

Great news! Your 100% Welcome Bonus has been credited to your account.

Bonus Details:
- Amount: ₺500.00
- Wagering Requirement: 30x
- Valid for: 30 days
- Eligible Games: Slots and Live Casino

Start playing now to make the most of your bonus!

Happy Gaming!`
    },
    {
      id: 'MSG003',
      subject: 'Security Alert: New Login Detected',
      from: 'Security Team',
      date: '2023-11-25 09:15',
      type: 'security',
      read: true,
      priority: 'high',
      content: `Security Alert,

We detected a new login to your account from:
- Device: Chrome on Windows
- Location: Istanbul, Turkey
- IP: 185.xxx.xxx.xxx
- Time: 2023-11-25 09:15

If this was you, no action is needed. If you don't recognize this activity, please contact our security team immediately.

Stay Safe!`
    },
    {
      id: 'MSG004',
      subject: 'Weekend Tournament Invitation',
      from: 'Tournament Team',
      date: '2023-11-24 14:20',
      type: 'tournament',
      read: false,
      priority: 'normal',
      content: `Tournament Invitation,

You're invited to participate in our Weekend Slot Tournament!

Tournament Details:
- Prize Pool: ₺10,000
- Entry Fee: Free
- Duration: Nov 25-26, 2023
- Qualifying Games: All Pragmatic Play slots

Register now and compete for amazing prizes!

Good Luck!`
    }
  ]

  const getTypeIcon = (type) => {
    switch(type) {
      case 'welcome': return 'waving_hand'
      case 'bonus': return 'card_giftcard'
      case 'security': return 'security'
      case 'tournament': return 'emoji_events'
      case 'support': return 'support_agent'
      default: return 'mail'
    }
  }

  const getTypeColor = (type) => {
    switch(type) {
      case 'welcome': return 'text-blue-500'
      case 'bonus': return 'text-green-500'
      case 'security': return 'text-red-500'
      case 'tournament': return 'text-yellow-500'
      case 'support': return 'text-purple-500'
      default: return 'text-gray-500'
    }
  }

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'bg-red-500'
      case 'medium': return 'bg-yellow-500'
      case 'low': return 'bg-green-500'
      default: return 'bg-gray-500'
    }
  }

  const filteredMessages = messages.filter(message => {
    if (filter === 'all') return true
    if (filter === 'unread') return !message.read
    if (filter === 'read') return message.read
    return message.type === filter
  })

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Header */}
      <header className="bg-white dark:bg-surface border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary">
                <span className="material-symbols-outlined">arrow_back</span>
                <span className="text-sm font-medium">Back to Dashboard</span>
              </Link>
            </div>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Messages</h1>
            <div className="w-32"></div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Message List */}
          <div className="lg:col-span-1">
            {/* Filters */}
            <div className="bg-white dark:bg-surface rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 mb-6">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="all">All Messages</option>
                <option value="unread">Unread</option>
                <option value="read">Read</option>
                <option value="welcome">Welcome</option>
                <option value="bonus">Bonuses</option>
                <option value="security">Security</option>
                <option value="tournament">Tournaments</option>
              </select>
            </div>

            {/* Messages */}
            <div className="space-y-2">
              {filteredMessages.map((message) => (
                <div
                  key={message.id}
                  onClick={() => setSelectedMessage(message)}
                  className={`bg-white dark:bg-surface rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-gray-700 ${
                    selectedMessage?.id === message.id ? 'ring-2 ring-primary' : ''
                  } ${!message.read ? 'border-l-4 border-l-primary' : ''}`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className={`material-symbols-outlined text-lg ${getTypeColor(message.type)}`}>
                        {getTypeIcon(message.type)}
                      </span>
                      {message.priority === 'high' && (
                        <div className={`w-2 h-2 rounded-full ${getPriorityColor(message.priority)}`}></div>
                      )}
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{message.date}</span>
                  </div>
                  
                  <h3 className={`text-sm font-medium mb-1 ${!message.read ? 'text-gray-900 dark:text-white font-semibold' : 'text-gray-700 dark:text-gray-300'}`}>
                    {message.subject}
                  </h3>
                  
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">From: {message.from}</p>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {message.content.substring(0, 100)}...
                  </p>
                  
                  {!message.read && (
                    <div className="flex items-center mt-2">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      <span className="text-xs text-primary font-medium">Unread</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Message Content */}
          <div className="lg:col-span-2">
            {selectedMessage ? (
              <div className="bg-white dark:bg-surface rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <span className={`material-symbols-outlined text-2xl ${getTypeColor(selectedMessage.type)}`}>
                      {getTypeIcon(selectedMessage.type)}
                    </span>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {selectedMessage.subject}
                      </h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        From: {selectedMessage.from} • {selectedMessage.date}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {selectedMessage.priority === 'high' && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-500/20 text-red-400">
                        High Priority
                      </span>
                    )}
                    {!selectedMessage.read && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/20 text-primary">
                        Unread
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="prose prose-sm max-w-none dark:prose-invert">
                  <div className="whitespace-pre-line text-gray-700 dark:text-gray-300">
                    {selectedMessage.content}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 hover:text-primary">
                      <span className="material-symbols-outlined text-lg">reply</span>
                      <span>Reply</span>
                    </button>
                    <button className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 hover:text-primary">
                      <span className="material-symbols-outlined text-lg">forward</span>
                      <span>Forward</span>
                    </button>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 hover:text-red-500">
                      <span className="material-symbols-outlined text-lg">delete</span>
                      <span>Delete</span>
                    </button>
                    {!selectedMessage.read && (
                      <button className="flex items-center space-x-2 text-sm text-primary hover:text-primary/80">
                        <span className="material-symbols-outlined text-lg">mark_email_read</span>
                        <span>Mark as Read</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white dark:bg-surface rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-12 text-center">
                <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-600 mb-4 block">mail</span>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No Message Selected</h3>
                <p className="text-gray-500 dark:text-gray-400">Select a message from the list to view its content.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
