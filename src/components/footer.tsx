import Link from "next/link";
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconMail } from "@tabler/icons-react";

export function Footer() {
    return (
        <footer className="bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div className="col-span-1 md:col-span-2">
                    <Link href="/" className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4 block">
                        Satyam Agarwal
                    </Link>
                    <p className="text-neutral-600 dark:text-neutral-400 max-w-sm">
                        Building scalable, cloud-native platforms and experimenting with AI.
                        Always learning, always shipping.
                    </p>
                </div>

                <div>
                    <h3 className="font-bold text-neutral-800 dark:text-neutral-100 mb-4">Navigation</h3>
                    <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                        <li><Link href="/about" className="hover:text-black dark:hover:text-white transition-colors">About</Link></li>
                        <li><Link href="/products" className="hover:text-black dark:hover:text-white transition-colors">Products</Link></li>
                        <li><Link href="/blog" className="hover:text-black dark:hover:text-white transition-colors">Blog</Link></li>
                        <li><Link href="/contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-neutral-800 dark:text-neutral-100 mb-4">Connect</h3>
                    <div className="flex gap-4">
                        <Link href="https://github.com/satyam-agarwal-ai" target="_blank" className="text-neutral-500 hover:text-black dark:hover:text-white transition-colors">
                            <IconBrandGithub size={24} />
                        </Link>
                        <Link href="https://linkedin.com/in/satyam-agarwal-ai" target="_blank" className="text-neutral-500 hover:text-blue-600 transition-colors">
                            <IconBrandLinkedin size={24} />
                        </Link>
                        <Link href="mailto:contact@satyamagarwal.ai" className="text-neutral-500 hover:text-red-500 transition-colors">
                            <IconMail size={24} />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-neutral-200 dark:border-neutral-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
                <p>&copy; {new Date().getFullYear()} Satyam Agarwal. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Link href="#" className="hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
