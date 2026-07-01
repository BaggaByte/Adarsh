import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowNarrowDown } from 'react-icons/hi'
import { useLang } from '../i18n.jsx'
import Filament from './Filament.jsx'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const item = {
  hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  const { t, lang } = useLang()
  const hindi = lang === 'hi'

  // Generate random particles for the background
  const particles = Array.from({ length: 20 })

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-void"
    >
      {/* Ken Burns Background Effect */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center origin-center"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1.25 }}
        transition={{ duration: 30, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        style={{ backgroundImage: "url('/assets/hero_background_1782893745518.png')" }}
        aria-hidden="true"
      />
      
      {/* Dark overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-void/95 via-void/50 to-void" />
      <div className="absolute inset-0 bg-radial-glow opacity-80" />

      {/* Floating Dust Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-filament/30"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -Math.random() * 100 - 50],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0, Math.random() * 0.5 + 0.2, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={lang}
          variants={container}
          initial="hidden"
          animate="show"
          exit={{ opacity: 0, filter: "blur(10px)", transition: { duration: 0.5 } }}
          className="relative z-10 max-w-4xl mx-auto text-center px-6 pt-20"
        >
          {/* Continuous floating effect for the entire text block after it loads */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.p
              variants={item}
              className={`text-filament tracking-[0.3em] uppercase text-xs md:text-sm mb-6 ${
                hindi ? 'hindi-active tracking-normal' : ''
              }`}
            >
              {t.hero.eyebrow}
            </motion.p>

            <motion.h1
              variants={item}
              className={`text-ivory leading-[1.1] ${
                hindi
                  ? 'hindi-active font-semibold text-4xl sm:text-5xl md:text-6xl drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]'
                  : 'font-display font-medium text-4xl sm:text-6xl md:text-7xl drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]'
              }`}
            >
              {t.hero.titleLine1}
              <br />
              <motion.span 
                className="inline-block text-filament2 relative"
                animate={{ textShadow: ["0px 0px 0px rgba(255,215,0,0)", "0px 0px 20px rgba(255,215,0,0.4)", "0px 0px 0px rgba(255,215,0,0)"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                {t.hero.titleLine2}
              </motion.span>
            </motion.h1>

            <motion.p
              variants={item}
              className={`mt-7 text-smoke max-w-xl mx-auto text-base md:text-lg ${
                hindi ? 'hindi-active' : ''
              }`}
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="#collection"
                className={`group relative overflow-hidden px-8 py-3.5 rounded-full bg-filament text-void font-semibold shadow-glow hover:scale-105 active:scale-100 transition-all ${
                  hindi ? 'hindi-active' : ''
                }`}
              >
                <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10">{t.hero.cta}</span>
              </a>
              <a
                href="#contact"
                className={`px-8 py-3.5 rounded-full border border-ivory/25 text-ivory hover:border-filament hover:text-filament hover:shadow-[0_0_20px_rgba(255,215,0,0.2)] hover:scale-105 active:scale-100 transition-all ${
                  hindi ? 'hindi-active' : ''
                }`}
              >
                {t.hero.ctaSecondary}
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-14 flex justify-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Filament />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-smoke z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <HiArrowNarrowDown className="text-xl hover:text-filament transition-colors cursor-pointer" />
        </motion.div>
      </motion.div>
    </section>
  )
}
