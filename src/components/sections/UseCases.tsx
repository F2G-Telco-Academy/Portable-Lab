import { motion } from 'framer-motion'
import { GraduationCap, FlaskConical, Building2, Globe } from 'lucide-react'
import Container from '../ui/Container'

const useCases = [
  { icon: GraduationCap, title: 'Telecom Education', description: 'Hands-on LTE/VoLTE labs for university students. Real protocol analysis with Wireshark.' },
  { icon: FlaskConical, title: 'R&D and Prototyping', description: 'Test new telecom features — USSD services, eSIM provisioning, IPTV over IMS — on a real network.' },
  { icon: Building2, title: 'Enterprise Testing', description: 'Validate IoT devices, SIM cards, and mobile applications against a controlled LTE environment.' },
  { icon: Globe, title: 'Remote Regions', description: 'Deploy temporary 4G coverage for events, field operations, or regions without infrastructure.' },
]

export default function UseCases() {
  return (
    <section id="use-cases" className="py-20">
      <Container>
        <div className="reveal text-center max-w-2xl mx-auto mb-14">
          <h2 className="heading-lg">Built For</h2>
          <p className="text-body mt-4">From the classroom to the field — one device, many possibilities.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
              className="reveal p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-primary/40 transition-all text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <uc.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">{uc.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{uc.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
