import { motion } from 'framer-motion'
import { useLang } from '../i18n.jsx'
import Reveal from './Reveal.jsx'

const BRANDS = ["HAVELLS", "PHILIPS", "CROMPTON", "POLYCAB", "SYSKA", "ANCHOR", "BAJAJ", "LEGRAND"]

export default function Brands() {
  const { lang } = useLang()
  const hindi = lang === 'hi'

  return (
    <section className="bg-void py-16 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-10">
        <Reveal className="text-center">
          <p className={`text-filament uppercase tracking-[0.3em] text-sm ${hindi ? 'hindi-active tracking-normal' : ''}`}>
            {hindi ? 'टॉप ब्रांड्स के अधिकृत डीलर' : 'Authorized Dealers of Premium Brands'}
          </p>
        </Reveal>
      </div>
      
      <div className="relative flex overflow-hidden whitespace-nowrap">
        {/* Gradients for smooth fade out at edges */}
        <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-void to-transparent z-10" />
        <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-void to-transparent z-10" />
        
        <motion.div
          className="flex items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        >
          {/* Double array to make the infinite loop seamless */}
          {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, idx) => (
            <div key={idx} className="flex items-center mx-10 md:mx-16">
              <span className="font-display font-bold text-4xl md:text-5xl text-ivory/10 hover:text-filament/50 transition-colors duration-500 cursor-default">
                {brand}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
