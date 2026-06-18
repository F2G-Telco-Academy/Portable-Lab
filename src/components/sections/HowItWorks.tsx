import { Package, Settings, Play, Wifi } from 'lucide-react'
import Container from '../ui/Container'

const steps = [
  { number: '01', icon: Package, title: 'Unbox & Power On', description: 'Connect the BladeRF SDR, plug in antennas, and boot the mini-PC. All services start automatically.' },
  { number: '02', icon: Settings, title: 'Provision Subscribers', description: 'Add SIM/eSIM profiles via the web interface. Configure IMSI, Ki, OPC for each subscriber.' },
  { number: '03', icon: Play, title: 'Start the Network', description: 'Launch the eNodeB. The full LTE core (EPC + IMS) is already running in Docker containers.' },
  { number: '04', icon: Wifi, title: 'Connect & Test', description: 'Attach UEs to the network. Make VoLTE calls, send SMS, and measure throughput.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 md:py-16">
      <Container>
        <div className="reveal text-center mb-10 md:mb-12 space-y-4">
          <p className="section-label">How It Works</p>
          <h2 className="heading-lg dark:text-gray-100">Get started in four simple steps</h2>
          <p className="text-body dark:text-gray-300 max-w-xl mx-auto">
            From unboxing to a live 4G network — deploy in under 10 minutes.
          </p>
        </div>

        <div className="reveal-children grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-card-border dark:border-gray-700 p-6 space-y-4 hover:bg-white dark:hover:bg-gray-800 hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-accent dark:text-[#8BADB9]">{step.number}</span>
                <step.icon className="w-5 h-5 text-primary/20 dark:text-gray-600" />
              </div>
              <div>
                <h3 className="text-[15px] font-medium text-primary dark:text-gray-100 tracking-heading-sm">{step.title}</h3>
                <p className="text-xs text-muted dark:text-gray-400 mt-2 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="reveal text-center text-xs text-muted dark:text-gray-400 mt-10">Average setup time: less than 10 minutes</p>
      </Container>
    </section>
  )
}
