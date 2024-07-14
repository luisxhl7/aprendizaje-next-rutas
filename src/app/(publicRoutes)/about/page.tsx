import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'about page',
    description: 'estoy en about page',
    keywords: ['About Page', 'Luis', 'Información']
};

export default function AboutPage() {
    return (
        <div>
            <span className="text-7xl">About page</span>
        </div>
    );
}