import TechIconGrid from "@/components/TechIconGrid";

const About = () => {
  return (
    <div className="container-custom">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <section className="card-portfolio mb-8 animate-fade-in-up">
          <span className="pill-badge mb-6">About Me</span>
          <h1 className="mb-6">Excel Chiemeke — Builder, Educator & Community Leader</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a full-stack developer and technology strategist with 10+ years of hands-on experience building digital products, scaling operations, and educating the next generation of tech professionals. My journey started with curiosity and tinkering, evolved into professional software development, and has grown into a passion for creating lasting impact through code, mentorship, and thoughtful automation.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            As founder of De Bynary SchoEx, I've trained 500+ individuals across development, virtual assistance, and community management. I combine technical excellence with operational expertise to solve real-world problems for founders, teams, and organizations.
          </p>
        </section>

        {/* Journey */}
        <section className="card-portfolio mb-8 animate-fade-in-up">
          <h2 className="mb-6">My Professional Journey</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-accent pl-6 py-2 transition-all hover:pl-8">
              <div className="text-accent font-bold mb-2">2014 - 2018: Foundation & Discovery</div>
              <h3 className="text-xl mb-2">Early Exploration</h3>
              <p className="text-muted-foreground">
                Started with HTML, CSS, and JavaScript. Built my first websites and discovered the power of creating digital experiences. This period laid the foundation for everything that followed.
              </p>
            </div>
            
            <div className="border-l-4 border-accent pl-6 py-2 transition-all hover:pl-8">
              <div className="text-accent font-bold mb-2">2019 - 2021: Professional Growth</div>
              <h3 className="text-xl mb-2">Full-Stack Mastery</h3>
              <p className="text-muted-foreground">
                Expanded expertise into full-stack development with React, Node.js, and TypeScript. Started taking on client projects, building production applications, and developing deep understanding of backend systems and database design.
              </p>
            </div>
            
            <div className="border-l-4 border-accent pl-6 py-2 transition-all hover:pl-8">
              <div className="text-accent font-bold mb-2">2022 - Present: Education, Community & Operations</div>
              <h3 className="text-xl mb-2">Teaching & Empowerment</h3>
              <p className="text-muted-foreground">
                Founded De Bynary SchoEx to democratize tech education. Expanded expertise into community management, virtual assistance consulting, and career mentorship. Combined roles as developer, consultant, community leader, and educator to deliver comprehensive solutions for clients and students.
              </p>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="mb-8">
          <h2 className="mb-6 text-center">Core Areas of Expertise</h2>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <div className="card-portfolio hover:scale-105 transition-transform animate-fade-in-up">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl mb-3 font-semibold">Full-Stack Development</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Architecting and building scalable web applications using modern frameworks, best practices, and cutting-edge technologies. Experienced in React, Next.js, Node.js, TypeScript, and comprehensive database design.
              </p>
            </div>
            
            <div className="card-portfolio hover:scale-105 transition-transform animate-fade-in-up">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl mb-3 font-semibold">Virtual Assistance & Operations</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Streamlining operations, automating workflows, managing administrative tasks, and optimizing productivity systems for busy executives and growing teams using proven VA tools and methodologies.
              </p>
            </div>
            
            <div className="card-portfolio hover:scale-105 transition-transform animate-fade-in-up">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl mb-3 font-semibold">Community Management & Moderation</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Building engaged online communities, managing Discord and Telegram servers, implementing moderation strategies, and creating positive community experiences that drive growth and engagement.
              </p>
            </div>
            
            <div className="card-portfolio hover:scale-105 transition-transform animate-fade-in-up">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl mb-3 font-semibold">Technical Education & Mentorship</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Teaching developers, VAs, and community managers through De Bynary SchoEx with hands-on projects, real-world applications, and proven methodologies that drive immediate results.
              </p>
            </div>

            <div className="card-portfolio hover:scale-105 transition-transform animate-fade-in-up">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl mb-3 font-semibold">Cybersecurity & Best Practices</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Strong foundational knowledge in application security, data protection, and industry best practices. Committed to continuous learning with aspirations toward cybersecurity specialization.
              </p>
            </div>

            <div className="card-portfolio hover:scale-105 transition-transform animate-fade-in-up">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-xl mb-3 font-semibold">Technical Content & Writing</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Creating compelling technical documentation, tutorials, guides, and marketing copy that engage and educate developers and tech professionals.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="card-portfolio mb-8 animate-fade-in-up">
          <h2 className="mb-8">Technical Skills & Proficiency</h2>
          <div className="space-y-6">
            {/* Frontend Stack */}
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="text-2xl">🎨</span> Frontend Development
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {[
                  { name: "React", level: "Expert" },
                  { name: "Next.js", level: "Expert" },
                  { name: "TypeScript", level: "Advanced" },
                  { name: "Tailwind CSS", level: "Expert" },
                  { name: "Bootstrap", level: "Advanced" },
                  { name: "JavaScript", level: "Expert" },
                  { name: "Vite", level: "Advanced" },
                  { name: "HTML/CSS", level: "Expert" }
                ].map((skill) => (
                  <div 
                    key={skill.name} 
                    className="card-portfolio p-4 text-center hover:scale-105 transition-transform bg-card/70 border border-accent/10 group"
                  >
                    <div className="text-sm font-medium group-hover:text-accent transition-colors">{skill.name}</div>
                    <div className="text-xs text-muted-foreground mt-1">{skill.level}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Backend Stack */}
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="text-2xl">⚙️</span> Backend & Databases
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {[
                  { name: "Node.js", level: "Expert" },
                  { name: "Python", level: "Advanced" },
                  { name: "PostgreSQL", level: "Advanced" },
                  { name: "MongoDB", level: "Advanced" },
                  { name: "Express.js", level: "Expert" },
                  { name: "REST APIs", level: "Expert" },
                  { name: "Database Design", level: "Advanced" },
                  { name: "Git/Version Control", level: "Expert" }
                ].map((skill) => (
                  <div 
                    key={skill.name} 
                    className="card-portfolio p-4 text-center hover:scale-105 transition-transform bg-card/70 border border-accent/10 group"
                  >
                    <div className="text-sm font-medium group-hover:text-accent transition-colors">{skill.name}</div>
                    <div className="text-xs text-muted-foreground mt-1">{skill.level}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Community & Operations */}
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="text-2xl">🤝</span> Community & Operations
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {[
                  { name: "Community Moderation", level: "Expert" },
                  { name: "Discord Management", level: "Expert" },
                  { name: "Telegram Management", level: "Advanced" },
                  { name: "Member Engagement", level: "Expert" },
                  { name: "Growth Strategy", level: "Advanced" },
                  { name: "Virtual Assistance", level: "Expert" },
                  { name: "Project Management", level: "Advanced" },
                  { name: "Admin Automation", level: "Advanced" }
                ].map((skill) => (
                  <div 
                    key={skill.name} 
                    className="card-portfolio p-4 text-center hover:scale-105 transition-transform bg-card/70 border border-accent/10 group"
                  >
                    <div className="text-sm font-medium group-hover:text-accent transition-colors">{skill.name}</div>
                    <div className="text-xs text-muted-foreground mt-1">{skill.level}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Platforms */}
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="text-2xl">🛠️</span> Tools & Platforms
              </h3>
              {/* @ts-ignore */}
              <TechIconGrid
                items={[
                  { id: "vscode", name: "VS Code", title: "VS Code" },
                  { id: "github", name: "GitHub" },
                  { id: "vercel", name: "Vercel" },
                  { id: "netlify", name: "Netlify" },
                  { id: "notion", name: "Notion" },
                  { id: "calendly", name: "Calendly" },
                  { id: "ai", name: "AI/Prompting", title: "AI & Prompting" },
                  { id: "discord", name: "Discord" }
                ]}
              />
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="text-2xl">💼</span> Professional Competencies
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "Problem Solving",
                  "Communication",
                  "Project Management",
                  "Time Management",
                  "Multitasking",
                  "Attention to Detail",
                  "Growth Mindset",
                  "Working Under Pressure",
                  "Mentorship",
                  "Leadership",
                  "Collaboration",
                  "Adaptability"
                ].map((skill) => (
                  <div 
                    key={skill} 
                    className="p-3 rounded-lg bg-accent/5 border border-accent/20 text-center hover:bg-accent/10 transition-colors"
                  >
                    <div className="text-sm font-medium">{skill}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
