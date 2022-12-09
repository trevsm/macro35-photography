import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Footer from "../partials/Footer";
import Header from "../partials/Header";

import ErrorPage from "../routes/Error";
import NotFound from "../routes/NotFound";

import Root from "../routes/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "*",
    element: <NotFound />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
