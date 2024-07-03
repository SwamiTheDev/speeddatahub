import './checkbutton.css'

export default function Checkbutton(props) {
    return (
        <>
            <div className='button-container'>
                <button onClick={props.function} className="effect1_alt">
                    <span className="label">check</span>
                </button>
            </div>
        </>
    )
}

