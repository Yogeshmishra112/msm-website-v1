export const aiQuestions = [
  'Which medicines expire in the next 30 days?',
  'How much did I sell this month?',
  'Who has pending payments?',
]

export const problemItems = [
  'Manual stock counts and surprise stockouts',
  'Expired medicines hiding in the back of the shelf',
  'Slow billing when the counter gets busy',
  'Udhaar and supplier payments slipping through',
  'Reports that take hours to put together',
  'No clear picture of what is driving profit',
]

export const steps = [
  {
    title: 'Add your pharmacy',
    text: 'Set up your store details in minutes.',
  },
  {
    title: 'Add products & suppliers',
    text: 'Import your catalogue or add as you go.',
  },
  {
    title: 'Start billing',
    text: 'Fast, GST-ready billing at the counter.',
  },
  {
    title: 'Inventory updates automatically',
    text: 'Every sale keeps stock accurate.',
  },
  {
    title: 'AI analyzes your business',
    text: 'Ask questions and get useful answers.',
  },
  {
    title: 'Generate reports',
    text: 'Stay ready for every business review.',
  },
]

export const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#assistant', label: 'AI Assistant' },
  { href: '#analytics', label: 'Analytics' },
  { href: '#reports', label: 'Reports' },
  { href: '#pricing', label: 'Pricing' },
]

export const dashboardNav = [
  'Overview',
  'Billing',
  'Inventory',
  'Purchases',
  'Customers',
  'Reports',
] as const

export const metrics = [
  { value: '₹2,48,560', label: 'Total sales', change: '+18.4%', color: 'blue' as const },
  { value: '₹38,420', label: 'Estimated profit', change: '+12.8%', color: 'violet' as const },
  { value: '1,284', label: 'Bills this month', change: '+9.2%', color: 'green' as const },
  { value: '₹12,800', label: 'Outstanding', change: '-6.4%', color: 'amber' as const },
]
