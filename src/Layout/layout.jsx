import Internet from "../component/InternetInfo/internet";
// import Meter from "../component/Meter/meter";
import Download from "../component/download/download";
import SpeedTest from "../component/speedtest/speedtest";

export default function Layout() {
    return (
        <>
            <div className="grid">
                <div className="row ">
                    <SpeedTest />
                </div>
                <div className="row">
                    {/* internet info */}
                    <div className="col">
                        <Internet />
                    </div>

                </div>
                <div className="row">
                    <div className="col">
                    </div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>
            </div>
        </>
    )
}