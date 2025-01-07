import { useState } from 'react'

export default function ChatList({ chats, activeChat, onChatSelect }) {
  const [chatImagesEnabled, setChatImagesEnabled] = useState(true)

  return (
    <div className="h-full flex flex-col bg-[#1C1C1C] p-4">
      <h2 className="text-gray-300 font-semibold mb-4">ALL YOUR CHATS</h2>
      
      <div className="bg-[#FFB6A9] rounded-md p-3 mb-4">
        <label className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span>💬</span>
            <span className="text-black font-medium">Chat Images: {chatImagesEnabled ? 'ON' : 'OFF'}</span>
          </div>
          <div 
            onClick={() => setChatImagesEnabled(!chatImagesEnabled)}
            className={`w-12 h-6 rounded-full p-1 cursor-pointer ${
              chatImagesEnabled ? 'bg-black' : 'bg-gray-700'
            }`}
          >
            <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
              chatImagesEnabled ? 'translate-x-6' : ''
            }`} />
          </div>
        </label>
      </div>

      <p className="text-gray-500 text-sm mb-4">
        When a bot sends you images, you will be charged one secondary image
      </p>

      <div className="flex-1 overflow-y-auto space-y-2">
        {chats.map((chat) => (
          <button
            key={chat.id}
            onClick={() => onChatSelect(chat)}
            className={`w-full flex items-center p-3 rounded-lg hover:bg-[#2C2C2C] ${
              activeChat?.id === chat.id ? 'bg-[#2C2C2C]' : ''
            }`}
          >
            <img
              src={chat.avatar}
              alt=""
              className="w-10 h-10 rounded-full mr-3"
            />
            <div className="text-left">
              <div className="text-gray-300 font-medium">{chat.name}</div>
              <div className="text-gray-500 text-sm truncate">{chat.lastMessage}</div>
            </div>
          </button>
        ))}
      </div>

      <button className="mt-4 flex items-center gap-2 p-3 hover:bg-[#2C2C2C] rounded-lg w-full">
        <span className="text-[#FFB6A9] ">➕</span>
        <span className="text-gray-300">Create new bot</span>
      </button>
    </div>
  )
}

