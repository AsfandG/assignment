import { useAppSelector } from "@/store/hook";
import { InputWithLabel } from "../inputs/InputWithLabel";
import { FaLongArrowAltRight } from "react-icons/fa";

const PaymentCardDetails = () => {
  const { cartData } = useAppSelector((store) => store.cart);
  return (
    <div className="card-detail w-72 bg-primary p-3 rounded-xl">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-white">Card Details</h2>
        <img
          src="/images/user.jpg"
          alt="user"
          className="size-10 object-cover object-top rounded-xl"
        />
      </div>

      <div className="w-full mt-10">
        <h2 className="text-sm font-semibold text-white mb-3">Card Type</h2>
        <img
          src="/images/Frame 77.png"
          alt="user"
          className="w-full h-12 block"
        />
      </div>

      <div>
        <InputWithLabel label="Name on Card" type="text" placeholder="Name" />
        <InputWithLabel
          label="Card Number"
          type="text"
          placeholder="1111 2222 33333 4444"
        />

        <div className="grid grid-cols-2 gap-2">
          <InputWithLabel
            label="Expiration Date"
            type="text"
            placeholder="mm/yy"
          />
          <InputWithLabel label="CVV" type="text" placeholder="123" />
        </div>

        <hr className="my-3 bg-slate-500" />
      </div>

      <div className="totals">
        <div className="py-2 flex items-center justify-between text-white text-sm">
          <span>SubTotal</span>
          <span>{cartData.subtotal.toFixed(2)}$</span>
        </div>

        <div className="py-2 flex items-center justify-between text-white text-sm">
          <span>Tax</span>
          <span>{cartData.tax.toFixed(2)}$</span>
        </div>

        <div className="py-2 flex items-center justify-between text-white text-sm">
          <span>Total</span>
          <span>{cartData.total.toFixed(2)}$</span>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-md p-2 mt-6 bg-gray-100 text-sm font-semibold">
        <span>{cartData.total}$</span>
        <span className="flex items-center gap-2">
          Checkout <FaLongArrowAltRight />
        </span>
      </div>
    </div>
  );
};

export default PaymentCardDetails;
