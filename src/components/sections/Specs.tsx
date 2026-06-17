import Container from '../ui/Container'

const specs = {
  hardware: [
    { label: 'SDR', value: 'BladeRF 2.0 micro' },
    { label: 'Bands', value: 'Band 3 / 7 / 20' },
    { label: 'Bandwidth', value: '10 MHz (50 PRB)' },
    { label: 'MIMO', value: '2×2' },
    { label: 'Peak DL', value: '85 Mbps' },
    { label: 'Amplifiers', value: 'BT-100 (PA) + BT-200 (LNA)' },
  ],
  software: [
    { label: 'Core Network', value: 'Open5GS (Docker)' },
    { label: 'RAN', value: 'srsRAN 4G' },
    { label: 'IMS', value: 'Kamailio + Asterisk + RTPengine' },
    { label: 'Provisioning', value: 'MongoDB + PyHSS + OsmoHLR' },
    { label: 'eSIM', value: 'SM-DP+ (Simlessly / osmo-smdpp)' },
    { label: 'Management', value: 'F2G TelcoLab (Web UI)' },
  ],
}

export default function Specs() {
  return (
    <section id="specs" className="py-20 bg-gray-50 dark:bg-accent">
      <Container>
        <div className="reveal text-center max-w-2xl mx-auto mb-14">
          <h2 className="heading-lg">Technical Specifications</h2>
          <p className="text-body mt-4">Enterprise-grade components in a portable form factor.</p>
        </div>

        <div className="reveal grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {Object.entries(specs).map(([category, items]) => (
            <div key={category} className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-white dark:bg-secondary">
              <div className="px-6 py-3 bg-primary/5 border-b border-gray-200 dark:border-gray-800">
                <h3 className="font-semibold text-primary capitalize">{category}</h3>
              </div>
              <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {items.map((spec) => (
                  <div key={spec.label} className="flex justify-between px-6 py-3 text-sm">
                    <span className="text-gray-500 dark:text-gray-400">{spec.label}</span>
                    <span className="font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
