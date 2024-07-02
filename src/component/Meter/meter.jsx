import { Heat, Flat } from '@alptugidin/react-circular-progress-bar';
import './meter.css'; // Import CSS for styling

const Meter = (props) => {

    return (
        <div className="speedometer-container">


            <Flat className='meter'
                progress={props.value}
                sx={{
                    strokeColor: '#5f5353', // Main stroke color
                    bgStrokeColor: '#0000FF', // Background stroke color (blue)
                    barWidth: 5,
                    bgColor: { value: '#de8282', transparency: '10' },
                    shape: 'threequarters',
                    valueSize: 20,
                    valueWeight: 'lighter',
                    valueFamily: 'Candara',
                    textFamily: 'Calibri',
                    miniCircleColor: '#100f0f',
                    miniCircleSize: 0,
                    shadow: true,
                    shadowColor: '#0000FF', // Apply shadow color
                    shadowBlur: 10, // Adjust blur for better visibility
                }}
            />


        </div>
    );
};

export default Meter;
