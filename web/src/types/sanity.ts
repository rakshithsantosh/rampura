export interface Recipe {
    title: string;
    slug: string;
    heroImage: any;
    excerpt: string;
    date: string;
    category: string;
    courtesy?: {
        name: string;
        designation: string;
        image: any;
    };
    ingredients?: {
        name: string;
        quantity: string;
    }[];
    method?: any[];
    videoUrl?: string;
    relatedProducts?: {
        productName: string;
        shopifyUrl: string;
        productImage: any;
    }[];
}
