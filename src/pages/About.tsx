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
              <h3 className="text-lg mb-3">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Tailwind CSS", "Next.js", "Vite"].map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg mb-3">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"].map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg mb-3">Web3</h3>
              <div className="flex flex-wrap gap-2">
                {["Solidity", "Foundry", "Ethers.js", "Smart Contracts", "DeFi"].map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
                    {skill}
                  </span>
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
