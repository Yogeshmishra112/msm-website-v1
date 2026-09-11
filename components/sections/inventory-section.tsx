import { ArrowRight, Bell, Layers3, Package, Zap } from 'lucide-react'

import { SectionHeader } from '@/components/shared/section-header'

const inventoryItems = [
  {
    icon: Bell,
    tone: 'red',
    title: 'Near expiry',
    text: '12 batches need attention',
    value: '12',
    highlight: true,
  },
  {
    icon: Package,
    tone: 'amber',
    title: 'Low stock',
    text: '18 products below threshold',
    value: '18',
  },
  {
    icon: Zap,
    tone: 'blue',
    title: 'Fast moving',
    text: 'Paracetamol 500mg leads today',
    value: '+32%',
  },
  {
    icon: Layers3,
    tone: 'violet',
    title: 'Stock valuation',
    text: 'Current inventory at cost',
    value: '₹8.4L',
  },
]

export function InventorySection() {
  return (
    <section className="section-pad inventory-section">
      <div className="container inventory-layout">
        <div>
          <SectionHeader
            eyebrow="Inventory intelligence"
            title="Don't just track your stock. Understand it."
            text="MSM helps you make better inventory decisions before a product becomes a problem."
          />
          <a className="text-link" href="#pricing">
            Explore inventory tools <ArrowRight size={16} />
          </a>
        </div>
        <div className="inventory-board">
          {inventoryItems.map(({ icon: Icon, tone, title, text, value, highlight }) => (
            <div className={`inventory-item ${highlight ? 'highlight' : ''}`} key={title}>
              <span className={`inventory-icon ${tone}`}>
                <Icon size={17} />
              </span>
              <div>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
              <span className="inventory-value">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
