import { useState } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const newMessages = [...messages, { text: userInput, sender: 'user' }];
    const botResponse = getBotResponse(userInput);
    newMessages.push({ text: botResponse, sender: 'bot' });

    setMessages(newMessages);
    setUserInput('');
  };

  const getBotResponse = (input) => {
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
      return 'Hello! How can I help you today?';
    }
    if (lowerInput.includes('email')) {
      return 'You can reach us at contact@example.com';
    }
    if (lowerInput.includes('phone')) {
      return 'You can call us at (555) 123-4567';
    }
    return 'Thank you for your message. A team member will get back to you soon!';
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[rgb(0,0,122)] hover:bg-[rgb(0,0,150)] text-white rounded-full p-4 shadow-lg transform transition-transform duration-200 hover:scale-110"
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[90vw] max-w-sm sm:max-w-md h-[80vh] sm:h-[500px] bg-white rounded-xl shadow-2xl flex flex-col transition-all duration-300 ease-in-out">
          {/* Header */}
          <div className="bg-[rgb(0,0,122)] text-white p-4 rounded-t-xl flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2" />
            <h3 className="font-bold text-lg">Contact Support</h3>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-4 min-h-0">
            {messages.length === 0 && (
              <div className="text-center text-gray-500">
                👋 Send a message to start the conversation!
              </div>
            )}
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <span
                  className={`inline-block p-3 rounded-2xl max-w-[80%] text-sm ${
                    message.sender === 'user'
                      ? 'bg-[rgb(0,0,122)] text-white'
                      : 'bg-white text-gray-800 shadow-md'
                  }`}
                >
                  {message.text}
                </span>
              </div>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-2 bg-white border-t border-gray-200 rounded-b-xl">
  <div className="flex gap-2">
    <input
      type="text"
      value={userInput}
      onChange={(e) => setUserInput(e.target.value)}
      placeholder="Type your message..."
      className="flex-1 p-3 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-[rgb(0,0,122)]"
    />
    <button
      type="submit"
      className="bg-[rgb(0,0,122)] text-white px-5 py-2.5 rounded-full text-sm hover:bg-[rgb(0,0,150)] transition-transform duration-200 hover:scale-105"
    >
      Send
    </button>
  </div>
</form>

        </div>
      )}
    </div>
  );
};

export default Chatbot;
