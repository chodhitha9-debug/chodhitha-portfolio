import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Journey } from "@/components/Journey";
import { Hackathons } from "@/components/Hackathons";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const title = "Chodhitha Mamidala | CSE-AIML Student & AI/ML Enthusiast";
const description =
  "Portfolio of Chodhitha Mamidala, a CSE-AIML student exploring Artificial Intelligence, Machine Learning, NLP, RAG, and practical AI applications.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Hackathons />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
