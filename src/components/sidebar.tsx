import { sideBarLinks } from "@/constants/data";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { IoLogOutOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { logout } from "@/store/reducers/authSlice";
import toast from "react-hot-toast";

export const SideBar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const user = useAppSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    navigate("/login");
    toast.success("Logged Out!");
  };
  return (
    <div className="w-56 flex items-center flex-col py-10">
      <div className="flex items-center gap-2">
        <div className="user-image">
          <img
            src="/images/user.jpg"
            alt=""
            className="w-10 h-10 rounded-md object-cover object-top"
          />
        </div>
        <div className="user-info text-sm">
          <strong>{user?.name || "Guest"}</strong>
          <p>{user?.email || "guest@example.com"}</p>
        </div>
      </div>

      <ul className="flex items-stretch flex-col mt-10">
        {sideBarLinks.map((item) => {
          const { Icon, text, link } = item;
          return (
            <li key={item.id}>
              <NavLink
                to={link}
                className={({ isActive }) =>
                  `flex items-center gap-4  px-7 py-3 rounded-md mx-6 my-2 ${
                    isActive
                      ? "bg-primary text-white"
                      : "bg-background text-[#09090A]"
                  }`
                }
                // className={`flex items-center gap-2 bg-primary px-5 py-3 rounded-md text-white mx-6 my-4`}
              >
                <span>
                  <Icon size={16} />
                </span>
                <span className="text-sm">{text}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>

      <Button variant={"ghost"} className="mt-auto" onClick={handleLogout}>
        <IoLogOutOutline /> Logout
      </Button>
    </div>
  );
};
