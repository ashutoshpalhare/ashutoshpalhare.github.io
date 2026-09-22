import { createFileRoute } from "@tanstack/react-router";
import { Sidebar, TopSocials, FloatingContact } from "@/components/portfolio/Sidebar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";

const title = "Ashutosh Palhare — Full Stack Developer & Cybersecurity Enthusiast";
const description =
  "Portfolio of Ashutosh Palhare (AP): frontend-first full stack developer building clean UIs, developer tools and learning platforms with React, TypeScript and Tailwind.";
const image = "https://avatars.githubusercontent.com/u/53346137?v=4";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: image },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background lg:pl-20">
      <Sidebar />
      <TopSocials />
      <FloatingContact />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
