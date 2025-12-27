import { getBlogPosts } from "@/lib/blog";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog | Satyam Agarwal',
    description: 'Insights on Full-Stack Development, AI, and Cloud Architecture.',
};

export default function BlogPage() {
    const posts = getBlogPosts();

    return (
        <div className="max-w-4xl mx-auto py-20 px-6">
            <h1 className="text-4xl font-bold mb-12 text-neutral-800 dark:text-neutral-100">
                Latest Insights
            </h1>
            <div className="grid gap-8">
                {posts.map((post) => (
                    <article key={post.slug} className="group cursor-pointer">
                        <Link href={`/blog/${post.slug}`} className="block p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
                            <div className="flex justify-between items-center mb-4 text-sm text-neutral-500">
                                <span>{post.frontmatter.date}</span>
                                <div className="flex gap-2">
                                    {post.frontmatter.tags?.map(tag => (
                                        <span key={tag} className="px-2 py-1 bg-neutral-200 dark:bg-neutral-800 rounded text-xs">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <h2 className="text-2xl font-semibold mb-2 text-neutral-800 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {post.frontmatter.title}
                            </h2>
                            <p className="text-neutral-600 dark:text-neutral-400 line-clamp-2">
                                {post.frontmatter.description}
                            </p>
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    );
}
