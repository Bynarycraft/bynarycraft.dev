const About = () => {
  return (
    <div className="container-custom">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <section className="card-portfolio mb-8">
          <span className="pill-badge mb-6">About Me</span>
          <h1 className="mb-6">Hello, I'm Excel Chiemeke.</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I grew up tearing electronics apart out of curiosity, discovered code in 2014, and have spent the last decade 
            helping founders, agencies, and teams bring ideas to life. From building Web3 dashboards to managing communities, 
            I thrive on solving complex problems with elegant solutions.
          </p>
        </section>

        {/* Journey */}
        <section className="card-portfolio mb-8">
          <h2 className="mb-6">My Journey</h2>
          <div className="space-y-8">
            <div className="border-l-2 border-accent pl-6">
              <div className="text-accent font-bold mb-2">2014 - 2018</div>
              <h3 className="text-xl mb-2">Discovery & Foundation</h3>
              <p className="text-muted-foreground">
                Started with HTML, CSS, and JavaScript. Built my first websites and fell in love with creating digital experiences.
              </p>
            </div>
            
            <div className="border-l-2 border-accent pl-6">
              <div className="text-accent font-bold mb-2">2019 - 2021</div>
              <h3 className="text-xl mb-2">Professional Growth</h3>
              <p className="text-muted-foreground">
                Expanded into full-stack development with React and Node.js. Started taking on client projects and building real-world applications.
              </p>
            </div>
            
            <div className="border-l-2 border-accent pl-6">
              <div className="text-accent font-bold mb-2">2022 - Present</div>
              <h3 className="text-xl mb-2">Web3 & Education</h3>
              <p className="text-muted-foreground">
                Dove into Web3 technologies, smart contracts, and DeFi. Founded De Bynary SchoEx to train the next generation of developers.
              </p>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="mb-8">
          <h2 className="mb-6 text-center">Areas of Expertise</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-portfolio">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl mb-3">Full-Stack Development</h3>
              <p className="text-muted-foreground text-sm">
                Building scalable web applications with modern frameworks and best practices. React, Node.js, TypeScript, and more.
              </p>
            </div>
            
            <div className="card-portfolio">
              <div className="text-3xl mb-4">⚙️</div>
              <h3 className="text-xl mb-3">Virtual Assistant Services</h3>
              <p className="text-muted-foreground text-sm">
                Streamlining operations, managing workflows, and automating processes for busy founders and executives.
              </p>
            </div>
            
            <div className="card-portfolio">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-xl mb-3">Web3 & Blockchain</h3>
              <p className="text-muted-foreground text-sm">
                Smart contract development with Solidity, DeFi applications, and community management in crypto spaces.
              </p>
            </div>
            
            <div className="card-portfolio">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="text-xl mb-3">Tech Education</h3>
              <p className="text-muted-foreground text-sm">
                Training developers and VAs through De Bynary SchoEx with hands-on projects and real-world applications.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="card-portfolio">
          <h2 className="mb-6">Technical Skills</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg mb-4">Frontend</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {[
                  { name: "React", icon: "⚛️" },
                  { name: "TypeScript", icon: "🔷" },
                  { name: "Tailwind", icon: "🎨" },
                  { name: "Next.js", icon: "▲" },
                  { name: "Vite", icon: "⚡" }
                ].map((skill) => (
                  <div 
                    key={skill.name} 
                    className="card-portfolio p-4 text-center hover:scale-105 transition-transform bg-card border-accent/20"
                  >
                    <div className="text-2xl mb-2">{skill.icon}</div>
                    <div className="text-xs font-medium">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg mb-4">Backend</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {[
                  { name: "Node.js", icon: "🟢" },
                  { name: "Express", icon: "🚀" },
                  { name: "PostgreSQL", icon: "🐘" },
                  { name: "MongoDB", icon: "🍃" },
                  { name: "REST APIs", icon: "🔌" }
                ].map((skill) => (
                  <div 
                    key={skill.name} 
                    className="card-portfolio p-4 text-center hover:scale-105 transition-transform bg-card border-accent/20"
                  >
                    <div className="text-2xl mb-2">{skill.icon}</div>
                    <div className="text-xs font-medium">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg mb-4">Web3</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {[
                  { name: "Solidity", icon: "💎" },
                  { name: "Foundry", icon: "🔨" },
                  { name: "Ethers.js", icon: "📡" },
                  { name: "Smart Contracts", icon: "📜" },
                  { name: "DeFi", icon: "💰" }
                ].map((skill) => (
                  <div 
                    key={skill.name} 
                    className="card-portfolio p-4 text-center hover:scale-105 transition-transform bg-card border-accent/20"
                  >
                    <div className="text-2xl mb-2">{skill.icon}</div>
                    <div className="text-xs font-medium">{skill.name}</div>
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
