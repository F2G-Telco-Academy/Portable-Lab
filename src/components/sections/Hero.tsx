import { useState, useEffect, useRef } from 'react'
import { PlayCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import Button from '../ui/Button'
import Container from '../ui/Container'
import VideoModal from '../ui/VideoModal'

const showcaseImages = [
  { src: '/photo1_overall_setup.png', alt: 'F2G Portable Lab — Full setup with BladeRF, amplifiers and mini-PC' },
  { src: '/photo2_bladerf_closeup.png', alt: 'BladeRF 2.0 micro SDR with BT-100/BT-200 bias-tee amplifiers' },
  { src: '/photo11_phone_lte.png', alt: 'Smartphone connected to the private LTE network' },
  { src: '/room.jpeg', alt: 'F2G Telecom Lab workspace' },
]

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (!isPaused && showcaseImages.length > 1) {
      intervalRef.current = setInterval(() => setCurrentIndex((prev) => (prev + 1) % showcaseImages.length), 3000)
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
            A complete LTE laboratory in a portable box. Deploy VoLTE, SMS, USSD and eSIM services
            with srsRAN 4G and BladeRF SDR — ready for research, teaching, and
            telecom development anywhere.
          </p>

          <div className="flex flex-wrap gap-3 justify-center pt-2">
            <Button size="lg" onClick={() => setIsVideoOpen(true)} className="gap-2">
              <PlayCircle className="w-4 h-4" />
              Watch Demo
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.location.href = '#features'}>
              Learn More
            </Button>
          </div>
        </div>

        <div
          className="reveal mt-16 group"
          style={{ perspective: '2000px' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="rounded-2xl overflow-hidden border border-card-border dark:border-gray-700 shadow-2xl relative bg-white dark:bg-gray-900"
            style={{ transform: 'rotateX(4deg)', transformOrigin: 'center bottom' }}
          >
            <div className="relative w-full overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <div
                className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {showcaseImages.map((image, idx) => (
                  <div key={idx} className="w-full h-full flex-shrink-0 relative">
                    <img src={image.src} alt={image.alt} className="absolute inset-0 w-full h-full object-contain" />
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
          </div>
        </div>

        <div className="reveal flex justify-center gap-12 mt-14">
          <div className="text-center">
            <div className="text-2xl font-medium tracking-[-0.05em] text-primary dark:text-gray-100">85 Mbps</div>
            <div className="text-xs text-muted dark:text-gray-400 mt-1">Peak Throughput</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-medium tracking-[-0.05em] text-primary dark:text-gray-100">Full IMS</div>
            <div className="text-xs text-muted dark:text-gray-400 mt-1">VoLTE / SMS / USSD</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-medium tracking-[-0.05em] text-primary dark:text-gray-100">eSIM</div>
            <div className="text-xs text-muted dark:text-gray-400 mt-1">OTA Provisioning</div>
          </div>
        </div>
      </Container>

      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </section>
  )
}
