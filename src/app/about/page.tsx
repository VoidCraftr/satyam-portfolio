import { ExperienceSection } from "@/components/experience-section";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Me | Satyam Agarwal',
    description: 'My journey from intern to Senior Engineering Leader.',
};

export default function AboutPage() {
    return (
        <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
            <div className="mb-20">
                <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-8">
                    More Than Just Code.
                </h1>
                <div className="prose prose-lg dark:prose-invert">
                    <p>
                        Hello! I'm Satyam, a Senior Full-Stack Engineer based in Ahmedabad, India.
                        I specialize in building scalable, cloud-native platforms that solve real-world problems.
                    </p>
                    <p>
                        Currently, I lead the engineering team at <strong>NosNia.ai</strong>, where we are redefining
                        business communication through WhatsApp API automation and custom AI solutions.
                    </p>
                    <p>
                        My journey started with a curiosity for how things work, leading me to master the full stack—from
                        Angular and Python to implementing complex AWS architectures and integrating LLMs.
                    </p>
                </div>
            </div>

            <div className="mb-20">
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-8 text-center">
                    Technologies I Use
                </h2>
                <InfiniteMovingCards
                    items={techStack}
                    direction="right"
                    speed="slow"
                />
            </div>

            <ExperienceSection />
        </div>
    );
}

const techStack = [
    {
        quote: "Angular",
        name: "Frontend",
        title: "Angular",
    },
    {
        quote: "Python",
        name: "Backend/AI",
        title: "Python",
    },
    {
        quote: "Next.js",
        name: "Fullstack",
        title: "Next.js",
    },
    {
        quote: "AWS",
        name: "Cloud",
        title: "AWS",
    },
    {
        quote: "Docker",
        name: "DevOps",
        title: "Docker",
    },
    {
        quote: ".NET Core",
        name: "Backend",
        title: ".NET Core",
    },
    {
        quote: "PostgreSQL",
        name: "Database",
        title: "PostgreSQL",
    },
    {
        quote: "OpenAI API",
        name: "AI",
        title: "OpenAI",
    },
];
