import { createBrowserRouter } from "react-router"
import App from "./App"
import FavoriteCars from "./pages/FavoritesCar/FavoriteCars"
import Layout from "./layouts/Layuot"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/favorite",
        element: <FavoriteCars />,
      },
    ],
  },
])
