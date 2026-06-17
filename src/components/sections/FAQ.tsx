import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Container from '../ui/Container'
import { cn } from '../../lib/utils'

const faqs = [
  { q: 'What frequency bands are supported?', a: 'Band 3 (1800 MHz), Band 7 (2600 MHz), and Band 20 (800 MHz). The default configuration uses Band 3 with EARFCN 1450.' },
  { q: 'How many UEs can connect simultaneously?', a: 'The system supports up to 10 concurrent UE connections with full IMS services (VoLTE, SMS, USSD).' },
  { q: 'Do I need a license to operate?', a: 'The lab operates at very low power (indoor range). For outdoor/higher power use, consult your local spectrum regulator.' },
  { q: 'Can I provision eSIM devices?', a: 'Yes. The system integrates with Simlessly (GSMA-certified SM-DP+) for remote SIM provisioning on commercial phones.' },
  { q: 'What is the coverage range?', a: 'With BT-100/BT-200 amplifiers: ~50m indoors, ~200m line-of-sight outdoors. Without amplifiers: ~10-15m.' },
  { q: 'Who built this?', a: 'Product owners: Djoum Arnaud and Kamga Arnold, at F2G Telco Academy / PKF Telecommunication Academy, Cameroon.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-accent">
      <Container>
        <div className="reveal text-center max-w-2xl mx-auto mb-14">
          <h2 className="heading-lg">Frequently Asked Questions</h2>
        </div>

        <div className="reveal max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-secondary overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-4 text-left font-medium text-sm hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {faq.q}
                <ChevronDown className={cn('w-4 h-4 text-gray-400 transition-transform', open === i && 'rotate-180')} />
              </button>
              {open === i && (
                <div className="px-4 pb-4 text-sm text-gray-600 dark:text-gray-400">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
