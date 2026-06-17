import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Button from '../ui/Button'
import Container from '../ui/Container'

type MockupType = 'laptop' | 'phone' | 'none'

const showcaseImages = [
  { src: '/portable-lab-box.jpeg', alt: 'F2G Portable Lab box with iPhone connected to F2Gsol LTE network', mockup: 'none' as MockupType },
  { src: '/phone-lte.jpeg', alt: 'iPhone connected to K48 Telecommunications private LTE network', mockup: 'phone' as MockupType },
  { src: '/setup-overview.jpeg', alt: 'F2G Portable Lab — Full setup with BladeRF, amplifiers and mini-PC', mockup: 'phone' as MockupType },
]

function LaptopMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex items-center justify-center w-full h-full p-6 md:p-10">
      <div className="relative w-full max-w-[80%]">
        <img src="/mockup-laptop.jpeg" alt="" className="w-full h-auto" />
        {/* Screenshot inside the screen area */}
        <img src={src} alt={alt} className="absolute object-cover" style={{ top: '3.5%', left: '11.5%', width: '77%', height: '79%' }} />
      </div>
    </div>
  )
}

function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex items-center justify-center w-full h-full p-6 md:p-10">
      <div className="relative h-[90%] aspect-[9/19.5] bg-black rounded-[40px] p-[7px] shadow-2xl border-[2px] border-gray-700">
        <div className="absolute top-[12px] left-1/2 -translate-x-1/2 w-[80px] h-[22px] bg-black rounded-full z-10" />
        <div className="w-full h-full rounded-[33px] overflow-hidden bg-white">
          <img src={src} alt={alt} className="w-full h-full object-cover object-top" />
        </div>
      </div>
    </div>
  )
}



export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (!isPaused && showcaseImages.length > 1) {
      intervalRef.current = setInterval(() => setCurrentIndex((prev) => (prev + 1) % showcaseImages.length), 4000)
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [isPaused, currentIndex])

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % showcaseImages.length)
  const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + showcaseImages.length) % showcaseImages.length)

  return (
    <section className="pt-28 pb-12 md:pb-16">
      <Container>
        <div className="reveal max-w-[900px] mx-auto text-center space-y-6">
          <h1 className="heading-xl">
            Portable End-to-End Software Defined 4G Network
          </h1>

          <p className="text-body dark:text-gray-300 max-w-2xl mx-auto">
            A complete LTE laboratory in a portable box. Deploy VoLTE, SMS and eSIM services
            with srsRAN 4G and BladeRF SDR — ready for research, teaching, and
            telecom development anywhere.
          </p>

          <div className="flex flex-wrap gap-3 justify-center pt-2">
            <Button size="lg" variant="outline" onClick={() => window.location.href = '#features'}>
              Learn More
            </Button>
          </div>
        </div>

        <div
          className="reveal mt-16 group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="rounded-2xl overflow-hidden border border-card-border dark:border-gray-700 shadow-2xl relative bg-gray-50 dark:bg-gray-900">
            <div className="relative w-full overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <div
                className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {showcaseImages.map((image, idx) => (
                  <div key={idx} className="w-full h-full flex-shrink-0 relative">
                    {image.mockup === 'laptop' && <LaptopMockup src={image.src} alt={image.alt} />}
                    {image.mockup === 'phone' && <PhoneMockup src={image.src} alt={image.alt} />}
                    {image.mockup === 'none' && <img src={image.src} alt={image.alt} className="absolute inset-0 w-full h-full object-contain" />}
                  </div>
                ))}
              </div>
            </div>

            {showcaseImages.length > 1 && (
              <>
                <button onClick={goToPrev} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-card-border dark:border-gray-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" aria-label="Previous image">
                  <ChevronLeft className="w-5 h-5 text-primary dark:text-gray-100" />
                </button>
                <button onClick={goToNext} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-card-border dark:border-gray-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" aria-label="Next image">
                  <ChevronRight className="w-5 h-5 text-primary dark:text-gray-100" />
                </button>
              </>
            )}

            {/* Dots indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {showcaseImages.map((_, idx) => (
                <button key={idx} onClick={() => setCurrentIndex(idx)} className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-accent w-6' : 'bg-gray-400/50'}`} aria-label={`Go to slide ${idx + 1}`} />
              ))}
            </div>
          </div>
        </div>

        <div className="reveal flex justify-center gap-12 mt-14">
          <div className="text-center">
            <div className="text-2xl font-medium tracking-[-0.05em] text-primary dark:text-gray-100">85 Mbps</div>
            <div className="text-xs text-muted dark:text-gray-400 mt-1">Peak Throughput</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-medium tracking-[-0.05em] text-primary dark:text-gray-100">Full IMS</div>
            <div className="text-xs text-muted dark:text-gray-400 mt-1">VoLTE / SMS</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-medium tracking-[-0.05em] text-primary dark:text-gray-100">eSIM</div>
            <div className="text-xs text-muted dark:text-gray-400 mt-1">OTA Provisioning</div>
          </div>
        </div>
      </Container>
    </section>
  )
}
