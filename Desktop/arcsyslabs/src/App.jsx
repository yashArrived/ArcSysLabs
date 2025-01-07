import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import ChatList from './components/ChatList'
import ChatWindow from './components/ChatWindow'
import { chats as initialChats } from './data/chats'

export default function App() {
  const [chats, setChats] = useState(initialChats)
  const [activeChatId, setActiveChatId] = useState(null)
  const activeChat = chats.find(chat => chat.id === activeChatId)

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-black">
        <Header />
        <div className="flex-1 p-8">
          <div className="flex gap-6 h-[calc(100vh-140px)]">
            {/* Chat List Container */}
            <div className="w-[300px] min-w-[300px] bg-[#1C1C1C] rounded-lg overflow-hidden">
              <ChatList
                chats={chats}
                activeChat={activeChat}
                onChatSelect={(chat) => setActiveChatId(chat.id)}
              />
            </div>
            
            {/* Chat Window Container */}
            <div className="flex-1 bg-[#1C1C1C] rounded-lg overflow-hidden">
              <ChatWindow 
                chat={activeChat} 
                onSendMessage={(message) => {
                  const updatedChats = chats.map(chat => 
                    chat.id === activeChatId 
                      ? { ...chat, messages: [...chat.messages, message] }
                      : chat
                  )
                  setChats(updatedChats)
                }}
              />
            </div>
          </div>
        </div>
        <footer className="flex items-center justify-between px-6 py-4 bg-black">
          <div className="text-[#FFB6A9] font-bold">Logo</div>
          <div className="flex items-center space-x-4">
            <span className="text-yellow-400">CONTACTUS:7706071776</span>
            <a href="#" className="text-gray-300 hover:text-white">✈️</a>
            <a href="#" className="text-gray-300 hover:text-white">📷</a>
            <a href="#" className="text-gray-300 hover:text-white">✖️</a>
          </div>
        </footer>
      </div>
    </Router>
  )
}
