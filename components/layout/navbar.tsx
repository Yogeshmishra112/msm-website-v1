'use client'

import { ArrowRight, Menu, Moon, Sun, X } from 'lucide-react'

import { Logo } from '@/components/layout/logo'
import { navLinks } from '@/lib/data/content'

type NavbarProps = {
  dark: boolean
  menuOpen: boolean
  onToggleDark: () => void
  onToggleMenu: () => void
  onCloseMenu: () => void
}

export function Navbar({
  dark,
  menuOpen,
  onToggleDark,
  onToggleMenu,
  onCloseMenu,
}: NavbarProps) {
  return (
    <nav className="nav-shell">
      <div className="container nav-inner">
        <Logo />
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={onCloseMenu}>
              {link.label}
            </a>
          ))}
          <div className="mobile-actions">
            <a className="button primary" href="#pricing">
              Get started <ArrowRight size={16} />
            </a>
          </div>
        </div>
        <div className="nav-actions">
          <button className="theme-toggle" onClick={onToggleDark} aria-label="Toggle theme">
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a className="button primary nav-cta" href="#pricing">
            Get started <ArrowRight size={16} />
          </a>
          <button className="menu-toggle" onClick={onToggleMenu} aria-label="Toggle menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </nav>
  )
}
