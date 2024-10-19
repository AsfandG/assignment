import { productsData } from "@/constants/data";
import ProductCard from "./cards/product-card";

const ProductsSection = () => {
  return (
    <div className="py-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      {productsData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsSection;
