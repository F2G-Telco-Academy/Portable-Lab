import { Mail } from 'lucide-react'
import Button from '../ui/Button'
import Container from '../ui/Container'

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20">
      <Container>
        <div className="reveal max-w-2xl mx-auto text-center space-y-6">
          <p className="section-label">Get Started</p>
          <h2 className="heading-lg">Ready to deploy your own 4G network?</h2>
          <p className="text-body dark:text-gray-300">
            Join telecom professionals already using the Portable Lab for research, training, and development.
            Get in touch to learn more.
          </p>
          <div className="flex flex-wrap gap-3 justify-center pt-2">
            <Button size="lg" onClick={() => window.location.href = 'http://www.f2gsolutions.com/'} className="gap-2">
              <Mail className="w-4 h-4" />
              Contact Us
            </Button>
          </div>
          <p className="text-xs text-muted dark:text-gray-400 pt-4">BladeRF 2.0 micro + BT-100/BT-200 amplifiers · srsRAN 4G · 15 Docker containers · Open5GS + Kamailio IMS</p>
        </div>
      </Container>
    </section>
  )
}
