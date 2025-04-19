"use client"
import { useState, useRef, useEffect, FormEvent, KeyboardEvent, ChangeEvent } from 'react';
import { Send, FileText, Download, Copy, ArrowLeft, User, Bot, Sparkles } from 'lucide-react';

interface Message {
  role: 'user' | 'system';
  content: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'system',
      content: 'Welcome to ResumeAI! I\'ll help you create professional resume content. Start by telling me about your most recent job experience or what section you\'d like to work on.'
    }
  ]);
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input on component mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
  
    const userMessage = input;
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setIsLoading(true);
  
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userMessage }),
      });
  
      const data = await res.json();
  
      if (data.reply) {
        setMessages(prev => [...prev, { role: 'system', content: data.reply }]);
      } else {
        setMessages(prev => [...prev, { role: 'system', content: 'Oops! Something went wrong.' }]);
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'system', content: 'Failed to get a response from the AI.' }]);
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="hidden lg:flex w-64 flex-col bg-white border-r border-gray-200">
        <div className="flex items-center p-4 border-b">
          <FileText className="h-6 w-6 text-indigo-600" />
          <span className="ml-2 font-bold text-xl text-gray-800">ResumeAI</span>
        </div>
        <div className="p-4">
          <button className="w-full bg-indigo-600 text-white rounded-lg py-2 px-4 flex items-center justify-center hover:bg-indigo-700 transition">
            <Sparkles className="h-4 w-4 mr-2" />
            New Resume
          </button>
        </div>
        <div className="p-4 flex-1 overflow-y-auto">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Recent Sessions</h3>
          <div className="space-y-2">
            {['Marketing Resume', 'Software Engineer CV', 'Product Manager Resume'].map((title, index) => (
              <div 
                key={index}
                className="p-3 rounded-lg hover:bg-gray-100 cursor-pointer flex items-center text-gray-700"
              >
                <FileText className="h-4 w-4 mr-2 text-gray-500" />
                {title}
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 border-t">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
              <span className="font-medium text-indigo-700">JS</span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700">John Smith</p>
              <p className="text-xs text-gray-500">Premium Plan</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col h-full">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center">
            <button className="lg:hidden mr-4 text-gray-500 hover:text-gray-700">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <h1 className="font-medium text-lg text-black">Resume Builder Chat</h1>
          </div>
          <div className="flex space-x-3">
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
              <Copy className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
              <Download className="h-5 w-5" />
            </button>
          </div>
        </header>

        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`
                max-w-3xl rounded-2xl p-4 flex
                ${message.role === 'user' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-white border border-gray-200 text-gray-800 shadow-sm'}
              `}>
                <div className="flex-shrink-0 mr-4">
                  {message.role === 'user' ? (
                    <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                  ) : (
                    <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <Bot className="h-4 w-4 text-indigo-600" />
                    </div>
                  )}
                </div>
                <div className="whitespace-pre-wrap">{message.content}</div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 flex items-center max-w-3xl shadow-sm">
                <div className="flex-shrink-0 mr-4">
                  <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-indigo-600" />
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="h-2 w-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                  <div className="h-2 w-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="h-2 w-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <div className="bg-white border-t border-gray-200 p-4">
          <form onSubmit={handleSendMessage} className="relative">
            <div className="relative rounded-lg shadow-sm">
              <textarea
                ref={inputRef}
                className="block w-full rounded-lg border-0 py-4 pl-4 pr-14 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 resize-none"
                placeholder="Describe your experience or ask for help..."
                rows={3}
                value={input}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value)}
                onKeyDown={(e: KeyboardEvent<HTMLTextAreaElement>) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage(e);
                  }
                }}
              />
              <div className="absolute right-2 bottom-2 flex">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full p-2 text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 transition"
                  disabled={!input.trim() || isLoading}
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
            <p className="mt-2 text-xs text-gray-500">Press Enter to send, Shift+Enter to add a new line</p>
          </form>

          {/* Suggestion chips */}
          <div className="mt-4 flex flex-wrap gap-2">
            {["Work experience", "Education", "Skills", "Professional summary"].map((suggestion, index) => (
              <button
                key={index}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1.5 rounded-full text-sm transition"
                onClick={() => setInput(prev => prev ? prev + " " + suggestion : suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  );
}