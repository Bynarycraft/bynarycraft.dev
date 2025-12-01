import { Button } from "@/components/ui/button";
import schoexLogo from "@/assets/realogo.jpg";

const SchoEx = () => {
  const programs = [
    {
      icon: "💻",
      title: "Computer Fundamentals Course",
      duration: "4 weeks",
      description: "From zero to hero. Learn computer basics, typing, operating systems, and essential software skills.",
      topics: ["Typing & Keyboard", "Operating Systems", "File Management", "Internet Basics", "Email Setup"]
    },
    {
      icon: "📊",
      title: "Microsoft Office Mastery",
      duration: "6 weeks",
      description: "Master Excel, Word, PowerPoint, and Access. Professional-level skills for office work.",
      topics: ["Excel Advanced", "Word Pro", "PowerPoint Design", "Access Basics", "Data Analysis"]
    },
    {
      icon: "🎯",
      title: "Beginner Tech Advisory",
      duration: "Ongoing",
      description: "Helping aspiring tech talents find direction, clarity, and confidence in their journey.",
      topics: ["Personalized Roadmaps", "Career Guidance", "Tech Mindset", "Tooling & Resources", "Tech Onboarding"]
    },
    {
      icon: "🤝",
      title: "Community Management Essentials",
      duration: "6 weeks",
      description: "Build and manage engaged online communities. Discord, Telegram, and community growth strategies.",
      topics: ["Community Ops", "Discord Mastery", "Engagement Strategies", "Member Support", "Growth Tactics"]
    },
    {
      icon: "📱",
      title: "AI & Productivity Automation",
      duration: "4 weeks",
      description: "Leverage AI tools and automation. ChatGPT, Zapier, Make, and workflow optimization.",
      topics: ["AI Prompting", "Workflow Automation", "AI Tools", "Productivity Stacks", "Data Protection"]
    },
    {
      icon: "🚀",
      title: "Digital Literacy Bootcamp",
      duration: "8 weeks",
      description: "Comprehensive digital skills training for teens and adults. From Internet basics to digital citizenship.",
      topics: ["Digital Safety", "Email & Cloud", "Online Research", "Digital Etiquette", "Cybersecurity Basics"]
    }
  ];

  const stats = [
    { label: "Students Trained", value: "500+", icon: "👥" },
    { label: "Success Rate", value: "95%", icon: "✓" },
    { label: "Career Placements", value: "400+", icon: "💼" },
    { label: "Years in Education", value: "5+", icon: "📚" }
  ];

  return (
    <div className="container-custom">
      {/* Hero */}
      <section className="card-portfolio mb-12 animate-fade-in-up">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div>
            <span className="pill-badge mb-6">De Bynary SchoEx</span>
            <h1 className="mb-4">School of Excellence</h1>
            
            <div className="mb-6 p-4 rounded-lg bg-accent/5 border border-accent/20">
              <p className="text-muted-foreground italic">
                <strong>De Bynary SchoEx (School of Excellence)</strong> is a digital learning initiative designed to help beginners develop strong foundational skills in technology. Our mission is to empower teens, youths, and adults with practical digital literacy, computer proficiency, and the confidence needed to navigate the modern tech world.
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground mb-6">
              Democratizing tech education. We offer comprehensive digital literacy training, computer fundamentals, and tech advisory programs designed to empower learners at every level.
            </p>
            <p className="text-muted-foreground mb-6">
              At SchoEx, you're not just learning theory — you're building skills that matter. From computer basics to advanced digital proficiency, we bridge the gap between aspiration and achievement.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:debynaryschoex@gmail.com">
                <Button className="btn-primary">Enroll Now</Button>
              </a>
              <a href="https://t.me/bynarycraft" target="_blank" rel="noopener noreferrer">
                <Button className="btn-secondary">Ask Questions</Button>
              </a>
            </div>
          </div>
          <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg ring-1 ring-border">
            <img
              src={schoexLogo}
              alt="De Bynary SchoEx"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-16">
        {stats.map((stat) => (
          <div key={stat.label} className="card-portfolio text-center animate-fade-in-up">
            <div className="text-4xl mb-3">{stat.icon}</div>
            <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Programs */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Training Programs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive, hands-on courses designed to take you from beginner to professional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {programs.map((program) => (
            <div key={program.title} className="card-portfolio hover:scale-105 transition-transform animate-fade-in-up">
              <div className="text-5xl mb-4">{program.icon}</div>
              <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium mb-3">
                {program.duration}
              </div>
              <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{program.description}</p>
              <div className="space-y-1 mb-4">
                {program.topics.map((topic) => (
                  <div key={topic} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-accent">·</span>
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="card-portfolio mb-16 animate-fade-in-up">
        <h2 className="mb-8 text-center">Why Choose De Bynary SchoEx?</h2>
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">✓</div>
              <div>
                <h3 className="font-semibold mb-2">Practical, Project-Based Learning</h3>
                <p className="text-muted-foreground text-sm">Build real projects. Learn by doing. Not theory-heavy lectures.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">✓</div>
              <div>
                <h3 className="font-semibold mb-2">Expert Instructors</h3>
                <p className="text-muted-foreground text-sm">Learn from industry professionals with real-world experience.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">✓</div>
              <div>
                <h3 className="font-semibold mb-2">Career-Focused Training</h3>
                <p className="text-muted-foreground text-sm">We prepare you for employment and professional growth.</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">✓</div>
              <div>
                <h3 className="font-semibold mb-2">Affordable & Flexible</h3>
                <p className="text-muted-foreground text-sm">Flexible payment plans and schedules that fit your lifestyle.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">✓</div>
              <div>
                <h3 className="font-semibold mb-2">Lifetime Support</h3>
                <p className="text-muted-foreground text-sm">Join our community. Get ongoing support and mentorship.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">✓</div>
              <div>
                <h3 className="font-semibold mb-2">Job Placement Assistance</h3>
                <p className="text-muted-foreground text-sm">We help connect graduates with career opportunities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="card-portfolio mb-16 animate-fade-in-up">
        <h2 className="mb-6 text-center">What You'll Learn</h2>
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="text-2xl">💻</span> Digital Literacy
            </h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• Computer Basics & Fundamentals</li>
              <li>• Operating Systems Mastery</li>
              <li>• Internet Safety & Etiquette</li>
              <li>• Email & Communication Tools</li>
              <li>• File Management & Organization</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="text-2xl">📊</span> Office & Productivity
            </h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• Microsoft Office Suite (Word, Excel, PowerPoint)</li>
              <li>• Data Entry & Spreadsheet Skills</li>
              <li>• Document Formatting & Presentation</li>
              <li>• Productivity Tools (Notion, Trello)</li>
              <li>• Time Management & Organization</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="text-2xl">🎓</span> Career Preparation
            </h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• Tech Career Guidance & Mentorship</li>
              <li>• Resume & Portfolio Building</li>
              <li>• Interview Preparation</li>
              <li>• Digital Citizenship & Cybersecurity</li>
              <li>• Continuous Learning Pathways</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="card-portfolio text-center animate-fade-in-up">
        <h2 className="mb-4">Ready to Start Your Journey?</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Whether you're a complete beginner or looking to advance your skills, we have a program for you. Start transforming your career today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:debynaryschoex@gmail.com">
            <Button className="btn-primary w-full sm:w-auto">
              Enroll in a Course
            </Button>
          </a>
          <a href="https://t.me/bynarycraft" target="_blank" rel="noopener noreferrer">
            <Button className="btn-secondary w-full sm:w-auto">
              Schedule a Chat
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default SchoEx;
