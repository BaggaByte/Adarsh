import { HiOutlineSparkles, HiOutlineTag, HiOutlineChat } from 'react-icons/hi'
import { useLang } from '../i18n.jsx'
import Reveal from './Reveal.jsx'
import Filament from './Filament.jsx'

const ICONS = [HiOutlineSparkles, HiOutlineTag, HiOutlineChat]

export default function TrustBanner() {
  const { t, lang } = useLang()
  const hindi = lang === 'hi'

  return (
    <section id="trust" className="relative bg-panel py-24 md:py-28 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center max-w-xl mx-auto mb-4">
          <p className={`text-filament uppercase tracking-[0.3em] text-xs mb-4 ${hindi ? 'hindi-active tracking-normal' : ''}`}>
            {t.trust.eyebrow}
          </p>
          <h2 className={`text-3xl md:text-4xl text-ivory ${hindi ? 'hindi-active font-semibold' : 'font-display font-medium'}`}>
            {t.trust.title}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <Filament className="mb-14" />
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
          {t.trust.items.map((feat, i) => {
            const Icon = ICONS[i]
            return (
              <Reveal key={feat.title} delay={i * 0.12}>
                <div className="h-full text-center sm:text-left p-8 rounded-2xl border border-white/5 bg-panel hover:bg-panel2 hover:border-filament/60 hover:shadow-glow transition-all duration-500 group">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-filament/10 text-filament mb-6 group-hover:scale-110 group-hover:bg-filament/20 transition-transform duration-500">
                    <Icon className="text-2xl" />
                  </div>
                  <h3 className={`text-xl text-ivory mb-2 ${hindi ? 'hindi-active font-semibold' : 'font-display font-medium'}`}>
                    {feat.title}
                  </h3>
                  <p className={`text-smoke text-sm leading-relaxed ${hindi ? 'hindi-active' : ''}`}>
                    {feat.desc}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
