import About from "./routes/About";
import Blog from "./routes/Blog";
import FeaturedExhibit from "./routes/FeaturedExhibit";
import ErrorPage from "./routes/other/Error";
import NotFound from "./routes/other/NotFound";
import Root from "./routes/Root";

export const routes = [
  {
    path: "/",
    name: "Home",
    element: <Root />,
  },
  {
    path: "/featured",
    name: "Featured Exhibit",
    element: <FeaturedExhibit />,
  },
  {
    path: "/about",
    name: "About",
    element: <About />,
  },
  {
    path: "/blog",
    name: "Blog",
    element: <Blog />,
  },
  {
    path: "*",
    element: <NotFound />,
    errorElement: <ErrorPage />,
  },
];
