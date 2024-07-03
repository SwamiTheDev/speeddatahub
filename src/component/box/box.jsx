export default function Box(props) {
    return (
        <>
            <div>
                <p>{props.title}</p>
                <p>{props.speed} <span>{props.value}</span></p>
            </div>
        </>
    )
}