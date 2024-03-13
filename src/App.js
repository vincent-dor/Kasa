import { useRoutes, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ErrorPage from "./pages/Error/Error";
import DetailCard from "./pages/DetailCard/DetailCard";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

const App = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
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
          errorElement: <ErrorPage />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ]);
  return routes;
};

export default App;
