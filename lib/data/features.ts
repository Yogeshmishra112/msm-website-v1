import {
  BarChart3,
  Bell,
  CircleDollarSign,
  FileSpreadsheet,
  Package,
  ReceiptIndianRupee,
  Truck,
  Users,
  type LucideIcon,
} from 'lucide-react'

export type Feature = {
  icon: LucideIcon
  title: string
  text: string
}

export const features: Feature[] = [
  {
    icon: ReceiptIndianRupee,
    title: 'Smart Billing',
    text: 'GST-ready billing that stays fast at the counter, even during the rush.',
  },
  {
    icon: Package,
    title: 'Inventory Management',
    text: 'Know what is in stock, what is moving, and what needs attention.',
  },
  {
    icon: Truck,
    title: 'Purchase Management',
    text: 'Track orders, invoices, batches, and supplier dues in one place.',
  },
  {
    icon: Users,
    title: 'Supplier Management',
    text: 'Keep supplier details, credit terms, and purchase history organized.',
  },
  {
    icon: CircleDollarSign,
    title: 'Customer & Udhaar',
    text: 'Simple ledgers and reminders for every outstanding payment.',
  },
  {
    icon: BarChart3,
    title: 'Sales & Profit Analytics',
    text: 'Turn every bill into a clear view of how your store is performing.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Reports & Data Export',
    text: 'Export structured JSON, Excel, and CSV data for accounting workflows.',
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    text: 'Get timely alerts for low stock, expiry, payments, and more.',
  },
]
