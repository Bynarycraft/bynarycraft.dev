import React from "react";

interface TechItem {
  id?: string;
  name: string;
  title?: string;
}

type Props = {
  items: TechItem[];
};

const TechIconGrid: React.FC<Props> = ({ items }) => {
  const icons: Record<string, string> = {
    "React": "⚛️",
    "Next.js": "▲",
    "TypeScript": "𝐓",
    "Tailwind": "🎨",
    "Bootstrap": "🅱️",
    "JavaScript": "JS",
    "Vite": "⚡",
    "HTML/CSS": "🏗️",
    "Node.js": "⬢",
    "Python": "🐍",
    "PostgreSQL": "🗄️",
    "MongoDB": "🍃",
    "Express.js": "E",
    "REST APIs": "🔗",
    "Database Design": "🏛️",
    "Git": "𝘨",
    "Discord": "💬",
    "Telegram": "✈️",
    "Community Ops": "👥",
    "Moderation": "🛡️",
    "Growth Strategy": "📈",
    "Member Support": "🤝",
    "Engagement": "🎯",
    "Analytics": "📊",
    "Notion": "📝",
    "Calendly": "📅",
    "Google Workspace": "🔤",
    "Zapier": "⚙️",
    "Trello": "📌",
    "Automation": "🤖",
    "Email Mgmt": "📧",
    "Admin Skills": "✓",
    "VS Code": "💻",
    "GitHub": "🐙",
    "Vercel": "▲",
    "Netlify": "🔷",
    "Terminal": "❯",
    "AI Tools": "🧠",
    "Prompting": "💡",
    "AI/Prompting": "💡",
  };

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-4">
      {items.map((item) => {
        const key = item.id || item.name;
        const icon = icons[item.name] || "🔧";

        return (
          <div
            key={key}
            className="flex flex-col items-center justify-center gap-2 text-center p-3 sm:p-4 rounded-xl backdrop-blur-md bg-gradient-to-br from-card/40 to-card/20 border border-accent/10 hover:border-accent/30 hover:from-card/50 hover:to-card/30 transition-all duration-300 hover:scale-105 shadow-sm group touch-target"
            title={item.title || item.name}
            role="listitem"
          >
            <div className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform">
              {icon}
            </div>
            <div className="text-xs sm:text-sm font-medium text-muted-foreground group-hover:text-accent transition-colors">
              {item.name}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TechIconGrid;
