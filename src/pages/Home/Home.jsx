import React, { useState, useEffect } from 'react';
import Meter from '../../component/Meter/Meter.jsx';
import './Home.css';
import Box from '../../component/box/box.jsx';
import About from '../About/About.jsx'
import Checkbutton from '../../component/checkbutton/checkbutton.jsx';
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
    const [showMeter, setShowMeter] = useState(false);
    const [ip, setIp] = useState('')
    const [type, setType] = useState('')
    const [org, setOrg] = useState('')
    const [device, setDevice] = useState('')
    const [domain, setDomain] = useState('')
    const [showTransition, setShowTransition] = useState(false);

    const handleButtonClick = () => {
        setShowMeter(true);
        setLoading(true);
        setDownloadSpeed(0);
        setUploadSpeed(0);
        setPingSpeed(0);

        setTimeout(() => {
            setShowTransition(true);
        }, 1000);
    };

    const Refresh = () => {
        setShowMeter(true);
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
        <>
            <div className="center __page">
                <div className="container">

                    {/* <h1 className="pagetitle ">Internet Speed Test</h1> */}

                    {/* Results */}
                    <div className="row mx-auto hometitle">

                        {/* empty for UI */}
                        <div className="col-lg-3 col-xl-3 col-xxl-3">
                        </div>

                        {/* upload Speed */}
                        <div className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2 col-xxl-2 box" >
                            <Box title='Upload' speed={uploadSpeed} value='Mbps' />
                        </div>

                        {/* download Speed */}
                        <div className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2 col-xxl-2 box">
                            <Box title='Download' speed={downloadSpeed} value='Mbps' />
                        </div>

                        {/* ping speed */}
                        <div className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2 col-xxl-2 box">
                            <Box title='Ping' speed={pingSpeed} value='ms' />
                        </div>

                        {/* empty for UI */}
                        <div className="col-lg-3 col-xl-3 col-xxl-3 ">
                        </div>
                    </div>

                    {/* row */}
                    <div className='row mx-auto '>

                        {/* interntet info */}
                        <div className="col-lg-3 col-xl-3 col-xxl-3 mt-4">
                            <div className="row ">

                                {/* Ip address */}
                                <div className="col-6 col-sm-6 col-lg-10 col-xl-10 col-xxl-10">
                                    <div className='internetinfo'>
                                        <div className='d-flex'>
                                            <div className='d-flex align-items-center pe-3'>
                                                <img src={connectionPng} className='__img' alt='ipaddress_png' />
                                            </div>
                                            <div className=' '>
                                                <p className='title'>IP Address</p>
                                                <p className='value'>{ip}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* organization info*/}
                                <div className="col-6 col-sm-6 col-lg-10 col-xl-10 col-xxl-10 ">
                                    <div className='internetinfo'>
                                        <div className='d-flex'>
                                            <div className='d-flex align-items-center pe-3'>
                                                <img src={organization} className='__img' alt='organization_png' />
                                            </div>
                                            <div className=' '>
                                                <p className='title'>Organization</p>
                                                <p className='value'>{org}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* connection type */}
                                <div className="col-6 col-sm-6 col-lg-10 col-xl-10 col-xxl-10">
                                    <div className='internetinfo'>
                                        <div className='d-flex'>
                                            <div className='d-flex align-items-center pe-3'>
                                                <img src={socket} className='__img' alt='connection_png' />
                                            </div>
                                            <div className=' '>
                                                <p className='title'>Connection Type</p>
                                                <p className='value'>{type}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Device info */}
                                <div className="col-6 col-sm-6 col-lg-10 col-xl-10 col-xxl-10">
                                    <div className='internetinfo'>
                                        <div className='d-flex'>
                                            <div className='d-flex align-items-center pe-3'>
                                                <img src={devices} className='__img' alt='device_png' />
                                            </div>
                                            <div className=' '>
                                                <p className='title'>Device</p>
                                                <p className='value'>{device}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* speed meter */}
                        <div className="col-lg-6 col-xl-6 col-xxl-6">
                            <div className={'d-flex justify-content-center __speedmeter  '}>
                                {!showMeter && (
                                    <button onClick={handleButtonClick} style={{ border: 'none' }}>
                                        <Checkbutton />
                                    </button>
                                )}
                                {showMeter && <Meter value={downloadSpeed} />}
                            </div>

                            {/* display the refresh button */}
                            <div className='refresh_btn'>
                                {showMeter ? <button onClick={Refresh} ><img src={refresh} /></button> : <button></button>}
                            </div>

                            {/* display the ip and provider */}
                            <div className="row mt-0 mt-lg-4 mt-xl-5 mt-xxl-5">

                                {/* empty space */}
                                <div className="col-0 col-xxl-2"></div>

                                {/* provider details */}
                                <div className="col-5 col-sm-6 col-lg-10 col-xl-4 col-xxl-4">
                                    <div className='internetinfo'>
                                        <div className='d-flex'>
                                            <div className='d-flex align-items-center pe-3'>
                                                <img src={provider} className='__img' alt='device_png' />
                                            </div>
                                            <div className=' '>
                                                <p className='title'>Provider</p>
                                                <p className='value'>{domain}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* ip details */}

                                <div className=" col-6 col-sm-6 col-lg-10 col-xl-4 col-xxl-4">
                                    <div className='internetinfo'>
                                        <div className='d-flex'>
                                            <div className='d-flex align-items-center pe-3'>
                                                <img src={ippng} className='__img' alt='device_png' />
                                            </div>
                                            <div className=' '>
                                                <p className='title'>IP Address</p>
                                                <p className='value'>{ip}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* empty space */}
                            </div>
                        </div>

                        {/* adspace container */}
                        <div className="col-lg-3 col-xl-3 col-xxl-3 ">

                        </div>
                    </div>

                    {/* Add space */}

                </div>

            </div>
            {/* about contact  */}
            <div  >

                <About />
            </div>
        </>
    );
};

export default SpeedTest;
