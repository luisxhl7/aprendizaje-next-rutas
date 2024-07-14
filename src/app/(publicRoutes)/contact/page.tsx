import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact page',
    description: 'estoy en Contact page',
    keywords: ['Contact page', 'Luis', 'Información']
};

export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact page</span>
        </>
    );
}