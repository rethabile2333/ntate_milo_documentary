import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Music2 } from 'lucide-react';
export default function Footer() {
  return <footer className="footer"><div className="footer-top"><Link className="brand" to="/"><span className="brand-mark">M</span><span>NTATE MILO<small>THE DOCUMENTARY</small></span></Link><p>A story of roots, resilience and becoming.</p><div className="socials"><a href="https://www.facebook.com/" aria-label="Facebook"><Facebook /></a><a href="https://www.youtube.com/" aria-label="YouTube"><Youtube /></a><a href="https://www.instagram.com/" aria-label="Instagram"><Instagram /></a><a href="https://www.tiktok.com/" aria-label="TikTok"><Music2 /></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} NTATE MILO DOCUMENTARY</span><span>MADE TO INSPIRE. ROOTED IN LESOTHO.</span></div></footer>;
}
