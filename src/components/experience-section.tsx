"use client";
import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";

export function ExperienceSection() {
    return (
        <section className="py-20 relative w-full">
            <TracingBeam className="px-6">
                <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                    <h2 className="text-3xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-12">
                        Work Experience
                    </h2>
                    {dummyContent.map((item, index) => (
                        <div key={`content-${index}`} className="mb-10 relative">
                            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                                {item.badge}
                            </h2>
                            <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                                {item.date}
                            </p>
                            <div className="text-sm  prose prose-sm dark:prose-invert">
                                {item.description}
                            </div>
                        </div>
                    ))}
                </div>
            </TracingBeam>
        </section>
    );
}

const dummyContent = [
    {
        title: "NosNia.ai",
        badge: "Senior Software Engineer",
        date: "Oct 2023 - Present",
        description: (
            <>
                <p>
                    Leading a team of 10 engineers, developing core features for WhatsApp Business API integration
                    including templates, campaigns, and chatbots.
                </p>
                <p>
                    Architected and integrated a custom OpenAI LLM solution for AI-generated reporting and
                    scaled the backend to handle high demand. Overseeing system architecture and technical
                    partnerships with Karix and Anantya.ai.
                </p>
            </>
        ),
    },
    {
        title: "Freelance",
        badge: "Software Engineer",
        date: "Jan 2020 - Oct 2022",
        description: (
            <>
                <p>
                    Designed and developed large dataset processing architectures using message queues,
                    reducing gateway timeouts by 80%.
                </p>
                <p>
                    Optimized MySQL stored procedures resulting in 50-91% performance gains.
                    Delivered custom theme engines and various web applications for clients.
                </p>
            </>
        ),
    },
    {
        title: "Mumbai-based Startup",
        badge: "Software Engineer Intern",
        date: "Jan 2020 - Jul 2020",
        description: (
            <>
                <p>
                    Developed dynamic common utility components that increased team productivity by 30%.
                    Focused on responsive design and implemented accessibility tools (NVDA, JAWS).
                </p>
            </>
        ),
    },
];
