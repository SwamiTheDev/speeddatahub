import SpeedTest from "../component/speedtest/speedtest";

export default function Layout() {
    return (
        <>
            <div className="grid">
                <div className="row ">
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