import { motion } from 'framer-motion'
import { HiOutlineLightBulb } from 'react-icons/hi'

export default function Loader({ onComplete }) {
  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-void flex items-center justify-center flex-col"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.5, duration: 0.8, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
    >
      <motion.div 
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-filament/30 blur-[40px] rounded-full scale-150" />
        <HiOutlineLightBulb className="text-6xl text-filament relative z-10" />
      </motion.div>
      <motion.div
        className="mt-6 overflow-hidden h-[1px] w-32 bg-white/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <motion.div 
          className="h-full bg-filament"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  )
}
