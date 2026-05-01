import { useState } from 'react'

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#why-us', label: 'Why Us' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="logo-link">
          <img src="/logo.png" alt="Business Growth & Technology Consultants" className="logo-img" />
        </a>
        <ul className="nav-links">
          {links.map(link => (
            <li key={link.href}><a href={link.href}>{link.label}</a></li>
          ))}
        </ul>
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>
      {mobileOpen && (
        <div className="container" style={{ paddingBottom: '1rem' }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {links.map(link => (
              <li key={link.href}>
                <a href={link.href} style={{ textDecoration: 'none', color: 'var(--text)', fontWeight: 500 }}
                   onClick={() => setMobileOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
