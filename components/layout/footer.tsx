import { Logo } from '@/components/layout/logo'

export function Footer() {
  return (
    <footer>
      <div className="container footer-top">
        <div>
          <Logo />
          <p className="footer-tagline">
            The intelligent operating system
            <br />
            for modern medical stores.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <strong>Product</strong>
            <a href="#features">Features</a>
            <a href="#assistant">AI Assistant</a>
            <a href="#analytics">Analytics</a>
            <a href="#pricing">Pricing</a>
          </div>
          <div>
            <strong>Company</strong>
            <a href="#top">About MSM</a>
            <a href="#top">Contact</a>
            <a href="#top">Help center</a>
            <a href="#top">Careers</a>
          </div>
          <div>
            <strong>Legal</strong>
            <a href="#top">Privacy policy</a>
            <a href="#top">Terms of use</a>
            <a href="#top">Security</a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 MSM Technologies. Built for Indian pharmacies.</span>
        <span>Made for better business.</span>
      </div>
    </footer>
  )
}
