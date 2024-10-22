import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Products from "./pages/products";
import { Root } from "./layout/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Analytics from "./pages/analytics";
import Notifications from "./pages/notifications";
import Inventory from "./pages/inventory";
import Register from "./pages/register";
import Cart from "./pages/cart";
import ProtectedRoute from "./components/protected-route";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: (
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          ),
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
        {
          path: "cart",
          element: <Cart />,
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
