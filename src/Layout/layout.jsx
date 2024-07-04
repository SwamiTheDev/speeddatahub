import SpeedTest from "../component/speedtest/speedtest";
import './layout.css'

export default function Layout() {
    return (
        <>
            <div className="row ">
                <div className="page">
                    <SpeedTest />
                </div>
                <div className="row">
                    <div className="col">
                    </div>
                </div>
            </div>
        </>
    )
}