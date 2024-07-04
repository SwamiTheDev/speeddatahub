import './checkbutton.css'

export default function Checkbutton(props) {
    return (
        <>
            {/* <div className='button-container'>
                <button onClick={props.function} className="effect1_alt">
                    <span className="label">Start</span>
                </button>
            </div> */}
            <div id="wrapper" className='button-container'>
                <a href="#" class="my-super-cool-btn">
                    <div class="dots-container">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </div>
                    <span>Go!</span>
                </a>
            </div>
            {/* <div className="button-container">
                <div className="pp">

                </div>
            </div> */}
        </>
    )
}

