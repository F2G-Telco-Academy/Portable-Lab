import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Container from '../ui/Container'
import { cn } from '../../lib/utils'

const faqs = [
  { question: 'What frequency band is used?', answer: 'Band 3 (1800 MHz) with EARFCN 1450 (DL 1830 MHz). The system uses srsRAN 4G with a BladeRF 2.0 micro SDR.' },
  { question: 'What antenna configuration is supported?', answer: 'SISO (single antenna TX/RX). The BladeRF driver in srsRAN 4G does not currently support MIMO 2x2. BT-100 (PA) and BT-200 (LNA) bias-tee amplifiers extend range.' },
  { question: 'Can I provision eSIM devices?', answer: 'Yes. Profiles are created with pySim, uploaded to Simlessly (GSMA-certified SM-DP+), and downloaded to commercial phones via QR code. VoLTE works on provisioned eSIMs.' },
  { question: 'What services are available?', answer: 'Full VoLTE calls (Kamailio IMS + Asterisk), SMS (SMSC), USSD interactive services, and standard LTE data connectivity.' },
  { question: 'What is the network architecture?', answer: '15 Docker containers: Open5GS EPC (MME, SGW, UPF, HSS, PCRF), Kamailio IMS (P/I/S-CSCF), PyHSS, Asterisk, RTPengine, SMSC, OsmoHLR, MongoDB.' },
  { question: 'Who built this?', answer: 'F2G-SOLUTIONS — a telecom R&D lab based in Cameroon focused on practical telecom education and development.' },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="border-b border-card-border dark:border-gray-700">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full py-5 px-1 text-left flex items-center justify-between gap-4">
        <span className="text-[15px] font-medium text-primary dark:text-gray-100 tracking-[-0.03em]">{question}</span>
        <ChevronDown className={cn('w-4 h-4 text-muted dark:text-gray-400 flex-shrink-0 transition-transform duration-300', isOpen && 'rotate-180')} />
      </button>
      <div className={cn('overflow-hidden transition-all duration-300', isOpen ? 'max-h-60 pb-5' : 'max-h-0')}>
        <p className="text-xs text-muted dark:text-gray-400 leading-relaxed px-1">{answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-12 md:py-16">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="reveal text-center mb-8 md:mb-10 space-y-4">
            <p className="section-label">FAQ</p>
            <h2 className="heading-lg dark:text-gray-100">Frequently Asked Questions</h2>
          </div>
          <div className="reveal">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
