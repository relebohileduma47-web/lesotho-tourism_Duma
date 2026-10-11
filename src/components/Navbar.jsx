import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={close}>Visit Lesotho</Link>
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        <nav className={open ? 'nav-links open' : 'nav-links'}>
          <NavLink to="/" end onClick={close}>Home</NavLink>
          <NavLink to="/attractions" onClick={close}>Attractions</NavLink>
          <NavLink to="/enquiry" onClick={close}>Plan a visit</NavLink>
        </nav>
      </div>
    </header>
  )
}
