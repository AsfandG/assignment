import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Button } from "../ui/button";
import { cartItem } from "@/types/cartItem";
import {
  decrement,
  increment,
  removeFromCart,
} from "@/store/reducers/cartSlice";
import { useAppDispatch } from "@/store/hook";

interface IProps {
  item: cartItem;
}
const CartItem = ({ item }: IProps) => {
  const totalPrice = item.quantity * item.price;
  const dispatch = useAppDispatch();
  return (
    <div className="border p-4 rounded-lg flex flex-col lg:flex-row items-center justify-between my-6">
      <div className="flex items-center gap-2">
        <img src={item.image} alt="shoes" className="size-20" />
        <div>
          <p className="uppercase font-bold text-sm">{item.name}</p>
          <p className="text-xs italic">Running</p>
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <div className="quantity flex items-center gap-2">
          {item.quantity}
          <div className="button flex items-center flex-col">
            <Button
              variant="ghost"
              className="p-0 size-3"
              onClick={() => dispatch(increment({ itemId: item.id }))}
            >
              <FaCaretUp />
            </Button>
            <Button
              variant="ghost"
              className="p-0 size-3"
              onClick={() => dispatch(decrement({ itemId: item.id }))}
            >
              {" "}
              <FaCaretDown />
            </Button>
          </div>
        </div>

        <h2 className="font-bold text-sm">{totalPrice}$</h2>

        <Button
          variant={"ghost"}
          onClick={() => dispatch(removeFromCart({ itemId: item.id }))}
        >
          <MdDeleteOutline size={30} />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
