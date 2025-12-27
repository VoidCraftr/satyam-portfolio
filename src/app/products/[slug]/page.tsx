import { getProduct, products } from "@/lib/products";
import { IconArrowLeft, IconCheck } from "@tabler/icons-react";
import Link from "next/link";
import { Metadata } from 'next';

export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const product = getProduct(params.slug);
    if (!product) return { title: 'Product Not Found' };
    return {
        title: `${product.title} | Satyam Agarwal`,
        description: product.description,
    };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
    const product = getProduct(params.slug);

    if (!product) {
        return <div className="pt-32 px-6 text-center">Product not found</div>;
    }

    return (
        <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-screen">
            <Link href="/products" className="inline-flex items-center text-sm text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 mb-8 transition-colors">
                <IconArrowLeft className="w-4 h-4 mr-2" />
                Back to Products
            </Link>

            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                    <div className="h-20 w-20 bg-neutral-100 dark:bg-neutral-800 rounded-3xl flex items-center justify-center mb-8">
                        <product.icon className="h-10 w-10 text-neutral-800 dark:text-neutral-200" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-white">
                        {product.title}
                    </h1>
                    <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                        {product.longDescription}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="px-8 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors">
                            Try Now
                        </button>
                        <button className="px-8 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                            Documentation
                        </button>
                    </div>
                </div>

                <div className="bg-neutral-50 dark:bg-neutral-900 rounded-3xl p-8 border border-neutral-200 dark:border-neutral-800">
                    <h3 className="text-xl font-bold mb-6 text-neutral-800 dark:text-neutral-100">Key Features</h3>
                    <ul className="space-y-4">
                        {product.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <div className="mt-1 h-5 w-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                                    <IconCheck className="h-3 w-3 text-green-600 dark:text-green-400" />
                                </div>
                                <span className="text-neutral-600 dark:text-neutral-400">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
