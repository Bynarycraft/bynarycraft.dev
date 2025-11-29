import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Services() {
  const services = [
    {
      icon: "💻",
      title: "Full-Stack Web Development",
      description: "Custom web applications built with modern tech. React, Next.js, TypeScript, Node.js, and PostgreSQL. From concept to production.",
      features: ["Responsive Design", "API Development", "Database Architecture", "Performance Optimization"]
    },
    {
      icon: "⚙️",
      title: "Virtual Assistance & Operations",
      description: "Streamline your business operations. Calendar management, email handling, scheduling, document creation, and workflow automation.",
      features: ["Admin Support", "Calendar Management", "Email Management", "Process Automation"]
    },
    {
      icon: "🤝",
      title: "Community Management & Moderation",
      description: "Build and scale engaged communities. Discord and Telegram moderation, member engagement strategies, and community health management.",
      features: ["Community Moderation", "Engagement Strategy", "Member Support", "Community Growth"]
    },
    {
      icon: "📚",
      title: "Tech Training & Education",
      description: "Transform your team or yourself through De Bynary SchoEx. Beginner tech coaching, digital literacy training, and career guidance.",
      features: ["Digital Literacy", "Career Coaching", "Bootcamps", "1-on-1 Mentorship"]
    },
    {
      icon: "✍️",
      title: "Technical Content Writing",
      description: "Clear, engaging technical documentation and content. Dev blogs, tutorials, product copy, and professional tech guides.",
      features: ["Technical Guides", "Blog Posts", "Documentation", "Product Copy"]
    },
    {
      icon: "🎯",
      title: "Tech Consulting for Beginners",
      description: "Strategic guidance helping aspiring tech talents find their path. Career roadmaps, learning direction, and personalized tech mentorship.",
      features: ["Career Guidance", "Learning Roadmaps", "Tech Mindset", "Onboarding Support"]
    }
  ];

  const testimonials = [
    {
      name: "Aisha O.",
      title: "Product Lead",
      company: "SaaS Startup",
      quote: "Excel delivered a complete landing page in 48 hours and supported our community launch as a moderator. Excellent communication and thoughtful UX decisions.",
      avatar: "👩‍💼"
    },
    {
      name: "Mark D.",
      title: "Founder",
      company: "Tech Agency",
      quote: "SchoEx training helped multiple team members gain confidence working remotely. The training was practical, engaging, and delivered real results.",
      avatar: "👨‍💼"
    },
    {
      name: "Chioma N.",
      title: "Community Manager",
      company: "Web3 Protocol",
      quote: "Excel's expertise in Web3 community management transformed our Discord server. Engagement increased by 300% in just two months.",
      avatar: "👩‍🔬"
    },
    {
      name: "Tunde A.",
      title: "CEO",
      company: "Financial Tech",
      quote: "The VA support has been invaluable. Our operations are now streamlined, and our team has more time to focus on strategic work.",
      avatar: "👨‍💻"
    }
  ];

  return (
    <div className="container-custom">
      {/* Hero */}
      <section className="card-portfolio mb-12 text-center max-w-3xl mx-auto animate-fade-in-up">
        <span className="pill-badge mb-6">Services</span>
        <h1 className="mb-6">Comprehensive Solutions for Your Business & Growth</h1>
        <p className="text-lg text-muted-foreground">
          From building scalable web applications to streamlining operations and educating your team, I offer end-to-end solutions tailored to your needs.
        </p>
      </section>

      {/* Services Grid */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service) => (
            <div key={service.title} className="card-portfolio group hover:scale-105 transition-transform animate-fade-in-up">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
              <div className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm">
                    <span className="text-accent">✓</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here's what people who've worked with me have to say about their experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="card-portfolio animate-fade-in-up">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-accent">{testimonial.title}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                </div>
              </div>
              <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
              <div className="flex gap-1 mt-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-accent">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing/Process */}
      <section className="card-portfolio max-w-3xl mx-auto mb-12 animate-fade-in-up">
        <h2 className="text-3xl font-bold mb-6 text-center">How We Work</h2>
        <div className="grid md:grid-cols-4 gap-2 sm:gap-4">
          <div className="text-center">
            <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-3 text-lg font-bold">
              1
            </div>
            <h3 className="font-semibold mb-2">Consultation</h3>
            <p className="text-xs text-muted-foreground">Understand your goals and requirements</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-3 text-lg font-bold">
              2
            </div>
            <h3 className="font-semibold mb-2">Planning</h3>
            <p className="text-xs text-muted-foreground">Create detailed specs and timelines</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-3 text-lg font-bold">
              3
            </div>
            <h3 className="font-semibold mb-2">Execution</h3>
            <p className="text-xs text-muted-foreground">Build with regular updates and transparency</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-3 text-lg font-bold">
              4
            </div>
            <h3 className="font-semibold mb-2">Delivery</h3>
            <p className="text-xs text-muted-foreground">Launch and ongoing support</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="card-portfolio text-center max-w-2xl mx-auto animate-fade-in-up">
        <h2 className="mb-4">Ready to get started?</h2>
        <p className="text-muted-foreground mb-6">
          Let's discuss your project or training needs and find the perfect solution.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button className="btn-primary w-full sm:w-auto">
              Start a Project →
            </Button>
          </Link>
          <a href="https://t.me/bynarycraft" target="_blank" rel="noopener noreferrer">
            <Button className="btn-secondary w-full sm:w-auto">
              Chat on Telegram
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
