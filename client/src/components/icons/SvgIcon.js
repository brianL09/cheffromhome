import sprite from "../../SVG/sprite.svg";

const SvgIcon = (props) => {
    return (
        <div>
            <svg style={{height: props.size, width: props.size}}>
                <use href={`${sprite}${props.icon}`}/>
            </svg>
        </div>
    )
}

export default SvgIcon;
