import Button from './Button'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-royal-text-muted mb-4 tracking-wide uppercase text-sm">
          UX Designer · Design Systems · AI Product Builder
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-royal-text mb-6 leading-tight">
          Designing products that{' '}
          <span className="text-royal-accent">
            scale
          </span>
        </h1>

        <p className="text-xl text-royal-text-muted mb-8 max-w-2xl mx-auto">
          UX Designer with expertise in Design Systems and Gaming products.
          Currently open to opportunities in Canada.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            role="primary"
            variant="accent"
            size="lg"
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
          <Button
            role="secondary"
            variant="accent"
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
