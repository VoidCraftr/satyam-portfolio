import { getBlogPost, getBlogPosts } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";
import { Metadata } from "next";

export async function generateStaticParams() {
    const posts = getBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const post = getBlogPost(params.slug);
    if (!post) {
        return { title: 'Post Not Found' };
    }
    return {
        title: `${post.frontmatter.title} | Satyam Agarwal`,
        description: post.frontmatter.description,
    };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = getBlogPost(params.slug);

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <article className="max-w-3xl mx-auto py-20 px-6">
            <Link href="/blog" className="inline-flex items-center text-sm text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 mb-8 transition-colors">
                <IconArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
            </Link>

            <header className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white leading-tight">
                    {post.frontmatter.title}
                </h1>
                <div className="flex items-center gap-4 text-neutral-500 text-sm">
                    <time>{post.frontmatter.date}</time>
                    <span>•</span>
                    <span>{post.frontmatter.author}</span>
                </div>
            </header>

            <div className="prose prose-neutral dark:prose-invert max-w-none">
                <MDXRemote source={post.content} />
            </div>
        </article>
    );
}
