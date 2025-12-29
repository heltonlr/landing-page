import Heading from './Heading'

interface Project {
  title: string
  description: string
  tags: string[]
}

const projects: Project[] = [
  {
    title: 'Design System',
    description: 'A comprehensive design system built for scale, featuring tokens, components, and documentation.',
    tags: ['Figma', 'Tokens', 'Documentation'],
  },
  {
    title: 'Poker Platform',
    description: 'End-to-end UX design for a real-time multiplayer poker platform with millions of users.',
    tags: ['Gaming', 'Real-time', 'Mobile'],
  },
  {
    title: 'Product Dashboard',
    description: 'Analytics dashboard redesign focusing on data visualization and user insights.',
    tags: ['Dashboard', 'Data Viz', 'B2B'],
  },
]

const Work = () => {
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Heading
          size="lg"
          subtitle="A selection of projects I've worked on, showcasing my expertise in Design Systems, Gaming, and Product Design."
          className="mb-12 max-w-2xl"
        >
          Selected Work
        </Heading>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group bg-royal-surface rounded-lg overflow-hidden border border-royal-surface hover:border-royal-accent/30 transition-all cursor-pointer"
            >
              <div className="aspect-video bg-gradient-to-br from-royal-accent/10 to-royal-accent/5 flex items-center justify-center">
                <span className="text-4xl text-royal-accent/30">
                  {index + 1}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-royal-text mb-2 group-hover:text-royal-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-royal-text-muted mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-royal-bg text-royal-text-muted px-3 py-1 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
