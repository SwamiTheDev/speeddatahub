// routes.jsx

import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import About from "../../pages/About/About";
import SpeedTest from "../../pages/Home/Home";
import Contact from "../../pages/Contact/Contact";
import Footers from "../../pages/Footer/Footer";
import FullInfo from "../../pages/Fullinfo/Fullinfo";

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
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/user-internet-info",
                element: <FullInfo />,
            },
            {
                path: "/footer",
                element: <Footers />,
            }
        ],
    },
]);

export default router;
