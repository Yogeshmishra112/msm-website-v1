'use client'

import { ArrowRight, Sparkles } from 'lucide-react'
import { useState } from 'react'

import { aiQuestions } from '@/lib/data/content'

export function AiChat() {
  const [selected, setSelected] = useState(aiQuestions[0])
  const isExpiry = selected.startsWith('Which')

  return (
    <div className="ai-chat-window">
      <div className="chat-head">
        <div className="ai-avatar">
          <Sparkles size={19} />
        </div>
        <div>
          <strong>MSM Assistant</strong>
          <p>Always here to help</p>
        </div>
        <span className="online-dot" />
      </div>
      <div className="chat-body">
        <div className="bubble user-bubble">{selected}</div>
        <div className="bubble ai-bubble">
          <div className="flex items-center gap-2 mb-2">
            <span className="mini-ai">
              <Sparkles size={12} />
            </span>
            <strong>MSM Assistant</strong>
          </div>
          {isExpiry ? (
            <>
              <p>
                Here&apos;s the list for the next <strong>30 days</strong>:
              </p>
              <div className="response-grid">
                <div>
                  <span>Near-expiry batches</span>
                  <strong>12</strong>
                </div>
                <div>
                  <span>Priority</span>
                  <strong className="text-amber-500">Review now</strong>
                </div>
              </div>
              <p className="mt-3">
                I found 12 batches, including <strong>Azithromycin 500mg</strong> and{' '}
                <strong>Insulin Glargine</strong>. Want me to make a purchase or discount list?
              </p>
            </>
          ) : (
            <>
              <p>
                Here&apos;s your update for <strong>September 2026</strong>:
              </p>
              <div className="response-grid">
                <div>
                  <span>Total sales</span>
                  <strong>₹2,48,560</strong>
                </div>
                <div>
                  <span>vs. last month</span>
                  <strong className="text-emerald-500">+18.4%</strong>
                </div>
              </div>
              <p className="mt-3">
                Your sales are trending well. The strongest category is{' '}
                <strong>Cardiovascular</strong>, up 24% this month.
              </p>
            </>
          )}
        </div>
        <div className="typing">
          <span />
          <span />
          <span /> MSM is thinking
        </div>
      </div>
      <div className="suggestions">
        {aiQuestions.map((q) => (
          <button key={q} type="button" onClick={() => setSelected(q)}>
            {q}
          </button>
        ))}
      </div>
      <div className="chat-input">
        Ask anything about your store... <ArrowRight size={16} />
      </div>
    </div>
  )
}
