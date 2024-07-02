import React, { useState, useEffect } from 'react';
// import './styles.css';
import Download from '../download/download.jsx';
import Upload from '../upload/upload.jsx';
import Ping from '../ping/ping.jsx';
import Bigmeter from '../bigmeter/bigmeter.jsx';

const SpeedTest = () => {
    const [loading, setLoading] = useState(false);
    const [downloadSpeed, setDownloadSpeed] = useState(0);
    const [uploadSpeed, setUploadSpeed] = useState(0);
    const [pingSpeed, setPingSpeed] = useState(0);

    useEffect(() => {
        let interval = null;

        const fetchInternetSpeeds = () => {
            const downloadSpeed = Math.floor(Math.random() * 100);
            const uploadSpeed = Math.floor(Math.random() * 50);
            const pingSpeed = Math.floor(Math.random() * 100);

            setDownloadSpeed(downloadSpeed);
            setUploadSpeed(uploadSpeed);
            setPingSpeed(pingSpeed);
        };

        if (loading) {
            interval = setInterval(fetchInternetSpeeds, 1000);

            setTimeout(() => {
                clearInterval(interval);
                setLoading(false);
            }, 2000);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [loading]);

    const handleStartClick = () => {
        setLoading(true);
        setDownloadSpeed(0);
        setUploadSpeed(0);
        setPingSpeed(0);
    };

    return (
        <div className="center">
            <h1 className="title">Internet Speed Test</h1>
            <button onClick={handleStartClick} disabled={loading}>
                {loading ? 'Loading...' : 'Start'}
            </button>

            <div className="row bg-light">
                <div className="col bg-black  " style={{ 'border': '2px red solid' }}>
                    {/* <Download value={downloadSpeed} /> */}
                    <Bigmeter value={downloadSpeed} />
                </div>
                <div className="col">
                    <Upload value={uploadSpeed} />

                </div>
                <div className="col">
                    <Ping value={pingSpeed} />

                </div>
            </div>
            download value is {downloadSpeed}
            <div className="speed-meters">
            </div>

            <p>
            </p>
        </div>
    );
};

export default SpeedTest;
