import { motion } from 'framer-motion'
import { Package, Plug, Rocket } from 'lucide-react'
import Container from '../ui/Container'

const steps = [
  { icon: Package, title: 'Unbox & Power On', description: 'Connect the BladeRF SDR, power on the portable unit. All Docker containers start automatically.' },
  { icon: Plug, title: 'Connect Devices', description: 'Attach UEs via physical SIM or eSIM provisioning. The network detects and registers devices instantly.' },
  { icon: Rocket, title: 'Test & Develop', description: 'Run VoLTE calls, send SMS, test USSD flows, measure throughput — all on your private 4G network.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <Container>
        <div className="reveal text-center max-w-2xl mx-auto mb-14">
          <h2 className="heading-lg">Up and Running in Minutes</h2>
          <p className="text-body mt-4">Three steps to your own private 4G network.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="reveal text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mx-auto mb-4 relative">
                <step.icon className="w-6 h-6 text-primary" />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
