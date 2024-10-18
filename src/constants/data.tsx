import { CiHome } from "react-icons/ci";
import { MdOutlineInventory2, MdInsertChartOutlined } from "react-icons/md";
import { FiPieChart } from "react-icons/fi";
import { CiBellOn } from "react-icons/ci";

export const sideBarLinks = [
  { id: 1, text: "Dashboard", Icon: CiHome, link: "/" },
  { id: 2, text: "Products", Icon: MdInsertChartOutlined, link: "/products" },
  { id: 3, text: "Analytics", Icon: FiPieChart, link: "/analytics" },
  { id: 4, text: "Notifications", Icon: CiBellOn, link: "/notifications" },
  { id: 4, text: "Inventory", Icon: MdOutlineInventory2, link: "/inventory" },
];
