import { Mail, ExternalLink, MapPin } from 'lucide-react'
import Button from '../ui/Button'
import Container from '../ui/Container'

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <Container>
        <div className="reveal max-w-2xl mx-auto text-center space-y-6">
          <h2 className="heading-lg">Interested in the Portable Lab?</h2>
          <p className="text-body">
            Whether you're a university, research lab, or telecom company — reach out to discuss 
            how the F2G Portable Laboratory can fit your needs.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button size="lg" className="gap-2" onClick={() => window.location.href = 'mailto:f2g.telcoacademy@gmail.com'}>
              <Mail className="w-4 h-4" />
              Get in Touch
            </Button>
            <Button size="lg" variant="outline" className="gap-2" onClick={() => window.open('https://github.com/F2G-Telco-Academy', '_blank')}>
              <ExternalLink className="w-4 h-4" />
              View on GitHub
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400 pt-4">
            <MapPin className="w-4 h-4" />
            <span>Yaoundé, Cameroon — PKF Telecommunication Academy</span>
          </div>
        </div>
      </Container>
    </section>
  )
}
