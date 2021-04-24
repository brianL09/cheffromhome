const RecipeDirections = ({directions}) => {
    console.log(directions);
    return(
        <div className="col-8 directions">
            <h1 className="u-center-text directions__heading">Directions</h1>
            <ul className="directions__list u-overflow-visible u-list-style-number">
                {directions.map((direction, index) => {
                    return <li className="directions__list-item" key={index}>{direction}</li>
                })}
                                {directions.map((direction, index) => {
                    return <li className="directions__list-item" key={index}>{direction}</li>
                })}
                                {directions.map((direction, index) => {
                    return <li className="directions__list-item" key={index}>{direction}</li>
                })}
            </ul>
        </div>
    )
}

export default RecipeDirections;