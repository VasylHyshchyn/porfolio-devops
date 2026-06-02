import Header from "./components/Header/Header"
import ProjectList from "./components/ProjectList/ProjectList";
import type Project from "./types";
import Dashboard from "./components/Dashboard/Dashboard";

const projects: Project[] = [
  {
    id: 1,
    title: "Nordic Finance Dashboard",
    description: "Analytics dashboard for tracking financial KPIs in real time.",
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    githubURL: "https://github.com/example/nordic-finance-dashboard",
    demoURL: "https://demo.example.com/nordic-finance",
    createdAt: "2025-03-25"
  },
  {
    id: 2,
    title: "Atlas Booking System",
    description: "Full-stack booking platform for managing reservations.",
    techStack: ["Next.js", "Prisma", "Stripe", "TailwindCSS"],
    githubURL: "https://github.com/example/atlas-booking",
    demoURL: "https://atlas-booking.demo.com",
    createdAt: "2025-01-18"
  },
  {
    id: 3,
    title: "Sage CMS",
    description: "Headless CMS for managing dynamic content at scale.",
    techStack: ["React", "GraphQL", "Node.js", "MongoDB"],
    githubURL: "https://github.com/example/sage-cms",
    demoURL: "https://sage-cms.demo.com",
    createdAt: "2024-11-10"
  },
  {
    id: 4,
    title: "Verdant Realtime Chat",
    description: "Real-time chat application with WebSocket architecture.",
    techStack: ["TypeScript", "Socket.io", "Redis", "Express"],
    githubURL: "https://github.com/example/verdant-chat",
    demoURL: "https://verdant-chat.demo.com",
    createdAt: "2024-09-05"
  },
  {
    id: 5,
    title: "Mint Commerce API",
    description: "Scalable backend API for e-commerce platforms.",
    techStack: ["Node.js", "Fastify", "PostgreSQL", "Docker"],
    githubURL: "https://github.com/example/mint-commerce-api",
    demoURL: "https://mint-api.demo.com",
    createdAt: "2024-07-22"
  },
  {
    id: 6,
    title: "Linen Design System",
    description: "Reusable design system and UI component library.",
    techStack: ["React", "TypeScript", "Storybook", "Vite"],
    githubURL: "https://github.com/example/linen-design-system",
    demoURL: "https://linen-ui.demo.com",
    createdAt: "2024-04-12"
  }
];

function App() {
  return  (
    <>
      <Header></Header>
      <Dashboard/>
      <ProjectList projects={projects}/>
    </>
    
    
  )
}

export default App
