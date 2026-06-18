import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { cn } from '../../lib/utils'
import Button from '../ui/Button'

const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Use Cases', href: '#use-cases' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      const sections = navigation.map(item => item.href.substring(1))
      const scrollPosition = window.scrollY + 100
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${section}`)
            break
          }
        }
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const shouldBeDark = stored === 'dark'
    setIsDark(shouldBeDark)
    document.documentElement.classList.toggle('dark', shouldBeDark)
    document.body.classList.toggle('dark', shouldBeDark)
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', newTheme)
    document.body.classList.toggle('dark', newTheme)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <div
        className={cn(
          'flex items-center justify-between w-full max-w-[1100px] h-[56px] px-4 rounded-full transition-all duration-300',
          isScrolled
            ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border border-card-border dark:border-gray-700'
            : 'bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-card-border/60 dark:border-gray-700/60'
        )}
      >
        <div className="flex items-center gap-2.5">
          <img src="/f2g_logo.png" alt="F2G" width={28} height={28} className="rounded-md" />
          <span className="font-medium text-sm text-primary dark:text-gray-100 tracking-tight">Portable Lab</span>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                'text-sm tracking-nav transition-colors',
                activeSection === item.href
                  ? 'text-primary dark:text-white font-semibold'
                  : 'text-primary/70 dark:text-gray-300 hover:text-primary dark:hover:text-white'
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="Toggle theme">
            {isDark ? <Sun className="w-4 h-4 text-gray-300" /> : <Moon className="w-4 h-4 text-primary" />}
          </button>
          <Button size="sm" onClick={() => window.location.href = '#contact'}>Get Started</Button>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="Toggle theme">
            {isDark ? <Sun className="w-4 h-4 text-gray-300" /> : <Moon className="w-4 h-4 text-primary" />}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            {isMobileMenuOpen ? <X className="w-5 h-5 text-primary dark:text-gray-100" /> : <Menu className="w-5 h-5 text-primary dark:text-gray-100" />}
          </button>
        </div>
      </div>

      <div className={cn(
        'lg:hidden absolute top-[72px] left-4 right-4 bg-white dark:bg-gray-900 rounded-2xl border border-card-border dark:border-gray-700 shadow-lg transition-all duration-300 overflow-hidden',
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      )}>
        <nav className="p-4 space-y-1">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)}
              className={cn('block px-4 py-3 rounded-lg text-sm transition-colors', activeSection === item.href ? 'text-primary dark:text-white font-semibold bg-gray-50 dark:bg-gray-800' : 'text-primary/70 dark:text-gray-300 hover:text-primary dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800')}>
              {item.name}
            </a>
          ))}
          <div className="pt-2 px-4">
            <Button size="sm" className="w-full" onClick={() => { setIsMobileMenuOpen(false); window.location.href = '#contact' }}>Get Started</Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
