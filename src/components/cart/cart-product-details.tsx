import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import CartItem from "./cartItem";
import { useAppSelector } from "@/store/hook";
import { cartItem } from "@/types/cartItem";

const CartProductsDetails = () => {
  const { cartItems } = useAppSelector((store) => store.cart);
  return (
    <div className="product-info flex-1">
      <Link to="/">
        <div className="inline-flex items-center gap-1 border-b pb-2">
          <IoIosArrowBack />
          <span className="font-semibold text-sm">Continue Shopping</span>
        </div>
      </Link>

      <div className="my-3">
        <h2 className="font-bold text-sm">Shopping Cart</h2>
        <p className="text-xs font-normal">
          You have {cartItems.length} items in your cart
        </p>
      </div>

      <div className="">
        {cartItems.map((item: cartItem) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CartProductsDetails;
