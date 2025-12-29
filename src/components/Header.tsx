import Button from './Button'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-royal-bg/80 backdrop-blur-sm border-b border-royal-surface">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-royal-text">
          Helton
        </a>

        <ul className="hidden md:flex items-center gap-8">
          <li>
            <a href="#about" className="text-royal-text-muted hover:text-royal-text transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#work" className="text-royal-text-muted hover:text-royal-text transition-colors">
              Work
            </a>
          </li>
          <li>
            <a href="#skills" className="text-royal-text-muted hover:text-royal-text transition-colors">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="text-royal-text-muted hover:text-royal-text transition-colors">
              Contact
            </a>
          </li>
        </ul>

        <Button
          role="primary"
          variant="accent"
          size="sm"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Let's Talk
        </Button>
      </nav>
    </header>
  )
}

export default Header
