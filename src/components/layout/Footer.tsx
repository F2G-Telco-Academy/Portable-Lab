import Container from '../ui/Container'

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-accent border-t border-gray-200 dark:border-gray-800 py-12">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <img src="/f2g_logo.png" alt="F2G" className="h-6 w-6" />
            <span className="font-semibold">F2G Telco Academy</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} F2G-SOLUTIONS. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
            <a href="mailto:f2g.telcoacademy@gmail.com" className="hover:text-primary transition-colors">Email</a>
            <a href="https://github.com/F2G-Telco-Academy" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">GitHub</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
