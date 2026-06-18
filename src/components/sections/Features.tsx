import { Radio, Phone, MessageSquare, Wifi, Shield, Cpu } from 'lucide-react'
import Container from '../ui/Container'

const features = [
  { icon: Radio, title: 'Full LTE Network', description: 'Complete EPC with Open5GS — MME, SGW, PGW, HSS, PCRF in Docker containers.' },
  { icon: Phone, title: 'VoLTE / IMS', description: 'Kamailio-based IMS (P/I/S-CSCF) with Asterisk media server and RTPengine.' },
  { icon: MessageSquare, title: 'SMS', description: 'Native SMS center for mobile messaging services.' },
  { icon: Wifi, title: 'IPTV Streaming', description: 'Live TV streaming over the private LTE network with multicast support.' },
  { icon: Shield, title: 'eSIM Ready', description: 'Remote SIM provisioning via Simlessly (GSMA-certified SM-DP+) — provision subscribers over-the-air.' },
  { icon: Cpu, title: 'srsRAN 4G', description: 'Production-grade eNodeB software on Band 3 (1800 MHz). Supports all LTE bandwidths from 1.4 to 20 MHz.' },
]

export default function Features() {
  return (
    <section id="features" className="py-12 md:py-16">
      <Container>
        <div className="reveal text-center mb-10 md:mb-12 space-y-4">
          <p className="section-label">Features & Benefits</p>
          <h2 className="heading-lg max-w-2xl mx-auto dark:text-gray-100">
            Everything You Need in One Box
          </h2>
          <p className="text-body dark:text-gray-300 max-w-xl mx-auto">
            A complete telecom laboratory — from radio access to core network to application services.
          </p>
        </div>

        <div className="reveal-children grid md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div key={idx} className="p-5 flex flex-col justify-end gap-3 h-[220px] border border-card-border/50 dark:border-gray-700/50 hover:bg-white/60 dark:hover:bg-gray-800/60 transition-all duration-300">
              <feature.icon className="w-5 h-5 text-accent dark:text-[#8BADB9]" />
              <div>
                <h3 className="text-[15px] font-medium text-primary dark:text-gray-100 tracking-heading-sm">{feature.title}</h3>
                <p className="text-xs text-muted dark:text-gray-400 mt-1 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
