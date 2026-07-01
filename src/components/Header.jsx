import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineLightBulb, HiPhone } from 'react-icons/hi'
import { useLang } from '../i18n.jsx'

export default function Header() {
  const { t, lang, toggleLang } = useLang()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '#collection', label: t.nav.collection },
    { href: '#trust', label: t.nav.trust },
    { href: '#visit', label: t.nav.visit },
  ]

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-void/85 backdrop-blur-2xl border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <HiOutlineLightBulb className="text-filament text-2xl group-hover:animate-flicker" />
          <span
            className={`text-lg md:text-xl tracking-wide text-ivory ${
              lang === 'hi' ? 'hindi-active font-semibold' : 'font-display font-medium'
            }`}
          >
            {t.footer.title}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-sm text-smoke hover:text-ivory transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-filament after:transition-all hover:after:w-full ${
                lang === 'hi' ? 'hindi-active' : ''
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          <button
            onClick={toggleLang}
            aria-label="Toggle language between English and Hindi"
            className="relative flex items-center border border-filament/40 rounded-full p-1 text-xs font-medium overflow-hidden"
          >
            <motion.span
              layout
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className="absolute top-1 bottom-1 w-8 rounded-full bg-filament"
              style={{ left: lang === 'en' ? 4 : 36 }}
            />
            <span
              className={`relative z-10 w-8 text-center py-1 ${
                lang === 'en' ? 'text-void' : 'text-smoke'
              }`}
            >
              EN
            </span>
            <span
              className={`relative z-10 w-8 text-center py-1 ${
                lang === 'hi' ? 'text-void' : 'text-smoke'
              }`}
            >
              हिं
            </span>
          </button>

          <a
            href="tel:9807548437"
            aria-label="Call Us"
            className="flex items-center justify-center w-8 h-8 rounded-full bg-filament/20 text-filament hover:bg-filament hover:text-void transition-colors"
          >
            <HiPhone className="text-lg" />
          </a>

          <a
            href="#contact"
            className={`hidden sm:inline-block text-sm px-5 py-2 rounded-full bg-filament text-void font-semibold hover:shadow-glow-sm transition-shadow ${
              lang === 'hi' ? 'hindi-active' : ''
            }`}
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </motion.header>
  )
}
