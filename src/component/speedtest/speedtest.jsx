import React, { useState, useEffect } from 'react';
import SpeedMeter from '../SpeedMeter/SpeedMeter.jsx';
import './speedtest.css';
import Box from '../box/box.jsx';
import Checkbutton from '../checkbutton/checkbutton.jsx';
import axios from 'axios';

import connectionPng from '../../assets/img/connection.png';
import provider from '../../assets/img/provider-.png'
import socket from '../../assets/img/socket.png';
import organization from '../../assets/img/organization.png';
import devices from '../../assets/img/devices.png';
import ippng from '../../assets/img/ip.png';
import refresh from '../../assets/img/refresh.png'

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
                setDevice(response.data.user_agent.device.type);
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
            <h1 className="pagetitle">Internet Speed Test</h1>

            <div className='row mx-auto  '>

                {/* Results */}
                <div className="row mx-auto mb-3 ">

                    {/* empty for UI */}
                    <div className="col-xxl-3">
                    </div>

                    {/* upload Speed */}
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-3 col-xxl-2 box" >
                        <Box title='Upload' speed={uploadSpeed} value='Mbps' />
                    </div>

                    {/* download Speed */}
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-3 col-xxl-2 box">
                        <Box title='Download' speed={downloadSpeed} value='Mbps' />
                    </div>

                    {/* ping speed */}
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-3 col-xxl-2 box">
                        <Box title='Ping' speed={pingSpeed} value='ms' />
                    </div>

                    {/* empty for UI */}
                    <div className="col-xxl-3  ">
                    </div>
                </div>

                {/* Speed Meter */}
                <div className="row">
                    <div className="col-xxl-3 ">

                        {/* Ip address */}
                        <div className='internetinfo'>
                            <div className='d-flex'>
                                <div className='d-flex align-items-center pe-3'>
                                    <img src={connectionPng} />
                                </div>
                                <div className=' '>
                                    <p className='title'>IP Address</p>
                                    <p className='value'>{ip}</p>
                                </div>
                            </div>
                        </div>

                        {/* connection type */}
                        <div className='internetinfo'>
                            <div className='d-flex'>
                                <div className='d-flex align-items-center pe-3'>
                                    <img src={socket} />
                                </div>
                                <div className=' '>
                                    <p className='title'>Connection Type</p>
                                    <p className='value'>{type}</p>
                                </div>
                            </div>
                        </div>

                        {/* Internet info*/}
                        <div className='internetinfo'>
                            <div className='d-flex'>
                                <div className='d-flex align-items-center pe-3'>
                                    <img src={organization} />
                                </div>
                                <div className=' '>
                                    <p className='title'>Organization</p>
                                    <p className='value'>{org}</p>
                                </div>
                            </div>
                        </div>

                        {/* Device info */}
                        <div className='internetinfo'>
                            <div className='d-flex'>
                                <div className='d-flex align-items-center pe-3'>
                                    <img src={devices} />
                                </div>
                                <div className=' '>
                                    <p className='title'>Device</p>
                                    <p className='value'>{device}</p>
                                </div>
                            </div>
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
                            {showSpeedMeter ? <button onClick={Refresh} ><img src={refresh} /></button> : <button></button>}
                        </div>

                        {/* display the ip and provider */}

                        <div className="row">

                            {/* empty space */}
                            <div className="col-1 col-xxl-2"></div>

                            {/* provider details */}
                            <div className="col-5 col-xxl-4 me-xxl-5">
                                <div className='d-flex'>
                                    <div className='d-flex align-items-center pe-3'>
                                        <img src={provider} />

                                    </div>
                                    <div className='internetinfo'>
                                        <p className='title'>Provider</p>
                                        <p className='value'>{domain}</p>
                                    </div>
                                </div>
                            </div>

                            {/* ip details */}
                            <div className="col-5 col-xxl-4  ms-4">
                                <div className='d-flex text-center'>
                                    <div className='d-flex align-items-center pe-3'>
                                        <img src={ippng} />
                                    </div>
                                    <div className='internetinfo'>
                                        <p className='title'>IP Address</p>
                                        <p className='value'>{ip}</p>
                                    </div>
                                </div>
                            </div>

                            {/* empty space */}
                            <div className="col-1 col-xxl-2"></div>
                        </div>

                    </div>

                    {/* Add space */}
                    <div className="col-xxl-3 bg-light">
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SpeedTest;
