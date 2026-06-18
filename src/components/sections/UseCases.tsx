import { GraduationCap, Building2, Radio, Wrench } from 'lucide-react'
import Container from '../ui/Container'

const useCases = [
  { icon: GraduationCap, title: 'Telecom Training', description: 'Hands-on LTE/IMS education for students and professionals.', features: ['Live protocol observation', 'Call flow visualization', 'Network parameter tuning', 'Real UE attachment'] },
  { icon: Building2, title: 'R&D Labs', description: 'Prototype and test telecom features without commercial infrastructure.', features: ['VoLTE call testing', 'SMS service development', 'eSIM provisioning R&D', 'Custom EPC configurations'] },
  { icon: Radio, title: 'Field Testing', description: 'Portable deployment for coverage testing and demonstrations.', features: ['Battery-powered operation', 'Amplified RF output', 'Multi-band support', 'GPS-tagged measurements'] },
  { icon: Wrench, title: 'Device Certification', description: 'Test UE behavior against a controlled network environment.', features: ['Attach/detach scenarios', 'Handover simulation', 'VoLTE interop testing', 'SMS validation'] },
]

export default function UseCases() {
  return (
    <section id="use-cases" className="py-12 md:py-16">
      <Container>
        <div className="reveal text-center mb-10 md:mb-12 space-y-4">
          <p className="section-label">Use Cases</p>
          <h2 className="heading-lg dark:text-gray-100">Built for telecom professionals</h2>
          <p className="text-body dark:text-gray-300 max-w-xl mx-auto">
            Whether you're teaching, researching, or testing — the Portable Lab adapts to your workflow.
          </p>
        </div>

        <div className="reveal-children grid md:grid-cols-2 gap-5">
          {useCases.map((useCase, idx) => (
            <div key={idx} className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-card-border dark:border-gray-700 p-6 space-y-4 hover:bg-white dark:hover:bg-gray-800 hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white dark:bg-gray-900 flex items-center justify-center flex-shrink-0 border border-card-border dark:border-gray-700">
                  <useCase.icon className="w-5 h-5 text-accent dark:text-[#8BADB9]" />
                </div>
                <div>
                  <h3 className="text-[15px] font-medium text-primary dark:text-gray-100 tracking-heading-sm">{useCase.title}</h3>
                  <p className="text-xs text-muted dark:text-gray-400 mt-1">{useCase.description}</p>
                </div>
              </div>
              <ul className="space-y-2 pl-14">
                {useCase.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2 text-xs text-muted dark:text-gray-400">
                    <span className="w-1 h-1 rounded-full bg-accent dark:bg-[#8BADB9] flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
