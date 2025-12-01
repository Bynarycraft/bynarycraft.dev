import { Button } from "@/components/ui/button";
import { useState } from "react";

const VirtualAssistantServices = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const services = [
    {
      icon: "✉️",
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
      icon: "⚡",
      title: "Tech & AI Support",
      features: [
        "Using tools like Notion, Trello, Canva",
        "AI research & automation assistance",
        "Basic website updates",
        "File organization and cloud management"
      ]
    },
    {
      icon: "✓",
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
      quote: "Excel, a Certified VA with extensive experience as a Personal Assistant, managed my emails and calendar flawlessly. Highly professional and reliable.",
      author: "Cybersecurity Expert",
      role: "Consulting Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      rating: 5
    },
    {
      quote: "Very reliable and proactive. Excel handled my emails, scheduling, and research tasks with impressive accuracy. A true asset to any growing team.",
      author: "Sarah M.",
      role: "Startup Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      rating: 5
    },
    {
      quote: "Professional, fast, and detail-oriented. Highly recommended if you need a tech-savvy VA with proven administrative skills.",
      author: "Michael T.",
      role: "Digital Creator & Podcaster",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      rating: 5
    }
  ];

  const samples = [
    {
      title: "Email Management Sample",
      description: "A structured email sorting and response template used for a client.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop",
      category: "Email"
    },
    {
      title: "Research Report Sample",
      description: "A concise market research document summarizing key data points.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      category: "Research"
    },
    {
      title: "Weekly Social Media Schedule",
      description: "A clean weekly content calendar designed for a small brand.",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&h=300&fit=crop",
      category: "Social Media"
    }
  ];

  const faqs = [
    {
      question: "Do you handle confidential information?",
      answer: "Yes, all data and communication are handled securely and professionally. I prioritize confidentiality and follow best practices for data protection and privacy."
    },
    {
      question: "Can you work across time zones?",
      answer: "Yes, I am flexible and can adjust to your preferred schedule. I can accommodate different time zones and work patterns to support your business needs."
    },
    {
      question: "Which tools do you use?",
      answer: "I work with Notion, Trello, Canva, Google Suite, Microsoft Office, and various AI productivity tools. I'm quick to learn new tools based on your specific requirements."
    },
    {
      question: "What types of projects do you support?",
      answer: "Email management, calendar scheduling, research, social media, administrative tasks, tech/AI support, and more. I'm adaptable and happy to discuss your specific needs."
    },
    {
      question: "How do you ensure quality and deadlines?",
      answer: "Through regular updates, clear communication, and dedicated focus on every task. I maintain detailed records and provide progress reports to ensure transparency and accountability."
    }
  ];

  const achievements = [
    { label: "Certified Virtual Assistant", icon: "🏆" },
    { label: "3+ Years of Executive Support", icon: "💼" },
    { label: "50+ Emails Managed Monthly", icon: "✉️" },
    { label: "20+ Research Reports Delivered", icon: "📊" },
    { label: "15+ Social Media Calendars", icon: "📱" },
    { label: "100% Client Satisfaction", icon: "⭐" }
  ];

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="container-custom">
      {/* Hero Section */}
      <section className="relative mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 rounded-[28px] pointer-events-none" />
        <div className="relative card-portfolio text-center max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="inline-block bg-accent/10 border border-accent/30 rounded-full px-4 py-2">
              <span className="text-accent text-sm font-semibold">Certified VA – Trusted by 3+ startups & creators</span>
            </div>
            <h1 className="mb-4 animate-fade-in-up">Virtual Assistant Services</h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-accent mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Certified Virtual Assistant with 3+ years of professional administrative and executive support experience
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              I help founders, creators, and teams stay organized, productive, and focused by handling daily tasks that take time away from the big picture. Leveraging extensive experience as a Personal Assistant and certified VA expertise, I bring precision, creativity, and efficiency to every task.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Core VA Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            All services delivered by a Certified VA with proven organizational and digital skills.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="card-portfolio animate-fade-in-up hover:scale-105 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-accent font-bold flex-shrink-0">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">My Professional Achievements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Numbers that showcase experience, credibility, and trust.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {achievements.map((achievement, idx) => (
            <div
              key={achievement.label}
              className="card-portfolio text-center animate-fade-in-up hover:scale-105 transition-transform"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <div className="text-4xl mb-3">{achievement.icon}</div>
              <p className="text-sm sm:text-base font-semibold text-foreground">{achievement.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section - Carousel on Mobile */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real feedback from founders, creators, and businesses I've worked with.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="card-portfolio animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-sm">{testimonial.author}</div>
                  <div className="text-xs text-accent">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-muted-foreground italic text-sm leading-relaxed mb-4">
                "{testimonial.quote}"
              </p>
              <div className="flex gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-accent">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="card-portfolio animate-fade-in-up">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={testimonials[testimonialIndex].image}
                alt={testimonials[testimonialIndex].author}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold">{testimonials[testimonialIndex].author}</div>
                <div className="text-sm text-accent">{testimonials[testimonialIndex].role}</div>
              </div>
            </div>
            <p className="text-muted-foreground italic mb-4 leading-relaxed">
              "{testimonials[testimonialIndex].quote}"
            </p>
            <div className="flex gap-0.5 mb-6">
              {Array.from({ length: testimonials[testimonialIndex].rating }).map((_, i) => (
                <span key={i} className="text-accent">★</span>
              ))}
            </div>
            <div className="flex gap-3 justify-center">
              <button
                onClick={prevTestimonial}
                className="px-4 py-2 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
              >
                ← Prev
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setTestimonialIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === testimonialIndex ? "bg-accent w-6" : "bg-border"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="px-4 py-2 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Work Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Sample Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Examples of deliverables and work quality from recent projects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {samples.map((sample, idx) => (
            <div
              key={sample.title}
              className="card-portfolio overflow-hidden group animate-fade-in-up hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4">
                <img
                  src={sample.image}
                  alt={sample.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <button className="bg-accent text-accent-foreground px-6 py-2 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110">
                    View Sample
                  </button>
                </div>
              </div>
              <div className="mb-3">
                <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                  {sample.category}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{sample.title}</h3>
              <p className="text-sm text-muted-foreground">{sample.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Answers to common questions from clients.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="card-portfolio animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <button
                onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                className="w-full text-left flex items-center justify-between hover:text-accent transition-colors"
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <span className="text-2xl text-accent font-light">
                  {expandedFAQ === idx ? "−" : "+"}
                </span>
              </button>
              {expandedFAQ === idx && (
                <div className="mt-4 pt-4 border-t border-border text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="card-portfolio text-center max-w-3xl mx-auto animate-fade-in-up mb-8">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Work Together?</h2>
        <p className="text-lg text-muted-foreground mb-2">
          Reach out to discuss your project and how I can support your business.
        </p>
        <p className="text-accent font-semibold mb-8">
          Let's streamline your workflow — work with a Certified VA who brings years of professional support experience.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
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

        <div className="pt-8 border-t border-border space-y-3 text-sm text-muted-foreground">
          <p><strong>Phone:</strong> +234 901 757 4838</p>
          <p><strong>Email:</strong> chiemekeexcel@gmail.com</p>
        </div>
      </section>
    </div>
  );
};

export default VirtualAssistantServices;
