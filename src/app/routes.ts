import { createBrowserRouter } from "react-router";
import { Home, Stats, Ranks, Structure, Join } from "./pages";
import { Layout } from "./Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/stats",
        Component: Stats,
      },
      {
        path: "/ranks",
        Component: Ranks,
      },
      {
        path: "/structure",
        Component: Structure,
      },
      {
        path: "/join",
        Component: Join,
      },
    ],
  },
]);