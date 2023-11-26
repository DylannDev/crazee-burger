import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./components/pages/login/LoginPage";
import OrderPage from "./components/pages/OrderPage/OrderPage";
import ErrorPage from "./components/pages/ErrorPage/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/order/:username",
      element: <OrderPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
