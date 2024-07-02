import React, { useState, useEffect } from "react";
import GaugeComponent from "react-gauge-component";
import './smallmeter.css';

const SmallMeter = (props) => {
    const [loading, setLoading] = useState(true);
    const [colorArray, setColorArray] = useState(['rgb(92, 92, 92)']);

    useEffect(() => {
        // Simulating loading for 3 seconds
        const timer = setTimeout(() => {
            setLoading(false);
            setColorArray(['red', 'orange', 'yellow', 'green', 'blue']);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const subArcs = [
        { limit: 20, color: colorArray[0], showTick: true },
        { limit: 40, color: colorArray[1], showTick: true },
        { limit: 60, color: colorArray[2], showTick: true },
        { limit: 80, color: colorArray[3], showTick: true },
        { limit: 100, color: colorArray[4], showTick: true }
    ];

    return (
        <div className="gauge-container">
            <GaugeComponent
                arc={{
                    colorArray: colorArray,
                    cornerRadius: 10,
                    subArcs: subArcs
                }}
                pointer={{
                    type: 'blob',
                    animate: true,
                    color: 'red',
                    elastic: true,
                    animationDuration: 3000,
                    animationDelay: 100
                }}
                labels={{
                    valueLabel: {
                        matchColorWithArc: true
                    }
                }}
                value={props.value}
            />
        </div>
    );
};

export default SmallMeter;
