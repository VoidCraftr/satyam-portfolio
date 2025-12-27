import { IconBrandOpenai, IconRocket, IconTool } from "@tabler/icons-react";

export type Product = {
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    features: string[];
    link?: string;
    icon?: any;
};

export const products: Product[] = [
    {
        slug: "devtool-x",
        title: "DevTool X",
        description: "The ultimate developer utility belt for web engineers.",
        longDescription: "DevTool X is a comprehensive suite of utilities designed to speed up your daily workflow. From JSON formatters to JWT debuggers, everything runs locally in your browser for maximum security.",
        features: ["Offline-first", "Dark Mode", "JSON/XML/YAML converter", "JWT Decoder", "Regex Tester"],
        icon: IconTool,
    },
    {
        slug: "saas-starter-kit",
        title: "SaaS Starter Kit",
        description: "A production-ready Next.js boilerplate for launching inventions fast.",
        longDescription: "Stop rebuilding auth, billing, and layout for every idea. The SaaS Starter Kit gives you a solid foundation with Next.js 14, Tailwind, Prisma, and Stripe integration pre-configured.",
        features: ["Next.js 14 App Router", "Authentication (Clerk/NextAuth)", "Stripe Subscription", "Dashboard Layout", "Email Templates"],
        icon: IconRocket,
    },
    {
        slug: "ai-icon-gen",
        title: "AI Icon Generator",
        description: "Generate consistent, beautiful icon sets using AI models.",
        longDescription: "Creating consistent icon assets is hard. AI Icon Gen lets you describe your style and subject, producing high-quality SVG/PNG icons in seconds.",
        features: ["Text-to-Icon", "Style Consistency", "SVG Export", "Figma Plugin"],
        icon: IconBrandOpenai,
    },
];

export function getProduct(slug: string) {
    return products.find((p) => p.slug === slug);
}
