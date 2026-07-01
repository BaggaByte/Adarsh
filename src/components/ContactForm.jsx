import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLang } from '../i18n.jsx'
import Reveal from './Reveal.jsx'

export default function ContactForm() {
  const { lang } = useLang()
  const hindi = lang === 'hi'
  const [status, setStatus] = useState('idle') // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    const formData = new FormData(e.target)
    // NOTE: For Web3Forms, the access_key goes here. 
    formData.append("access_key", "ffc827d3-9ce4-4edd-8737-00fa593e94bc")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })
      
      const data = await response.json()
      if (data.success) {
        setStatus('success')
        e.target.reset()
      } else {
        console.error("Error", data)
        setStatus('error')
      }
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 px-5 md:px-8 bg-panel border-t border-white/5 relative z-10">
      <div className="max-w-3xl mx-auto">
        <Reveal className="text-center mb-10">
          <h2 className={`text-3xl md:text-4xl text-ivory mb-3 ${hindi ? 'hindi-active font-semibold' : 'font-display font-medium'}`}>
            {hindi ? 'हमें संदेश भेजें' : 'Send us a Message'}
          </h2>
          <p className="text-smoke">
            {hindi 
              ? 'कोटेशन या किसी भी उत्पाद के बारे में पूछताछ के लिए नीचे दिया गया फॉर्म भरें।' 
              : 'Fill out the form below to inquire about quotes or any of our products.'}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-6 bg-void/50 p-6 md:p-10 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-sm">
            {/* Honeypot field for basic anti-spam (XSS/CSRF handled by Web3Forms & React) */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className={`text-sm text-ivory/80 ${hindi ? 'hindi-active' : ''}`}>
                  {hindi ? 'आपका नाम' : 'Your Name'}
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full bg-void/80 border border-white/10 rounded-xl px-4 py-3 text-ivory focus:outline-none focus:border-filament/50 focus:ring-1 focus:ring-filament/50 transition-all"
                  placeholder={hindi ? 'जैसे राहुल कुमार' : 'e.g. Rahul Kumar'}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className={`text-sm text-ivory/80 ${hindi ? 'hindi-active' : ''}`}>
                  {hindi ? 'फोन नंबर' : 'Phone Number'}
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  className="w-full bg-void/80 border border-white/10 rounded-xl px-4 py-3 text-ivory focus:outline-none focus:border-filament/50 focus:ring-1 focus:ring-filament/50 transition-all"
                  placeholder="9807548437"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className={`text-sm text-ivory/80 ${hindi ? 'hindi-active' : ''}`}>
                {hindi ? 'संदेश' : 'Message'}
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                required
                className="w-full bg-void/80 border border-white/10 rounded-xl px-4 py-3 text-ivory focus:outline-none focus:border-filament/50 focus:ring-1 focus:ring-filament/50 transition-all resize-none"
                placeholder={hindi ? 'आप किस उत्पाद की तलाश में हैं?' : 'What product are you looking for?'}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-filament text-void font-semibold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:scale-[1.02] transition-all disabled:opacity-70 disabled:hover:scale-100 flex justify-center items-center gap-2"
            >
              {status === 'loading' ? (
                <span className="animate-pulse">{hindi ? 'भेजा जा रहा है...' : 'Sending...'}</span>
              ) : (
                <span className={hindi ? 'hindi-active tracking-normal' : ''}>
                  {hindi ? 'संदेश भेजें' : 'Send Message'}
                </span>
              )}
            </button>

            {status === 'success' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-sm text-center">
                {hindi ? 'आपका संदेश सफलतापूर्वक भेजा गया! हम जल्द ही संपर्क करेंगे।' : 'Your message has been sent successfully! We will reach out soon.'}
              </motion.div>
            )}
            
            {status === 'error' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm text-center">
                {hindi ? 'संदेश भेजने में त्रुटि हुई। कृपया व्हाट्सएप के माध्यम से प्रयास करें।' : 'There was an error sending your message. Please try via WhatsApp.'}
              </motion.div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
