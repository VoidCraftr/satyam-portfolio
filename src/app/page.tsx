"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { IconBrandGithub, IconBrandLinkedin, IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { ProjectsSection } from "@/components/projects-section";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function Home() {
  return (
    <>
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          I Build Scalable, Cloud-Native Platforms for the Future.
          <br />
          <Highlight className="text-black dark:text-white">
            Satyam Agarwal
          </Highlight>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-4 text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto px-4"
        >
          Senior Full-Stack Engineering Leader | Angular • Python • .NET • AWS • Data Analytics
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex gap-4 justify-center mt-8"
        >
          <Link
            href="/projects"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 dark:bg-white dark:text-black text-white font-medium hover:scale-105 transition-transform"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            Contact Me
          </Link>
        </motion.div>

      </HeroHighlight>

      <ProjectsSection />

      {/* Blog Preview Section */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100">
              Latest Insights
            </h2>
            <Link href="/blog" className="hidden md:flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
              View all posts <IconArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Manual Blog Previews for now (simpler than fetching in Client Component) */}
            <Link href="/blog/ai-powered-reporting" className="group block p-8 rounded-3xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
              <div className="text-sm text-neutral-500 mb-4">April 10, 2024</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Building AI-Powered Reporting with OpenAI</h3>
              <p className="text-neutral-600 dark:text-neutral-400">How to integrate OpenAI's LLMs into your Python backend to generate dynamic, insightful reports.</p>
            </Link>
            <Link href="/blog/optimizing-angular-performance" className="group block p-8 rounded-3xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
              <div className="text-sm text-neutral-500 mb-4">March 15, 2024</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Optimizing Angular Performance</h3>
              <p className="text-neutral-600 dark:text-neutral-400">Techniques and best practices for improving the performance of enterprise-grade Angular applications.</p>
            </Link>
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link href="/blog" className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
              View all posts <IconArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-neutral-800 dark:text-neutral-100">
            Trusted by Founders & Engineers
          </h2>
        </div>
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="normal"
        />
      </section>

      {/* Contact CTA */}
      <section className="py-32 px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-neutral-800 dark:text-neutral-100 mb-8 max-w-4xl mx-auto">
          Ready to bring your ideas to life?
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 hover:scale-105 transition-all shadow-lg hover:shadow-blue-500/25"
        >
          Let's Talk <IconArrowRight size={20} />
        </Link>
      </section>


    </>
  );
}

const testimonials = [
  {
    quote:
      "Satyam is a rare breed of engineer who understands both the code and the business. His work on our WhatsApp automation saved us hundreds of hours.",
    name: "CTO, NosNia.ai",
    title: "Senior Leader",
  },
  {
    quote:
      "I was impressed by his ability to integrate complex LLM workflows into our existing Python backend. Truly a full-stack expert.",
    name: "Founder, Stealth Startup",
    title: "San Francisco",
  },
  {
    quote:
      "From database optimization to frontend polish, Satyam delivers quality. Highly recommended for any scalable cloud project.",
    name: "Project Manager",
    title: "Freelance Client",
  },
  {
    quote:
      "The portfolio site he built for me was not just fast, but visually stunning. He really knows how to make a design 'pop'.",
    name: "Designer",
    title: "Colleague",
  },
];
