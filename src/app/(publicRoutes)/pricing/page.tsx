import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Pricing page',
    description: 'estoy en Pricing page',
    keywords: ['Pricing page', 'Luis', 'Información']
};
export default function PricingPage() {
    return (
        <>
            <span className="text-7xl">Pricing page</span>
        </>
    );
}