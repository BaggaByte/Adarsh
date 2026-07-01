import { HiOutlineLocationMarker as HiOutlineMapPin, HiOutlineClock, HiOutlineLightBulb } from 'react-icons/hi'
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa'
import { useLang } from '../i18n.jsx'
import Reveal from './Reveal.jsx'

export default function Footer() {
  const { t, lang } = useLang()
  const hindi = lang === 'hi'

  return (
    <footer id="visit" className="relative bg-void border-t border-white/5 pt-20 pb-8 px-5 md:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mb-16">
        <Reveal>
          <div className="flex items-center gap-2 mb-6">
            <HiOutlineLightBulb className="text-filament text-2xl" />
            <span className={`text-xl text-ivory ${hindi ? 'hindi-active font-semibold' : 'font-display font-medium'}`}>
              {t.footer.title}
            </span>
          </div>

          <div className="space-y-5">
            <div className="flex gap-3">
              <HiOutlineMapPin className="text-filament text-xl shrink-0 mt-0.5" />
              <div>
                <p className={`text-ivory text-sm mb-1 ${hindi ? 'hindi-active' : ''}`}>{t.footer.addressLabel}</p>
                <a 
                  href="https://maps.app.goo.gl/xz3iPgLbKDXk2rqH6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`block text-smoke text-sm hover:text-filament transition-colors ${hindi ? 'hindi-active' : ''}`}
                >
                  {t.footer.address}
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <HiOutlineClock className="text-filament text-xl shrink-0 mt-0.5" />
              <div>
                <p className={`text-ivory text-sm mb-1 ${hindi ? 'hindi-active' : ''}`}>{t.footer.hoursLabel}</p>
                <p className={`text-smoke text-sm ${hindi ? 'hindi-active' : ''}`}>{t.footer.hours}</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className={`text-ivory text-sm mb-3 ${hindi ? 'hindi-active' : ''}`}>{t.footer.social}</p>
            <div className="flex gap-3">
              {[
                { Icon: FaFacebookF, href: 'https://www.facebook.com/p/Adarsh-Electronics-61557321399953/' },
                { Icon: FaWhatsapp, href: 'https://wa.me/918604921473' },
                { Icon: FaInstagram, href: '#' }
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Social link"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-smoke hover:text-void hover:bg-filament hover:border-filament transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Dark Mode Google Maps Embed */}
        <Reveal delay={0.1}>
          <div className="w-full h-64 md:h-full min-h-[16rem] rounded-2xl overflow-hidden border border-white/10 relative">
            <iframe
              title="Adarsh Electronics Location"
              src="https://maps.google.com/maps?q=Adarsh%20Electronics%2C%20Rajgarh%20Sitapur%20Road%2C%20Lakhimpur%20Kheri&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(85%)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* Overlay to prevent scroll trapping until clicked */}
            <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-2xl shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]"></div>
          </div>
        </Reveal>
      </div>

      <div className="max-w-6xl mx-auto border-t border-white/5 pt-6 text-center">
        <p className={`text-smoke text-xs ${hindi ? 'hindi-active' : ''}`}>
          © {new Date().getFullYear()} {t.footer.title}. {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
