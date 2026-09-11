import { Download, FileSpreadsheet } from 'lucide-react'

import { SectionHeader } from '@/components/shared/section-header'

export function ReportsSection() {
  return (
    <section id="reports" className="section-pad reports-section">
      <div className="container reports-layout">
        <div className="report-card">
          <div className="report-top">
            <span className="file-icon">
              <FileSpreadsheet size={19} />
            </span>
            <div>
              <strong>Monthly business report</strong>
              <p>September 2026 · MSM export</p>
            </div>
            <Download size={18} className="text-muted-foreground" />
          </div>
          <div className="report-lines">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="report-total">
            <span>Net profit this month</span>
            <strong>₹38,420</strong>
          </div>
          <div className="export-row">
            <span>Available formats</span>
            <span className="format">JSON</span>
            <span className="format">XLSX</span>
            <span className="format">CSV</span>
          </div>
        </div>
        <SectionHeader
          eyebrow="Reports that make sense"
          title="Your data, ready for decisions."
          text="Organize sales, purchases, expenses, and tax data into reports you can actually use. Export structured files for your accountant or your next review."
        />
      </div>
    </section>
  )
}
