import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Products from "./pages/products";
import { Root } from "./layout/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Analytics from "./pages/analytics";
import Notifications from "./pages/notifications";
import Inventory from "./pages/inventory";
import Register from "./pages/register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "analytics",
          element: <Analytics />,
        },
        {
          path: "notifications",
          element: <Notifications />,
        },
        {
          path: "inventory",
          element: <Inventory />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
