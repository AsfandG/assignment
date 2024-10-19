import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
const DashboardHeader = () => {
  return (
    <div>
      <div className="flex items-center justify-end my-4">
        <Link to="/cart">
          <div className="bg-background rounded-full px-4 py-[10px] flex items-center gap-2">
            <IoCartOutline size={16} />{" "}
            <span className="text-sm font-normal">My Cart</span>
          </div>
        </Link>
      </div>

      <div className="banner-container flex gap-3 h-72">
        <div className="banner bg-dimBlack flex-1 rounded-2xl flex gap-6 items-center justify-around p-8">
          <img src="/images/23.png" alt="shoes" className="w-72 h-56" />
          <div className="text-white flex items-start flex-col gap-y-3">
            <div className="roboto">
              <h1 className="text-5xl">Essential</h1>
              <h1 className="text-5xl">Items For</h1>
            </div>

            <span className="px-6 py-2 bg-primary rounded-xl text-3xl font-bold roboto">
              $99
            </span>
            <p className="text-xs">
              Nulla accumsan malesuada egestas nam dignissim. Quis vulputate
              blandit duis
            </p>

            <Button
              variant={"default"}
              className="bg-background text-black hover:bg-background rounded-xl"
            >
              Add To Cart
            </Button>
          </div>
        </div>
        <div className="discount w-72 h-full">
          <img
            src="/images/Frame5.png"
            alt="discount"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
