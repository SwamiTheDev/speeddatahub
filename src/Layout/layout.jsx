import TopNav from "../component/Navbar/navbar";
import SpeedTest from "../component/speedtest/speedtest";
import './layout.css'

export default function Layout() {
    return (
        <>
            <div className="__page">

                <div className="grid">
                    <TopNav />
                    <div className="row ">
                        <SpeedTest />
                    </div>
                    {/* <Internet /> */}
                </div>
            </div>
        </>
    )
}