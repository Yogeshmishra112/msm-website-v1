import {
  ArrowRight,
  BarChart3,
  Bell,
  ChevronDown,
  FileSpreadsheet,
  Package,
  Pill,
  ReceiptIndianRupee,
  Search,
  ShieldCheck,
  Sparkles,
  Truck,
  Users,
} from 'lucide-react'

import { dashboardNav, metrics } from '@/lib/data/content'

const sideIcons = [BarChart3, ReceiptIndianRupee, Package, Truck, Users, FileSpreadsheet]

export function DashboardPreview() {
  return (
    <div className="dashboard-window shadow-2xl">
      <div className="dashboard-top">
        <div className="flex items-center gap-2">
          <span className="window-dot bg-red-400" />
          <span className="window-dot bg-amber-400" />
          <span className="window-dot bg-emerald-400" />
        </div>
        <div className="dashboard-search">
          <Search size={13} /> Search anything
        </div>
        <span className="avatar">RK</span>
      </div>
      <div className="dashboard-body">
        <aside className="dashboard-side">
          <div className="side-brand">
            <span className="logo-mark small">
              <Pill size={14} />
            </span>{' '}
            MSM
          </div>
          {dashboardNav.map((item, i) => {
            const Icon = sideIcons[i]
            return (
              <div className={`side-item ${i === 0 ? 'active' : ''}`} key={item}>
                <span className="side-icon">
                  <Icon size={14} />
                </span>
                {item}
              </div>
            )
          })}
          <div className="side-bottom">
            <ShieldCheck size={14} /> Protected
          </div>
        </aside>
        <div className="dashboard-content">
          <div className="flex items-start justify-between">
            <div>
              <p className="eyebrow">Tuesday, 10 September 2026</p>
              <h3 className="dash-title">Good morning, Rajesh</h3>
            </div>
            <button className="icon-button" type="button" aria-label="Notifications">
              <Bell size={16} />
            </button>
          </div>
          <div className="metric-grid">
            {metrics.map(({ value, label, change, color }) => (
              <div className="metric-card" key={label}>
                <div className={`metric-icon ${color}`}>
                  <BarChart3 size={15} />
                </div>
                <p>{label}</p>
                <strong>{value}</strong>
                <span className={change.startsWith('-') ? 'negative' : 'positive'}>{change}</span>
              </div>
            ))}
          </div>
          <div className="dashboard-columns">
            <div className="chart-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="card-label">Sales overview</p>
                  <strong className="card-number">₹2,48,560</strong>
                </div>
                <span className="chart-pill">
                  Last 6 months <ChevronDown size={12} />
                </span>
              </div>
              <div className="chart-area">
                <div className="chart-y">
                  <span>₹2.5L</span>
                  <span>₹1.5L</span>
                  <span>₹50K</span>
                  <span>₹0</span>
                </div>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="sales-chart">
                  <defs>
                    <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0" stopColor="var(--primary)" stopOpacity=".22" />
                      <stop offset="1" stopColor="var(--primary)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,125 C35,110 55,118 85,90 S135,100 170,78 S220,88 250,62 S300,72 330,43 S380,64 415,35 S455,49 500,18 L500,150 L0,150Z"
                    fill="url(#area)"
                  />
                  <path
                    d="M0,125 C35,110 55,118 85,90 S135,100 170,78 S220,88 250,62 S300,72 330,43 S380,64 415,35 S455,49 500,18"
                    fill="none"
                    stroke="var(--primary)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="chart-x">
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
              </div>
            </div>
            <div className="mini-card">
              <div className="flex items-center justify-between mb-3">
                <p className="card-label">AI insights</p>
                <Sparkles size={16} className="text-primary" />
              </div>
              <div className="insight">
                <span className="insight-dot green-dot" />
                <div>
                  <strong>Great momentum</strong>
                  <p>Sales are up 18.4% from last month.</p>
                </div>
              </div>
              <div className="insight">
                <span className="insight-dot amber-dot" />
                <div>
                  <strong>Action needed</strong>
                  <p>12 batches expire in the next 30 days.</p>
                </div>
              </div>
              <button className="mini-link" type="button">
                View all insights <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
