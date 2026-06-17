import { motion } from 'framer-motion'
import { Radio, Phone, MessageSquare, Wifi, Shield, Cpu } from 'lucide-react'
import Container from '../ui/Container'

const features = [
  { icon: Radio, title: 'Full LTE Network', description: 'Complete EPC with Open5GS — MME, SGW, PGW, HSS, PCRF in Docker containers.' },
  { icon: Phone, title: 'VoLTE / IMS', description: 'Kamailio-based IMS (P/I/S-CSCF) with Asterisk media server and RTPengine.' },
  { icon: MessageSquare, title: 'SMS & USSD', description: 'Native SMS center and USSD gateway for interactive mobile services.' },
  { icon: Wifi, title: '2×2 MIMO', description: 'BladeRF 2.0 micro SDR with dual TX/RX and bias-tee amplifiers for extended range.' },
  { icon: Shield, title: 'eSIM Ready', description: 'Remote SIM provisioning via SM-DP+ — provision subscribers over-the-air.' },
  { icon: Cpu, title: 'srsRAN 4G', description: 'Production-grade eNodeB software supporting Band 3/7/20 up to 50 PRB (10 MHz).' },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-accent">
      <Container>
        <div className="reveal text-center max-w-2xl mx-auto mb-14">
          <h2 className="heading-lg">Everything You Need in One Box</h2>
          <p className="text-body mt-4">
            A complete telecom laboratory — from radio access to core network to application services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="reveal p-6 rounded-xl bg-white dark:bg-secondary border border-gray-200 dark:border-gray-800 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="heading-md text-lg">{feature.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
