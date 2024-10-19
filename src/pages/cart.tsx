import CartProductsDetails from "@/components/cart/cart-product-details";
import PaymentCardDetails from "@/components/cart/payment-card-details";

const Cart = () => {
  return (
    <div className="p-10">
      <div className="main-container bg-background rounded-lg w-full p-4 flex gap-3">
        <CartProductsDetails />
        <PaymentCardDetails />
      </div>
    </div>
  );
};

export default Cart;
