import { useState } from 'react'
import { useNavigation } from '../NavigationContext.jsx'
import './Nav.css'

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'products', label: 'Products' }
]

const ArrowIcon = ({ size = 13 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.4"
    strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
)

const BurgerIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="5" y1="5" x2="19" y2="19" />
    <line x1="19" y1="5" x2="5" y2="19" />
  </svg>
)

export default function Nav() {
  const { page, goTo } = useNavigation()
  const [mobileOpen, setMobileOpen] = useState(false)

  function handleGo(id) {
    setMobileOpen(false)
    goTo(id)
  }

  return (
    <nav className="nav">
      <div className="shell nav-row">
        <a href="#" onClick={(e) => { e.preventDefault(); handleGo('home') }}>
          <img src="/img/DPL-Star-Logo.png" className="colorLogo" width="100px" height="50px" alt="DPL Star" />
        </a>
        <div className="nav-links">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href="#"
              className={`nav-a${page === l.id ? ' on' : ''}`}
              onClick={(e) => { e.preventDefault(); handleGo(l.id) }}
            >
              {l.label}
            </a>
          ))}
          <button className="btn btn-p nav-cta" onClick={() => handleGo('contact')}>
            Get a quote <ArrowIcon />
          </button>
        </div>
        <button className="nav-burger" id="burger" aria-label="Menu" onClick={() => setMobileOpen((o) => !o)}>
          {mobileOpen ? <CloseIcon /> : <BurgerIcon />}
        </button>
      </div>
      <div id="mob-nav" className={mobileOpen ? 'open' : ''}>
        <a href="#" onClick={(e) => { e.preventDefault(); handleGo('home') }}>Home</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleGo('about') }}>About</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleGo('products') }}>Products</a>
        <button onClick={() => handleGo('contact')}>Get a quote</button>
      </div>
    </nav>
  )
}
