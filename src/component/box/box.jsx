import boxstyle from './box.module.css'

export default function Box(props) {
    return (
        <>
            <div className={boxstyle.box}>
                <p className={boxstyle.title}>{props.title}</p>
                <p className={boxstyle.speed}>{props.speed} </p>
                <p class={boxstyle.value}>{props.value}</p>
            </div >
        </>
    )
}