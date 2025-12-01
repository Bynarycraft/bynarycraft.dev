import { Button } from "@/components/ui/button";

const VirtualAssistantServices = () => {
  const services = [
    {
      icon: "📧",
      title: "Email & Communication Management",
      features: [
        "Inbox sorting & prioritization",
        "Responding to routine emails",
        "Drafting professional messages",
        "Scheduling follow-ups"
      ]
    },
    {
      icon: "📅",
      title: "Calendar & Scheduling",
      features: [
        "Meeting coordination",
        "Appointment reminders",
        "Event planning support",
        "Google Calendar / Outlook management"
      ]
    },
    {
      icon: "📊",
      title: "Research & Documentation",
      features: [
        "Market research",
        "Data entry & organization",
        "Report formatting",
        "PowerPoint, Word & Excel document creation"
      ]
    },
    {
      icon: "📱",
      title: "Social Media Assistance",
      features: [
        "Content scheduling",
        "Basic graphics",
        "Caption writing",
        "Performance tracking"
      ]
    },
    {
      icon: "🤖",
      title: "Tech & AI Support",
      features: [
        "Using tools like Notion, Trello, Canva",
        "AI research & automation assistance",
        "Basic website updates",
        "File organization and cloud management"
      ]
    },
    {
      icon: "🧮",
      title: "Administrative Support",
      features: [
        "Transcription",
        "File conversion",
        "Digital filing systems",
        "Task tracking & reminders"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "Excel supported my cybersecurity consulting operations for months. His dedication, organization, and communication skills made my workflow extremely smooth. I never had a single complaint.",
      author: "Cybersecurity Expert",
      avatar: "👨‍💼"
    },
    {
      quote: "Very reliable and proactive. Excel handled my emails, scheduling, and research tasks with impressive accuracy.",
      author: "Startup Founder",
      avatar: "👨‍🚀"
    },
    {
      quote: "Professional, fast, and detail-oriented. Highly recommended if you need a tech-savvy VA.",
      author: "Digital Creator",
      avatar: "👩‍💻"
    }
  ];

  const samples = [
    {
      title: "Email Management Sample",
      description: "A structured email sorting and response template used for a client.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop"
    },
    {
      title: "Research Report Sample",
      description: "A concise market research document summarizing key data points.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
    },
    {
      title: "Weekly Social Media Schedule",
      description: "A clean weekly content calendar designed for a small brand.",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="container-custom">
      {/* Hero Section */}
      <section className="card-portfolio mb-12 text-center max-w-3xl mx-auto animate-fade-in-up">
        <span className="pill-badge mb-6">Virtual Assistant</span>
        <h1 className="mb-6">Virtual Assistant Services</h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-muted-foreground mb-6">
          Professional Support for Busy Founders, Creators & Businesses
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          I help individuals and teams stay organized, productive, and focused by handling the daily tasks that take time away from the big picture. With a strong background in tech, web development, and digital communication, I bring both precision and creativity into every task.
        </p>
      </section>

      {/* Services Grid */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service) => (
            <div key={service.title} className="card-portfolio animate-fade-in-up">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-accent font-bold">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">What Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real feedback from founders, creators, and businesses I've worked with.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="card-portfolio animate-fade-in-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div className="flex-1">
                  <div className="font-semibold text-sm">{testimonial.author}</div>
                </div>
              </div>
              <p className="text-muted-foreground italic text-sm leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex gap-1 mt-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-accent">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sample Work Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Sample Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Examples of deliverables and work quality from recent projects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {samples.map((sample) => (
            <div key={sample.title} className="card-portfolio overflow-hidden group animate-fade-in-up hover:scale-105 transition-transform">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4">
                <img
                  src={sample.image}
                  alt={sample.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{sample.title}</h3>
              <p className="text-sm text-muted-foreground">{sample.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="card-portfolio text-center max-w-2xl mx-auto animate-fade-in-up mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Work Together?</h2>
        <p className="text-muted-foreground mb-8">
          Reach me directly to discuss your project and how I can support your business.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a href="https://wa.me/2349017574838" target="_blank" rel="noopener noreferrer">
            <Button className="btn-primary w-full sm:w-auto">
              Chat on WhatsApp <span aria-hidden="true">→</span>
            </Button>
          </a>
          <a href="mailto:chiemekeexcel@gmail.com">
            <Button className="btn-secondary w-full sm:w-auto">
              Send Email <span aria-hidden="true">→</span>
            </Button>
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-border space-y-2 text-sm text-muted-foreground">
          <p><strong>Phone:</strong> +234 901 757 4838</p>
          <p><strong>Email:</strong> chiemekeexcel@gmail.com</p>
        </div>
      </section>
    </div>
  );
};

export default VirtualAssistantServices;
