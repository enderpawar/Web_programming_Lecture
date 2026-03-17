import { createHashRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { SlidePage } from "./pages/SlidePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Layout } from "./components/Layout";

export const router = createHashRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "slide/:slideId",
        Component: SlidePage,
      },
      {
        path: "*",
        Component: NotFoundPage,
      },
    ],
  },
]);