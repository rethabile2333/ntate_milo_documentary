import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
const links = [
  ['/childhood', 'Early Life'], ['/music-career', 'Music Career'], ['/achievements', 'Achievements'],
  ['/inspiration', 'Inspiration'], ['/gallery', 'Gallery'], ['/contact', 'Contact']
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="navbar"><Link className="brand" to="/" onClick={close}><span className="brand-mark">M</span><span>NTATE MILO<small>THE DOCUMENTARY</small></span></Link>
    <button className="menu-button" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <nav className={open ? 'nav-links nav-open' : 'nav-links'}>{links.map(([to, label]) => <NavLink key={to} to={to} onClick={close}>{label}</NavLink>)}<Link className="nav-cta" to="/contact" onClick={close}>Share a story ↗</Link></nav>
  </header>;
}
