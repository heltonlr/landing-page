import Button from './Button'
import Heading from './Heading'

const EmailIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
)

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <Heading
          size="lg"
          subtitle="I'm currently open to new opportunities in Canada. Whether you're looking for a UX Designer, Design Systems specialist, or just want to chat about design—I'd love to hear from you."
          align="center"
          className="mb-8"
        >
          Let's Work Together
        </Heading>

        <div className="bg-royal-surface p-8 md:p-12 rounded-lg">
          <p className="text-royal-accent font-medium mb-6">
            Open to opportunities in Canada
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="mailto:heltonlr27@gmail.com">
              <Button
                role="primary"
                variant="accent"
                size="lg"
                icon={<EmailIcon />}
                iconPosition="prefix"
              >
                Send Email
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/heltonramos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                role="secondary"
                variant="accent"
                size="lg"
                icon={<LinkedInIcon />}
                iconPosition="prefix"
              >
                LinkedIn
              </Button>
            </a>
          </div>

          <p className="text-royal-text-muted text-sm">
            Based in Brazil · Available for remote work · Open to relocation
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
