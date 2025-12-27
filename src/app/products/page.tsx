import { products } from "@/lib/products";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Products | Satyam Agarwal',
    description: 'SaaS tools, experiments, and utilities built for the community.',
};

export default function ProductsPage() {
    return (
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
                    Lab & Products
                </h1>
                <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
                    A collection of SaaS products, fun experiments, and developer utilities I'm building.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {products.map((product) => (
                    <Link key={product.slug} href={`/products/${product.slug}`} className="group p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all hover:shadow-lg">
                        <div className="h-12 w-12 bg-white dark:bg-black rounded-2xl border border-neutral-200 dark:border-neutral-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <product.icon className="h-6 w-6 text-neutral-800 dark:text-neutral-200" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-neutral-800 dark:text-neutral-100">{product.title}</h3>
                        <p className="text-neutral-600 dark:text-neutral-400 mb-6 line-clamp-2">
                            {product.description}
                        </p>
                        <div className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
                            View Details <IconArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
