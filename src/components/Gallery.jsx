import { useMemo, useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { HiOutlineZoomIn, HiOutlineLightBulb } from 'react-icons/hi'
import { useLang } from '../i18n.jsx'
import { products } from '../products.js'
import Reveal from './Reveal.jsx'
import Filament from './Filament.jsx'

const CATEGORIES = ['all', 'living', 'outdoor', 'chandeliers']

export default function Gallery() {
  const { t, lang } = useLang()
  const hindi = lang === 'hi'
  const [active, setActive] = useState('all')
  
  // Simulator State
  const [isLightOn, setIsLightOn] = useState(true)
  const [lightTone, setLightTone] = useState('warm') // 'warm' | 'cool'

  const filtered = useMemo(
    () => (active === 'all' ? products : products.filter((p) => p.category === active)),
    [active]
  )

  // Compute CSS filter based on simulator state
  const getImageStyle = () => {
    if (!isLightOn) return { filter: 'brightness(0.2) contrast(1.2) grayscale(0.5)' }
    if (lightTone === 'warm') return { filter: 'brightness(1.1) sepia(0.4) saturate(1.2) hue-rotate(-5deg)' }
    return { filter: 'brightness(1.15) contrast(1.1) saturate(0.8) hue-rotate(180deg)' } // cool tone
  }

  return (
    <section id="collection" className="relative bg-void py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto mb-4">
          <p className={`text-filament uppercase tracking-[0.3em] text-xs mb-4 ${hindi ? 'hindi-active tracking-normal' : ''}`}>
            {t.gallery.eyebrow}
          </p>
          <h2 className={`text-3xl md:text-5xl text-ivory ${hindi ? 'hindi-active font-semibold' : 'font-display font-medium'}`}>
            {t.gallery.title}
          </h2>
          <p className={`mt-4 text-smoke ${hindi ? 'hindi-active' : ''}`}>{t.gallery.subtitle}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <Filament className="my-8" />
        </Reveal>

        {/* Simulator Controls */}
        <Reveal delay={0.15} className="flex flex-col items-center gap-4 mb-10">
          <div className="flex items-center gap-2 text-ivory/80 text-sm font-medium uppercase tracking-widest bg-white/5 p-2 rounded-2xl border border-white/10">
            <button 
              onClick={() => setIsLightOn(!isLightOn)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl transition-all ${isLightOn ? 'bg-filament text-void shadow-[0_0_20px_rgba(255,215,0,0.3)]' : 'hover:bg-white/10'} ${hindi ? 'hindi-active tracking-normal' : ''}`}
            >
              <HiOutlineLightBulb className={isLightOn ? 'text-lg' : 'text-lg opacity-50'} />
              {isLightOn ? (hindi ? 'लाइट ऑन' : 'Lights On') : (hindi ? 'लाइट ऑफ' : 'Lights Off')}
            </button>
            <div className="w-[1px] h-8 bg-white/20 mx-1" />
            <div className="flex bg-void/50 rounded-xl p-1">
              <button 
                onClick={() => setLightTone('warm')}
                disabled={!isLightOn}
                className={`px-4 py-1.5 rounded-lg transition-all ${!isLightOn ? 'opacity-30' : lightTone === 'warm' ? 'bg-[#FFB067]/20 text-[#FFB067]' : 'hover:bg-white/10'} ${hindi ? 'hindi-active tracking-normal' : ''}`}
              >
                {hindi ? 'वार्म' : 'Warm'}
              </button>
              <button 
                onClick={() => setLightTone('cool')}
                disabled={!isLightOn}
                className={`px-4 py-1.5 rounded-lg transition-all ${!isLightOn ? 'opacity-30' : lightTone === 'cool' ? 'bg-[#8CD9FF]/20 text-[#8CD9FF]' : 'hover:bg-white/10'} ${hindi ? 'hindi-active tracking-normal' : ''}`}
              >
                {hindi ? 'कूल' : 'Cool'}
              </button>
            </div>
          </div>
        </Reveal>

        {/* Category filters */}
        <Reveal delay={0.2} className="flex flex-wrap justify-center gap-3 mb-14">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative px-5 py-2 rounded-full text-sm border transition-colors ${
                hindi ? 'hindi-active' : ''
              } ${
                active === cat
                  ? 'bg-filament text-void border-filament font-semibold'
                  : 'border-white/15 text-smoke hover:text-ivory hover:border-filament/50'
              }`}
            >
              {t.gallery.filters[cat]}
            </button>
          ))}
        </Reveal>

        {/* Masonry-style grid */}
        <LayoutGroup>
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((product, idx) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, delay: (idx % 6) * 0.05 }}
                  className="mb-5 break-inside-avoid group relative rounded-2xl overflow-hidden border border-white/5 bg-panel"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-black">
                    <img
                      src={product.image}
                      alt={product.name[lang]}
                      loading="lazy"
                      style={getImageStyle()}
                      className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void/95 via-void/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <span
                      className={`absolute top-4 left-4 text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full bg-void/50 backdrop-blur-md text-ivory border border-white/20 shadow-lg ${
                        hindi ? 'hindi-active tracking-normal' : ''
                      }`}
                    >
                      {t.gallery.placeholderTag}
                    </span>

                    <div className="absolute inset-x-0 bottom-0 p-5 translate-y-3 group-hover:translate-y-0 transition-transform duration-500 pointer-events-none">
                      <p
                        className={`text-ivory text-lg mb-1 ${
                          hindi ? 'hindi-active font-semibold' : 'font-display font-medium'
                        }`}
                      >
                        {product.name[lang]}
                      </p>
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs text-filament2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 ${
                          hindi ? 'hindi-active' : ''
                        }`}
                      >
                        <HiOutlineZoomIn /> {t.gallery.viewLabel}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {/* WhatsApp CTA */}
        <Reveal delay={0.3} className="mt-16 flex justify-center">
          <a
            href="https://wa.me/918604921473?text=Hello%20Adarsh%20Electronics,%20I%20am%20interested%20in%20your%20lighting%20products..."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-filament text-void font-semibold text-lg overflow-hidden transition-transform hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.4)]"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.015c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            <span className={`relative z-10 ${hindi ? 'hindi-active tracking-normal' : ''}`}>
              {hindi ? 'व्हाट्सएप पर कैटलॉग मंगाएं' : 'Get Catalog on WhatsApp'}
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
