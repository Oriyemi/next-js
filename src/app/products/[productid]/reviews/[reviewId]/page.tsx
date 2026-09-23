import { notFound } from "next/navigation";
export default async function ProductDetails({ params, }: {
    params: Promise<{ productid: string; reviewId:string }>;
}) {
    const { productid, reviewId } = await params;
    if (parseInt(reviewId) > 1000) {
        notFound();
    }
    return <h1>Review{reviewId} for product {productid}</h1>
}