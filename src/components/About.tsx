import Heading from './Heading'

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-royal-surface">
      <div className="max-w-6xl mx-auto">
        <Heading size="lg" className="mb-12">
          About Me
        </Heading>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-royal-text-muted mb-6">
              I'm a UX Designer from Brazil, currently making my move to Canada.
              With years of experience in the gaming and poker industry, I've developed
              a deep understanding of creating engaging user experiences at scale.
            </p>

            <p className="text-lg text-royal-text-muted mb-6">
              My passion lies in building Design Systems that empower teams to
              create consistent, accessible, and beautiful products. I believe
              that great design is not just about aesthetics—it's about solving
              real problems for real people.
            </p>

            <p className="text-lg text-royal-text-muted">
              I'm also an advocate for AI-assisted design workflows, using tools
              like Claude and Cursor to enhance productivity without sacrificing
              quality or creativity.
            </p>
          </div>

          <div className="bg-royal-bg p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-royal-text mb-6">
              Quick Facts
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-royal-accent rounded-full" />
                <span className="text-royal-text-muted">Based in Brazil, moving to Canada</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-royal-accent rounded-full" />
                <span className="text-royal-text-muted">Specialized in Design Systems</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-royal-accent rounded-full" />
                <span className="text-royal-text-muted">Gaming & Poker industry experience</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-royal-accent rounded-full" />
                <span className="text-royal-text-muted">AI-first design approach</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
