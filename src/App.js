import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Layout from "./components/Layout/Layout";
import ErrorPage from "./pages/Error/Error";
import DetailCard from "./pages/DetailCard/DetailCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "detailcard/:id",
        element: <DetailCard />,
      },
      {
        path: "/error",
        element: <ErrorPage />,
      },
      {
        path: "*",
        element: <Navigate replace to="/error" />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
