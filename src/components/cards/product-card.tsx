import { AppDispatch } from "@/store/store";
import { Button } from "../ui/button";
import { FaHeart, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/reducers/cartSlice";

interface IProps {
  product: { id: number; name: string; price: string; image: string };
}

const ProductCard = ({ product }: IProps) => {
  const dispatch: AppDispatch = useDispatch();

  function handleAddToCart() {
    const item = {
      ...product,
      quantity: 1,
    };
    dispatch(addToCart({ item }));
  }
  return (
    <div className="bg-background ">
      <div className="my-3">
        <img src={product.image} alt="product" className="size-32 mx-auto" />
      </div>

      <div className="flex">
        <Button size={"sm"} className="rounded-none" onClick={handleAddToCart}>
          Add To Cart
        </Button>
        <Button size={"sm"} variant={"primary"} className="rounded-none">
          Quick View
        </Button>
      </div>

      <div className="info font-normal flex items-center justify-between p-2 border-b">
        <span className="text-sm uppercase font-bold">{product.name}</span>
        <div className="flex items-center gap-1">
          <span>
            <FaHeart className="text-primary" size={15} />
          </span>{" "}
          <span className="roboto font-semibold">{product.price}</span>
        </div>
      </div>

      <div className="rating flex items-center justify-between p-2">
        <span className="italic text-sm">Running</span>
        <div className="flex items-center gap-1">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
