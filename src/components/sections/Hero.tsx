import { motion } from 'framer-motion'
import { PlayCircle, ArrowDown } from 'lucide-react'
import Button from '../ui/Button'
import Container from '../ui/Container'

const stats = [
  { value: '85 Mbps', label: 'Peak Throughput' },
  { value: '2×2 MIMO', label: 'Antenna Config' },
  { value: 'Full IMS', label: 'VoLTE Stack' },
]

export default function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <Container>
        <div className="reveal max-w-[900px] mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              By F2G Telco Academy
            </span>
          </motion.div>

          <motion.h1
            className="heading-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Portable End-to-End{' '}
            <span className="text-primary">Software Defined</span>{' '}
            4G Network
          </motion.h1>

          <motion.p
            className="text-body max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A complete LTE laboratory in a portable box. Deploy SMS, IMS/VoLTE, USSD services 
            with 2×2 MIMO and up to 85 Mbps throughput — ready for research, teaching, and 
            telecom development anywhere.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 justify-center pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button size="lg" className="gap-2">
              <PlayCircle className="w-4 h-4" />
              Watch Demo
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.location.href = '#features'}>
              Learn More
              <ArrowDown className="w-4 h-4 ml-1" />
            </Button>
          </motion.div>
        </div>

        {/* Product Showcase */}
        <motion.div
          className="reveal mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Device placeholder */}
              <div className="flex-1 flex items-center justify-center">
                <div className="w-64 h-48 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                      <img src="/f2g_logo.png" alt="F2G Device" className="w-10 h-10" />
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">F2G Portable Lab</p>
                  </div>
                </div>
              </div>
              {/* Phone mockup */}
              <div className="flex-shrink-0">
                <div className="w-44 h-80 rounded-[2rem] border-4 border-gray-800 dark:border-gray-600 bg-white dark:bg-gray-900 shadow-xl overflow-hidden relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-800 dark:bg-gray-600 rounded-b-xl" />
                  <div className="pt-8 px-3 space-y-2">
                    <div className="h-3 bg-primary/20 rounded w-3/4" />
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full" />
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-2/3" />
                    <div className="mt-4 h-24 bg-primary/5 rounded-lg border border-primary/20" />
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="reveal flex flex-wrap justify-center gap-8 md:gap-16 mt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
