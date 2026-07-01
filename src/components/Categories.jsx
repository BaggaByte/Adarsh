import { useState, Fragment } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  HiOutlineLightningBolt, 
  HiOutlineLightBulb, 
  HiOutlineSun, 
  HiOutlineHome 
} from 'react-icons/hi'
import { useLang } from '../i18n.jsx'
import Reveal from './Reveal.jsx'
import Filament from './Filament.jsx'

const CATEGORY_KEYS = ['wiring', 'lighting', 'fans', 'kitchen']
const ICONS = {
  wiring: HiOutlineLightningBolt,
  lighting: HiOutlineLightBulb,
  fans: HiOutlineSun,
  kitchen: HiOutlineHome,
}

export default function Categories() {
  const { t, lang } = useLang()
  const hindi = lang === 'hi'
  const catData = t.categories

  return (
    <section id="categories" className="relative bg-void pt-32 pb-24 md:pt-40 md:pb-28 px-5 md:px-8 border-b border-white/5 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-filament/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-10">
          <p className={`text-filament uppercase tracking-[0.3em] text-xs mb-4 ${hindi ? 'hindi-active tracking-normal' : ''}`}>
            {catData.eyebrow}
          </p>
          
          <TypewriterText 
            text={catData.title} 
            className={`text-4xl md:text-6xl text-ivory mb-6 ${hindi ? 'hindi-active font-semibold' : 'font-display font-medium'}`} 
          />
          
          <div className="flex justify-center mb-8">
            <Filament />
          </div>
          
          <p className={`text-smoke md:text-lg leading-relaxed ${hindi ? 'hindi-active' : ''}`}>
            {catData.subtitle}
          </p>
        </Reveal>

        <MarqueeBanner hindi={hindi} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-20">
          {CATEGORY_KEYS.map((key, i) => {
            const data = catData[key]
            const Icon = ICONS[key]
            
            return (
              <Reveal key={key} delay={i * 0.1}>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: i * 0.4 
                  }}
                >
                  <CategoryCard data={data} Icon={Icon} hindi={hindi} />
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function TypewriterText({ text, className }) {
  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.2 }
    },
  }

  const child = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.1 } }
  }

  return (
    <motion.h2
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px" }}
    >
      {words.map((word, wordIdx) => (
        <Fragment key={wordIdx}>
          <span className="inline-block whitespace-nowrap">
            {Array.from(word).map((char, i) => (
              <motion.span key={i} variants={child}>
                {char}
              </motion.span>
            ))}
          </span>
          {wordIdx < words.length - 1 && " "}
        </Fragment>
      ))}
    </motion.h2>
  )
}

function MarqueeBanner({ hindi }) {
  const items = hindi 
    ? ["प्रीमियम लाइटिंग", "हाउस वायर्स", "मॉड्यूलर स्विच", "पंखे", "उपकरण", "एक्सटेंशन बोर्ड", "सजावटी लाइट"] 
    : ["Premium Lighting", "House Wires", "Modular Switches", "Ceiling Fans", "Home Appliances", "Extension Boards", "Decor Lights"]

  return (
    <div className="relative flex overflow-hidden whitespace-nowrap bg-filament/5 border-y border-filament/10 py-4 my-14 w-screen -ml-5 md:-ml-8 left-0">
      {/* Gradient masks for smooth edges */}
      <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-void to-transparent z-10" />
      <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-void to-transparent z-10" />
      
      <motion.div
        className="flex px-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
      >
        {/* Duplicate the list 4 times to ensure it never runs out of length on ultra-wide screens */}
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className={`flex items-center text-filament/80 text-sm tracking-[0.2em] uppercase ${hindi ? 'hindi-active tracking-normal' : ''}`}>
            <span className="mx-8 md:mx-12 opacity-40 text-xs">•</span>
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

function CategoryCard({ data, Icon, hindi }) {
  const [isHovered, setIsHovered] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300 } }
  }

  return (
    <div 
      className="relative h-[340px] rounded-2xl overflow-hidden border border-white/10 bg-panel group cursor-default transition-all duration-500 hover:border-filament/50 hover:shadow-glow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-filament/0 to-filament/0 group-hover:from-filament/5 group-hover:to-transparent transition-colors duration-500" />
      
      <div className="absolute inset-0 p-8 flex flex-col">
        <motion.div 
          animate={{ y: isHovered ? -10 : 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="flex-shrink-0"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-filament/10 text-filament mb-5 group-hover:bg-filament/20 transition-colors duration-500 shadow-inner">
            <motion.div
              animate={isHovered ? { rotate: [0, -10, 10, -5, 0] } : {}}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <Icon className="text-3xl" />
            </motion.div>
          </div>
          <h3 className={`text-xl text-ivory ${hindi ? 'hindi-active font-semibold' : 'font-display font-medium'}`}>
            {data.title}
          </h3>
        </motion.div>

        <div className="flex-grow mt-6 relative">
          <AnimatePresence>
            {isHovered && (
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="absolute inset-0 flex flex-col gap-2.5 overflow-y-auto pr-2 custom-scrollbar"
              >
                {data.items.map((item, idx) => (
                  <motion.li 
                    key={idx} 
                    variants={itemVariants}
                    className={`text-sm text-smoke flex items-center gap-2 ${hindi ? 'hindi-active' : ''}`}
                  >
                    <span className="w-1 h-1 rounded-full bg-filament/60 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
          
          <motion.div
            animate={{ opacity: isHovered ? 0 : 1 }}
            className={`absolute inset-0 text-sm text-smoke/50 mt-2 ${hindi ? 'hindi-active' : ''}`}
          >
            {hindi ? 'उत्पादों को देखने के लिए होवर करें' : 'Hover to explore range'}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
