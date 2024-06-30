import React from 'react';
import ReactSpeedometer from "react-d3-speedometer";

const Upload = ({ value }) => {
    return (
        <div className="speedometer">
            <h2>Upload Speed</h2>
            <ReactSpeedometer
                className='meter'
                maxValue={100}
                value={value}
                needleTransitionDuration={1000}
                needleTransition="easeElastic"
                currentValueText={`${value} Mbps`}
                segmentColors={["#007fff", "#FAFAFA"]}
            />
        </div>
    );
};

export default Upload;
