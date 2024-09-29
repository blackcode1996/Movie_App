import { createBrowserRouter } from "react-router-dom";
import Movies from "../pages/Movies/Movies";
import Landing from "../pages/Home/HomeWrapper";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
    ],
  },
]);

export default router;
