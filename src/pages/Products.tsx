// import ProductCard from "../components/ProductCard";
import ProductCard2 from "../components/ProductCard2";

export default function ProductsPage() {
    return (
        <div>
            <div className="h-[300px] overflow-hidden">
                <img src='/aboutbackground.jpg' alt='about-banner' className="w-full" />
            </div>
            <div className="text-4xl font-extrabold py-4 px-8">All Products</div>
            <ProductCard2 />
        </div>
    );
} 