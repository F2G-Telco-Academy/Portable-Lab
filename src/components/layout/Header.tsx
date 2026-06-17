import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#specs', label: 'Specs' },
  { href: '#use-cases', label: 'Use Cases' },
  { href: '#faq', label: 'FAQ' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-secondary/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50">
      <Container className="flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <img src="/f2g_logo.png" alt="F2G" className="h-8 w-8" />
          <span className="font-bold text-lg">F2G Portable Lab</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-gray-600 hover:text-primary transition-colors dark:text-gray-300">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button size="sm" onClick={() => window.location.href = '#contact'}>Contact Us</Button>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </Container>

      {open && (
        <div className="md:hidden bg-white dark:bg-secondary border-t border-gray-200 dark:border-gray-800 p-4 space-y-3">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary">
              {link.label}
            </a>
          ))}
          <Button size="sm" className="w-full" onClick={() => { setOpen(false); window.location.href = '#contact' }}>Contact Us</Button>
        </div>
      )}
    </header>
  )
}
