// routes.jsx

import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import About from "../../pages/about/about";
import SpeedTest from "../speedtest/speedtest";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <SpeedTest />,
            },
            {
                path: "/about",
                element: <About />,
            },
        ],
    },
]);

export default router;
