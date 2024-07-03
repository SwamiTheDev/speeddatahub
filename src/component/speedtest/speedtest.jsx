import React, { useState, useEffect } from 'react';
import SpeedMeter from '../SpeedMeter/SpeedMeter.jsx';
import './speedtest.css';
import Box from '../box/box.jsx';
import Checkbutton from '../checkbutton/checkbutton.jsx';
import axios from 'axios'


const SpeedTest = () => {
    const [loading, setLoading] = useState(false);
    const [downloadSpeed, setDownloadSpeed] = useState(0);
    const [uploadSpeed, setUploadSpeed] = useState(0);
    const [pingSpeed, setPingSpeed] = useState(0);
    const [showSpeedMeter, setShowSpeedMeter] = useState(false);
    const [ip, setIp] = useState('')
    const [type, setType] = useState('')
    const [org, setOrg] = useState('')
    const [device, setDevice] = useState('')
    const [domain, setDomain] = useState('')

    const handleButtonClick = () => {
        setShowSpeedMeter(true);
        setLoading(true);
        setDownloadSpeed(0);
        setUploadSpeed(0);
        setPingSpeed(0);
    };

    const Refresh = () => {
        setShowSpeedMeter(true);
        setLoading(true);
        setDownloadSpeed(0);
        setUploadSpeed(0);
        setPingSpeed(0);
    }

    useEffect(() => {

        axios.get('https://api.ipregistry.co/?key=5pset9ruii4bjgp9')
            .then(response => {
                setIp(response.data.ip);
                setType(response.data.type);
                setOrg(response.data.connection.organization);
                setDevice(response.data.user_agent.name);
                setDomain(response.data.connection.domain);

            })
            .catch(error => { console.log(error) });


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

    return (
        <div className="center">
            <h1 className="title">Internet Speed Test</h1>

            {/* Results */}
            <div className='row mx-auto  '>

                <div className="row mx-auto mb-3 bg-light">

                    {/* upload Speed */}
                    <div className="col-xxl-3">
                        {/* empty for UI */}
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-3 col-xxl-2">
                        <Box title='Upload' speed={uploadSpeed} value='Mbps' />
                    </div>

                    {/* download Speed */}
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-3 col-xxl-2">
                        <Box title='Download' speed={downloadSpeed} value='Mbps' />
                    </div>

                    {/* ping speed */}
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-3 col-xxl-2 ">
                        <Box title='Ping' speed={pingSpeed} value='ms' />
                    </div>

                    <div className="col-xxl-3  ">
                        {/* empty for UI */}

                    </div>
                </div>

                {/* Speed Meter */}
                <div className="row">
                    <div className=" col-xxl-3 ">

                        {/* Ip address */}
                        <div className='internetinfo'>
                            <p>{ip}</p>
                            <p>IP Address</p>
                        </div>

                        {/* Ip address */}
                        <div className='internetinfo'>
                            <p>{type}</p>
                            <p>Connection Type</p>
                        </div>

                        {/* Ip address */}
                        <div className='internetinfo'>
                            <p>{org}</p>
                            <p>Organization</p>
                        </div>

                        {/* Ip address */}
                        <div className='internetinfo'>
                            <p>{device}</p>
                            <p>Device</p>
                        </div>
                    </div>
                    <div className="col-xxl-6 mx-auto">
                        <div className=' d-flex justify-content-center '>
                            {!showSpeedMeter && (
                                <button onClick={handleButtonClick} >
                                    <Checkbutton />
                                </button>
                            )}
                            {showSpeedMeter && <SpeedMeter value={downloadSpeed} />}
                        </div>
                        {showSpeedMeter ? <button onClick={Refresh} >Check Again</button> : <button></button>}

                        {/* display the ip and provider */}

                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-5">
                                <p>Provider</p>
                                <p>{domain}</p>
                            </div>
                            <div className="col-5">
                                <p>IP Address</p>
                                <p>{ip}</p>
                            </div>
                            <div className="col-1"></div>
                        </div>

                    </div>

                    {/* Add space */}
                    <div className="col-xxl-3 ">
                        sf
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpeedTest;
