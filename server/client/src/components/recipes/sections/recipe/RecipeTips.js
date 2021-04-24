const RecipeTips = ({tips}) => {
    return(
        <div className="col-10 section__recipe--tips">
            <h1 className="u-center-text directions__heading u-margin-bottom-medium">Guidance</h1>
            <ul className="flex__justify--center u-margin-bottom-large">
                {tips.map((tip, index) => {
                    return <li key={index} className="section__recipe--item">{tip}</li>
                })}
            </ul>
            <div className="btns u-margin-bottom-medium">
                <div>
                    Add Guidance
                </div>
            </div>
        </div>
    )
}

// add click to button to switch to discussion section
export default RecipeTips;