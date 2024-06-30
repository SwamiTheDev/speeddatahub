import React from 'react';
import ReactSpeedometer from "react-d3-speedometer";
import './ping.css'

const Ping = ({ value }) => {
    return (
        <div className="speedometer">
            <h2>Ping Speed</h2>
            <ReactSpeedometer
                maxValue={100}
                className='meter'
                value={value}
                needleTransitionDuration={1000}
                needleTransition="easeElastic"
                currentValueText={`${value} ms`}
                segmentColors={["#007fff", "#FAFAFA"]}
            />
        </div>
    );
};

export default Ping;
