import { motion } from 'framer-motion'

// The showroom's signature mark: a hand-drawn filament line that glows in
// on scroll, echoing the coiled tungsten wire inside a warm bulb. Used to
// separate sections instead of a plain rule.
export default function Filament({ className = '' }) {
  return (
    <div className={`w-full flex justify-center ${className}`} aria-hidden="true">
      <svg
        width="220"
        height="28"
        viewBox="0 0 220 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M2 14 C 20 2, 34 26, 52 14 C 70 2, 84 26, 102 14 C 120 2, 134 26, 152 14 C 170 2, 184 26, 202 14 L 218 14"
          stroke="url(#filamentGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        />
        <defs>
          <linearGradient id="filamentGradient" x1="0" y1="0" x2="220" y2="0">
            <stop offset="0%" stopColor="#B8823A" stopOpacity="0" />
            <stop offset="50%" stopColor="#F7D896" stopOpacity="1" />
            <stop offset="100%" stopColor="#B8823A" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
