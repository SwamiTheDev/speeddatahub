import SpeedTest from "../component/speedtest/speedtest";
import About from "../pages/about/about";
import './layout.css'

export default function Layout() {
    return (
        <>
            <div className="row ">
                <div className="page">
                    <SpeedTest />
                </div>
                <div className="about">
                    <About />
                </div>

            </div>
        </>
    )
}