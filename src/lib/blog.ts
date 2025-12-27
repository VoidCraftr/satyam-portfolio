import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content/blog");

export type BlogPost = {
    slug: string;
    frontmatter: {
        title: string;
        date: string;
        description: string;
        tags?: string[];
        author?: string;
        image?: string;
    };
    content: string;
};

export function getBlogPosts(): BlogPost[] {
    if (!fs.existsSync(contentDirectory)) {
        return [];
    }

    const files = fs.readdirSync(contentDirectory);

    const posts = files.map((filename) => {
        const slug = filename.replace(".mdx", "");
        const markdownWithMeta = fs.readFileSync(
            path.join(contentDirectory, filename),
            "utf-8"
        );
        const { data: frontmatter, content } = matter(markdownWithMeta);

        return {
            slug,
            frontmatter: frontmatter as BlogPost["frontmatter"],
            content,
        };
    });

    return posts.sort((a, b) => {
        if (new Date(a.frontmatter.date) > new Date(b.frontmatter.date)) {
            return -1;
        }
        return 1;
    });
}

export function getBlogPost(slug: string): BlogPost | null {
    const filePath = path.join(contentDirectory, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) {
        return null;
    }

    const markdownWithMeta = fs.readFileSync(filePath, "utf-8");
    const { data: frontmatter, content } = matter(markdownWithMeta);

    return {
        slug,
        frontmatter: frontmatter as BlogPost["frontmatter"],
        content,
    };
}
