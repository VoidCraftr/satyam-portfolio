"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";

export function ProjectsSection() {
    return (
        <section className="py-20 px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-12 text-center">
                Featured Projects
            </h2>
            <BentoGrid className="max-w-4xl mx-auto">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                    />
                ))}
            </BentoGrid>
        </section>
    );
}

const ProjectImage = ({ color }: { color: string }) => (
    <div className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br ${color} opacity-80`} />
);

const items = [
    {
        title: "NosNia.ai Integration",
        description: "Core features for WhatsApp Business API, templates, campaigns, and chatbots.",
        header: <ProjectImage color="from-neutral-200 to-neutral-500" />,
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Intranet Mail System",
        description: "Secure communication platform for organizations improving reliability & security.",
        header: <ProjectImage color="from-green-200 to-green-500" />,
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Django E-Commerce",
        description: "Full-stack e-commerce platform built with Django 2.2 and payment integration.",
        header: <ProjectImage color="from-blue-200 to-blue-500" />,
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "AI Reporting Engine",
        description: "Built custom OpenAI LLM integration for AI-generated reporting at NosNia.ai.",
        header: <ProjectImage color="from-purple-200 to-purple-500" />,
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Social Media Automation",
        description: "Python bot with Selenium for automated login and post-sharing.",
        header: <ProjectImage color="from-orange-200 to-orange-500" />,
        icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
];
