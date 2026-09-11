export type PricingPlan = {
  name: string
  description: string
  price: string
  perks: string[]
  popular?: boolean
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    description: 'For getting your first store organized',
    price: '₹499',
    perks: ['Smart billing', 'Basic inventory', 'Customer ledgers', 'Monthly reports'],
  },
  {
    name: 'Professional',
    description: 'For growing pharmacies that want clarity',
    price: '₹999',
    popular: true,
    perks: [
      'Everything in Starter',
      'AI Assistant',
      'Advanced analytics',
      'Expiry & stock alerts',
      'Data exports',
    ],
  },
  {
    name: 'Business',
    description: 'For teams and multi-store operators',
    price: 'Custom',
    perks: [
      'Everything in Professional',
      'Multi-store dashboard',
      'Priority support',
      'Custom workflows',
    ],
  },
]
