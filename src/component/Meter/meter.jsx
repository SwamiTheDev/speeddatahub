import ReactSpeedometer from "react-d3-speedometer";
import './meter.css';

export default function Meter(props) {
    return (
        <>
            <ReactSpeedometer
                className='meter'
                maxValue={100}
                ringWidth={20}
                customSegmentStops={[0, 1, 5, 10, 15, 20, 25, 30, 50, 70, 100]}
                segmentColors={["#FAFAFA", "#FAFAFA", "#FAFAFA", "#FAFAFA", "#FAFAFA", "#007fff", "#007fff", "#FAFAFA", "#FAFAFA", "#FAFAFA"]}
                needleTransitionDuration={9000}
                needleTransition="easeElastic"
                currentValueText={`${props.value} Mbps`}
                value={props.value}
            />
        </>
    )
}