import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconMail } from "@tabler/icons-react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact | Satyam Agarwal',
    description: 'Get in touch for collaborations or opportunities.',
};

export default function ContactPage() {
    return (
        <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen flex flex-col justify-center">
            <div className="mb-12">
                <h1 className="text-4xl md:text-6xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
                    Let's Build Something Amazing.
                </h1>
                <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl">
                    Whether you have a question, a project idea, or just want to say hi, I'm always open to new opportunities.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <a href="mailto:contact@satyamagarwal.ai" className="flex items-center gap-4 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors group">
                        <div className="p-4 rounded-full bg-neutral-100 dark:bg-neutral-800 group-hover:scale-110 transition-transform">
                            <IconMail className="h-6 w-6" />
                        </div>
                        <span className="text-lg">contact@satyamagarwal.ai</span>
                    </a>
                    <Link href="https://linkedin.com/in/satyam-agarwal-ai" target="_blank" className="flex items-center gap-4 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors group">
                        <div className="p-4 rounded-full bg-neutral-100 dark:bg-neutral-800 group-hover:scale-110 transition-transform">
                            <IconBrandLinkedin className="h-6 w-6" />
                        </div>
                        <span className="text-lg">LinkedIn</span>
                    </Link>
                    <Link href="https://github.com/satyam-agarwal-ai" target="_blank" className="flex items-center gap-4 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors group">
                        <div className="p-4 rounded-full bg-neutral-100 dark:bg-neutral-800 group-hover:scale-110 transition-transform">
                            <IconBrandGithub className="h-6 w-6" />
                        </div>
                        <span className="text-lg">GitHub</span>
                    </Link>
                </div>

                <div className="p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                    <h3 className="text-xl font-bold mb-4">Send a Message</h3>
                    {/* Placeholder form structure */}
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Name</label>
                            <input type="text" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-500" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <input type="email" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-500" placeholder="john@example.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Message</label>
                            <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-500" placeholder="Hello..." />
                        </div>
                        <button type="button" className="w-full py-3 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-black font-bold hover:opacity-90 transition-opacity">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
