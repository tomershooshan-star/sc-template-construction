import { useState, useEffect, useRef } from 'react';
import { siteConfig } from '../config';

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
}

type QuickReply = {
  label: string;
  response: string;
};

const QUICK_REPLIES: QuickReply[] = [
  {
    label: 'Request a Quote',
    response: "Great! We'd love to give you a free estimate. Please share your project details or call us at " + siteConfig.phone + " and our team will get back to you within 24 hours.",
  },
  {
    label: 'Our Services',
    response: 'We offer a full range of construction services including commercial & residential builds, renovations, project management, design-build, and concrete & foundation work. What type of project do you have in mind?',
  },
  {
    label: 'Talk to Someone',
    response: "Absolutely! You can reach us directly at " + siteConfig.phone + " or email " + siteConfig.email + ". We're available Monday–Friday, 7am–6pm.",
  },
];

const BOT_INITIAL = "Hi there! How can we help you today? Whether it's a new build, renovation, or a free estimate — we're here for you.";

function TypingIndicator() {
  return (
    <div className="flex items-end gap-3 mb-3">
      <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: siteConfig.colors.accent }}>
        <svg className="w-3.5 h-3.5" fill="none" stroke="#000" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </div>
      <div className="bg-white/5 border border-white/10 px-4 py-3 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '0ms' }} />
        <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '150ms' }} />
        <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  );
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [showTyping, setShowTyping] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(false);
  const [quickRepliesUsed, setQuickRepliesUsed] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isPulsing, setIsPulsing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Pulse the toggle button every 5 seconds when chat is closed
  useEffect(() => {
    if (open) return;
    const interval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, [open]);

  // When chat opens for the first time, show typing then initial message
  useEffect(() => {
    if (!open) return;
    if (messages.length > 0) return;

    setShowTyping(true);
    const t = setTimeout(() => {
      setShowTyping(false);
      setMessages([{ id: 1, text: BOT_INITIAL, sender: 'bot' }]);
      setShowQuickReplies(true);
    }, 1500);
    return () => clearTimeout(t);
  }, [open]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, showTyping]);

  function handleQuickReply(reply: QuickReply) {
    setQuickRepliesUsed(true);
    setShowQuickReplies(false);
    const userMsg: Message = { id: Date.now(), text: reply.label, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setShowTyping(true);
    setTimeout(() => {
      setShowTyping(false);
      setMessages(prev => [...prev, { id: Date.now() + 1, text: reply.response, sender: 'bot' }]);
    }, 1400);
  }

  function handleSend() {
    const text = inputValue.trim();
    if (!text) return;
    setInputValue('');
    setShowQuickReplies(false);
    setQuickRepliesUsed(true);
    setMessages(prev => [...prev, { id: Date.now(), text, sender: 'user' }]);
    setShowTyping(true);
    setTimeout(() => {
      setShowTyping(false);
      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          text: "Thanks for reaching out! Our team will follow up shortly. You can also call us at " + siteConfig.phone + " for immediate assistance.",
          sender: 'bot',
        },
      ]);
    }, 1400);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') handleSend();
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat panel */}
      <div
        className="mb-4 w-80 bg-[#111] border border-white/10 shadow-2xl overflow-hidden flex flex-col"
        style={{
          maxHeight: '480px',
          transformOrigin: 'bottom right',
          transform: open ? 'scale(1) translateY(0)' : 'scale(0.92) translateY(16px)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'transform 0.22s cubic-bezier(0.34,1.56,0.64,1), opacity 0.18s ease',
        }}
        aria-hidden={!open}
      >
        {/* Header */}
        <div className="px-4 py-3.5 border-b border-white/10 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="relative flex-shrink-0">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: siteConfig.colors.accent }}
              >
                <svg className="w-4 h-4" fill="none" stroke="#000" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              {/* Online dot */}
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-[#111]" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm leading-tight">{siteConfig.companyName}</p>
              <p className="text-green-400 text-[10px] font-medium">Online now</p>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-white/30 hover:text-white text-xl transition-colors leading-none"
            aria-label="Close chat"
          >
            &times;
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2" style={{ minHeight: '200px' }}>
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex items-end gap-2 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              {msg.sender === 'bot' && (
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: siteConfig.colors.accent }}
                >
                  <svg className="w-3 h-3" fill="none" stroke="#000" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
              )}
              <div
                className={`px-3.5 py-2.5 max-w-[78%] text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'text-black font-medium'
                    : 'bg-white/5 border border-white/10 text-white/70'
                }`}
                style={msg.sender === 'user' ? { background: siteConfig.colors.accent } : {}}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {showTyping && <TypingIndicator />}

          {/* Quick reply buttons */}
          {showQuickReplies && !quickRepliesUsed && (
            <div className="flex flex-wrap gap-2 mt-2">
              {QUICK_REPLIES.map(reply => (
                <button
                  key={reply.label}
                  onClick={() => handleQuickReply(reply)}
                  className="text-xs px-3 py-1.5 border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-colors"
                >
                  {reply.label}
                </button>
              ))}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="px-3 pb-3 flex-shrink-0 border-t border-white/10 pt-3">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              className="flex-1 bg-white/5 border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder:text-white/20 outline-none focus:border-white/20 transition-colors"
            />
            <button
              onClick={handleSend}
              className="px-4 py-2.5 text-sm font-semibold transition-colors flex-shrink-0"
              style={{ background: siteConfig.colors.accent, color: '#000' }}
              aria-label="Send message"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 relative"
        style={{ background: siteConfig.colors.accent }}
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        {/* Pulse ring */}
        {!open && isPulsing && (
          <span
            className="absolute inset-0 rounded-none animate-ping opacity-40"
            style={{ background: siteConfig.colors.accent }}
          />
        )}
        {open ? (
          <svg className="w-5 h-5 relative z-10" fill="none" stroke="#000" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5 relative z-10" fill="none" stroke="#000" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>
    </div>
  );
}
