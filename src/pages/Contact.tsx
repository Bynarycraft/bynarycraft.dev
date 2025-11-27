import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you within 24 hours.");
  };

  return (
    <div className="container-custom">
      {/* Hero */}
      <section className="card-portfolio mb-12 text-center max-w-3xl mx-auto">
        <span className="pill-badge mb-6">Contact</span>
        <h1 className="mb-6">Reach out whenever you need a reliable partner.</h1>
        <p className="text-lg text-muted-foreground">
          Telegram, WhatsApp, or email – choose your channel and I will respond within 24 hours.
          For retainers and briefs, the form below helps me prepare accurate timelines faster.
        </p>
      </section>

      {/* Contact Options */}
      <section className="grid md:grid-cols-3 gap-6 mb-12">
        <a
          href="https://t.me/bynarycraft"
          target="_blank"
          rel="noopener noreferrer"
          className="card-portfolio text-center group hover:scale-105 transition-transform"
        >
          <div className="text-5xl mb-4">📱</div>
          <h3 className="text-xl mb-2">Telegram</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Fastest response time
          </p>
          <span className="text-accent group-hover:underline">@bynarycraft</span>
        </a>

        <a
          href="https://wa.me/2349017574838"
          target="_blank"
          rel="noopener noreferrer"
          className="card-portfolio text-center group hover:scale-105 transition-transform"
        >
          <div className="text-5xl mb-4">💬</div>
          <h3 className="text-xl mb-2">WhatsApp</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Direct messaging
          </p>
          <span className="text-accent group-hover:underline">+234 901 757 4838</span>
        </a>

        <a
          href="mailto:chiemekeexcel@gmail.com"
          className="card-portfolio text-center group hover:scale-105 transition-transform"
        >
          <div className="text-5xl mb-4">✉️</div>
          <h3 className="text-xl mb-2">Email</h3>
          <p className="text-muted-foreground text-sm mb-4">
            For detailed inquiries
          </p>
          <span className="text-accent group-hover:underline">chiemekeexcel@gmail.com</span>
        </a>
      </section>

      {/* Contact Form */}
      <section className="max-w-2xl mx-auto">
        <div className="card-portfolio">
          <h2 className="mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  className="bg-background border-border"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="bg-background border-border"
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium mb-2">
                Service Interested In
              </label>
              <select
                id="service"
                className="w-full px-4 py-3 rounded-2xl bg-background border border-border text-foreground"
                required
              >
                <option value="">Select a service</option>
                <option value="fullstack">Full-Stack Development</option>
                <option value="web3">Web3 Development</option>
                <option value="va">Virtual Assistant</option>
                <option value="training">Tech Training</option>
                <option value="community">Community Management</option>
                <option value="consulting">Technical Consulting</option>
              </select>
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-medium mb-2">
                Project Budget
              </label>
              <select
                id="budget"
                className="w-full px-4 py-3 rounded-2xl bg-background border border-border text-foreground"
                required
              >
                <option value="">Select budget range</option>
                <option value="under-5k">Under $5,000</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-plus">$25,000+</option>
                <option value="retainer">Monthly Retainer</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Project Details
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project, timeline, and any specific requirements..."
                rows={6}
                required
                className="bg-background border-border resize-none"
              />
            </div>

            <Button type="submit" className="btn-primary w-full text-lg py-6">
              Send Message →
            </Button>
          </form>
        </div>
      </section>

      {/* Info */}
      <section className="mt-12 text-center">
        <div className="card-portfolio max-w-2xl mx-auto">
          <h3 className="text-xl mb-4">Additional Information</h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>📍 Location: Nigeria · Available for remote, hybrid & on-site projects</p>
            <p>⏰ Response time: Within 24 hours (usually much faster)</p>
            <p>🌍 Time zone: West Africa Time (WAT) / UTC+1</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
