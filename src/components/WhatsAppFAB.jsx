import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { useLang } from '../i18n.jsx'

// Change this to your real business WhatsApp number, digits only,
// including country code (no + or leading zeros), e.g. 91XXXXXXXXXX.
const WHATSAPP_NUMBER = '918604921473'

export default function WhatsAppFAB() {
  const { t } = useLang()
  const encodedMessage = encodeURIComponent(t.whatsapp.message)
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsapp.label}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-xl animate-pulseGlow"
    >
      <FaWhatsapp className="text-2xl md:text-3xl" />
    </motion.a>
  )
}
