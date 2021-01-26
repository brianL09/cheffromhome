import sprite from "../../SVG/sprite.svg";

const SvgIcon = (props) => {
    return (
        <div style={{display:"inline-block", border: "1px solid dodgerblue", margin: "2rem"}}>
            <h6 style={{display: "inline-block", fontSize: "1em"}}>SVG:</h6>
            <svg style={{ border: "1px solid green", height: props.size, width: props.size}}>
                <use href={`${sprite}${props.icon}`}/>
            </svg>
        </div>
    )
}

export default SvgIcon;
