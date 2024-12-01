import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home"
import UrbanRumblePage from "./pages/UrbanRumblePage";
import Project2DOctoberPage from "./pages/Project2DOctoberPage";
import TransMusicalesProjectPage from "./pages/TransMusicalesProjectPage";
import NotFoundPage from "./pages/ErrorPage";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/urban-rumble",
      element: <UrbanRumblePage />
    },
    {
      path: "/project-2D-October",
      element: <Project2DOctoberPage />
    },
    {
      path: "/transmusicales",
      element: <TransMusicalesProjectPage />
    }
    ,
    {
      path: "*",
      element: <NotFoundPage />
    }
  ])
  
  export default function Router() {
    return (
      <RouterProvider router={router} />
    )
  }