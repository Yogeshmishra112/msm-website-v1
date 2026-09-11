import { DashboardPreview } from '@/components/dashboard/dashboard-preview'
import { SectionHeader } from '@/components/shared/section-header'

export function AnalyticsSection() {
  return (
    <section id="analytics" className="section-pad analytics-section">
      <div className="container">
        <div className="analytics-head">
          <SectionHeader
            eyebrow="Clarity at a glance"
            title="Know what is happening in your business."
            text="From the first bill of the day to your month-end review, MSM keeps the important numbers visible."
          />
          <div className="analytics-tabs">
            <span className="active">Overview</span>
            <span>Sales</span>
            <span>Inventory</span>
          </div>
        </div>
        <DashboardPreview />
      </div>
    </section>
  )
}
