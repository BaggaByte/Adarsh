import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../i18n.jsx'
import Reveal from './Reveal.jsx'
import { HiStar } from 'react-icons/hi'

export default function Testimonials() {
  const { t, lang } = useLang()
  const hindi = lang === 'hi'
  const data = t.testimonials
  const reviews = data.reviews

  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [reviews.length])

  return (
    <section className="bg-void py-24 md:py-32 px-5 md:px-8 border-t border-white/5 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-filament/5 blur-[120px] rounded-[100%] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <Reveal className="text-center mb-16">
          <p className={`text-filament uppercase tracking-[0.3em] text-xs mb-4 ${hindi ? 'hindi-active tracking-normal' : ''}`}>
            {data.eyebrow}
          </p>
          <h2 className={`text-3xl md:text-5xl text-ivory mb-6 ${hindi ? 'hindi-active font-semibold' : 'font-display font-medium'}`}>
            {data.title}
          </h2>
        </Reveal>

        <div className="relative h-[300px] md:h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <HiStar key={i} className="text-filament text-xl" />
                ))}
              </div>
              <p className={`text-xl md:text-3xl text-ivory/90 leading-relaxed mb-8 italic ${hindi ? 'hindi-active font-medium' : 'font-serif'}`}>
                "{reviews[currentIndex].text}"
              </p>
              <div>
                <div className={`text-ivory font-semibold tracking-wide ${hindi ? 'hindi-active' : ''}`}>
                  {reviews[currentIndex].name}
                </div>
                <div className={`text-smoke/60 text-sm mt-1 uppercase tracking-wider ${hindi ? 'hindi-active tracking-normal' : ''}`}>
                  {reviews[currentIndex].role}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === currentIndex ? 'w-8 bg-filament' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
