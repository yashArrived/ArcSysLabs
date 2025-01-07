import { useState, useRef, useEffect } from 'react'
import { ArrowLeft, Trash2, Send } from 'lucide-react'

export default function ChatWindow({ chat, onBack, onSendMessage }) {
  const [newMessage, setNewMessage] = useState('')
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [chat?.messages])

  if (!chat) {
    return (
      <div className="h-full flex items-center justify-center bg-[#1C1C1C] text-gray-500">
        Select a chat to start messaging
      </div>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newMessage.trim()) return
    const newMsg = {
      id: Date.now(),
      content: newMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      read: false
    }
    onSendMessage?.(newMsg)
    setNewMessage('')
  }

  return (
    <div className="h-full flex flex-col bg-[#1C1C1C]">
      {/* Chat Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <button 
            onClick={onBack}
            className="md:hidden text-gray-300 hover:text-white p-1"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <img src={chat.avatar} alt="" className="w-8 h-8 rounded-full" />
          <span className="text-white font-medium text-sm">{chat.name}</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-gray-300 hover:text-white">
            <div className='flex justify-center items-center'>
            <ArrowLeft className="w-5 h-5 mt-1 mr-2  hover:text-gray-900 bg-white text-black rounded-full text-sm " />
            <p>Back</p>
            </div>
            
          </button>
          <button className="text-gray-300 hover:text-white">
            <div className='flex justify-center items-center'>

            <Trash2 className="w-5 h-5 mr-1" />
            <p>Delete</p>
            </div>
          
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col gap-6 p-6">
          {chat.messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} items-end gap-2`}
            >
              {message.sender === 'bot' && (
                <img 
                  src={chat.avatar} 
                  alt="" 
                  className="w-8 h-8 rounded-full"
                />
              )}
              <div 
                className={`
                  max-w-[70%] px-4 py-2
                  ${message.sender === 'user' 
                    ? 'bg-[#FFB6A9] text-black rounded-[20px] rounded-br-[4px]' 
                    : 'bg-[#2C2C2C] text-white rounded-[20px] rounded-bl-[4px]'
                  }
                `}
              >
                <p className="break-words text-sm">{message.content}</p>
                <div className="flex items-center gap-1 mt-1">
                  <span className={`text-xs ${message.sender === 'user' ? 'text-gray-700' : 'text-gray-400'}`}>
                    {message.timestamp}
                  </span>
                  {message.sender === 'user' && message.read && (
                    <span className="text-xs text-gray-700">✓</span>
                  )}
                </div>
              </div>
              {message.sender === 'user' && (
                <img 
                  src="https://devlopr.netlify.app/assets/img/profile.png" 
                  alt="" 
                  className="w-8 h-8 rounded-full"
                />
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Message Input */}
      <div className="px-4 py-3">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Message"
            className="flex-1 bg-[#2C2C2C] text-white rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FFB6A9] placeholder-gray-500"
          />
          <button
            type="submit"
            disabled={!newMessage.trim()}
            className="bg-[#FFB6A9] text-black rounded-full p-2 hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:hover:bg-opacity-100"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  )
}
