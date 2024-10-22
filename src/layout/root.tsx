import { SideBar } from "@/components/sidebar";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div className="flex gap-2">
      <SideBar />
      <div className="w-full bg-gray-100 h-auto min-h-screen ">
        <Outlet />
      </div>
    </div>
  );
};
