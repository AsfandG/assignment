import CartProductsDetails from "@/components/cart/cart-product-details";
import PaymentCardDetails from "@/components/cart/payment-card-details";

const Cart = () => {
  return (
    <div className="p-5 lg:p-10">
      <div className="main-container bg-background rounded-lg w-full p-4 flex flex-col lg:flex-row gap-3">
        <CartProductsDetails />
        <PaymentCardDetails />
      </div>
    </div>
  );
};

export default Cart;
