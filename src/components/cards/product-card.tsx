import { AppDispatch } from "@/store/store";
import { Button } from "../ui/button";
import { FaHeart, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/reducers/cartSlice";
import { useAppSelector } from "@/store/hook";
import { cartItem } from "@/types/cartItem";
import { Link } from "react-router-dom";

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

  const cartItems = useAppSelector((state) => state.cart.cartItems);

  // Check if the product is in the cart
  const isInCart = cartItems.some(
    (cartItem: cartItem) => cartItem.id === product.id
  );
  return (
    <div className="bg-background ">
      <div className="my-3">
        <img src={product.image} alt="product" className="size-32 mx-auto" />
      </div>

      <div className="flex">
        {isInCart ? (
          <Button
            size={"sm"}
            className="rounded-none flex-1"
            onClick={handleAddToCart}
          >
            In Cart
          </Button>
        ) : (
          <Button
            size={"sm"}
            className="rounded-none flex-1"
            onClick={handleAddToCart}
          >
            Add To Cart
          </Button>
        )}
        <Link to="/cart" className="block flex-1">
          <Button size={"sm"} variant={"primary"} className="rounded-none">
            Quick View
          </Button>
        </Link>
      </div>

      <div className="info font-normal flex items-center justify-between p-2 border-b">
        <span className="text-sm uppercase font-bold">{product.name}</span>
        <div className="flex items-center gap-1">
          <span>
            <FaHeart className="text-primary" size={15} />
          </span>{" "}
          <span className="roboto font-semibold">{product.price}$</span>
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
