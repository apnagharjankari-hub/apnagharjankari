import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'

const links = [
  { to: '/', label: 'Home' },
  { to: '/properties', label: 'Properties' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="nav-inner">
        <NavLink to="/" className="nav-logo" onClick={() => setOpen(false)}>
          <img src={logo} alt="Apna Ghar Jankari logo" />
          <span>Apna Ghar Jankari</span>
        </NavLink>

        <button
          type="button"
          className={`nav-toggle ${open ? 'open' : ''}`}
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-menu ${open ? 'nav-menu-open' : ''}`}>
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
