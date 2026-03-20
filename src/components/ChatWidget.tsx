import { useState } from 'react';
import { siteConfig } from '../config';

export function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat panel */}
      {open && (
        <div className="mb-4 w-80 bg-[#111] border border-white/10 shadow-2xl overflow-hidden animate-in">
          <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
            <div>
              <p className="text-white font-semibold text-sm">{siteConfig.companyName}</p>
              <p className="text-white/30 text-xs mt-0.5">Typically replies within minutes</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/30 hover:text-white text-lg transition-colors"
              aria-label="Close chat"
            >
              &times;
            </button>
          </div>
          <div className="p-5 min-h-[200px] flex flex-col justify-end">
            <div className="bg-white/5 border border-white/10 px-4 py-3 max-w-[85%]">
              <p className="text-white/60 text-sm">
                Hi! How can we help you today? Ask us anything about our services.
              </p>
            </div>
          </div>
          <div className="px-4 pb-4">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/20 outline-none focus:border-white/20 transition-colors"
              />
              <button
                className="px-4 py-2.5 text-sm font-semibold transition-colors"
                style={{ background: siteConfig.colors.accent, color: '#000' }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105"
        style={{ background: siteConfig.colors.accent }}
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        {open ? (
          <svg className="w-5 h-5" fill="none" stroke="#000" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="#000" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>
    </div>
  );
}
