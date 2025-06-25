import React from 'react'

export default function Chat() {

  const handleSendMessage = (e) => {

  }

  return (
    <div className="flex h-screen bg-bla">
      {/* Contacts Sidebar */}
      <div className="w-1/4 border-r p-4 overflow-y-auto">
        {/* Contact list goes here */}
      </div>

      {/* Chat Window */}
      <div className="flex flex-col flex-1">
        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto">
          {/* Chat bubbles/messages go here */}
        </div>

        {/* Input Box */}
        <form onSubmit={handleSendMessage} className="flex p-4 border-t">
          <input
            type="text"
            placeholder="Type a message..."

            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 border rounded px-3 py-2 mr-2"
          />
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
            Send
          </button>
        </form>
      </div>
    </div>

  )
}
