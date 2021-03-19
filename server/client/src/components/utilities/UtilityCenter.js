const UtilityCenter = ({x,y,absolute, children}) => {
    const getCenterClass = () => {
        if(x){
            return "u-flex-h-center";
        } else if(y){
            return "u-flex-y-center";
        } else {
            return "u-flex-absolute-center";
        }
    }
    return(
        <div className={getCenterClass()}>
            <div>
                {children}
            </div>
        </div>
    )
}

export default UtilityCenter;