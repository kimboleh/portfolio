import { RouteObject, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import NotFound from "../pages/NotFound";

const routes = [
    { path: "", element: <Home /> },
    { path: "projects", element: <Projects /> },
    // Fallback for any other paths under the locale
    { path: "*", element: <NotFound /> },
];

export default routes;
