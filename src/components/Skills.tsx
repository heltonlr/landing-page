import Heading from './Heading'

interface SkillCategory {
  title: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Design',
    skills: ['UI/UX Design', 'Design Systems', 'Prototyping', 'User Research', 'Wireframing', 'Visual Design'],
  },
  {
    title: 'Tools',
    skills: ['Figma', 'Sketch', 'Adobe XD', 'Principle', 'Zeplin', 'Notion'],
  },
  {
    title: 'Technical',
    skills: ['HTML/CSS', 'React Basics', 'Design Tokens', 'Git', 'Responsive Design', 'Accessibility'],
  },
  {
    title: 'AI & Productivity',
    skills: ['Claude', 'Cursor', 'ChatGPT', 'Midjourney', 'AI Workflows', 'Prompt Engineering'],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-royal-surface">
      <div className="max-w-6xl mx-auto">
        <Heading
          size="lg"
          subtitle="A combination of design expertise, technical knowledge, and modern AI-powered tools to deliver exceptional results."
          className="mb-12 max-w-2xl"
        >
          Skills & Tools
        </Heading>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-royal-bg p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-royal-text mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-royal-text-muted flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-royal-accent rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
