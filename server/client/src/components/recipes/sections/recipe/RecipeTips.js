import Forum from '../../../forum/Forum.js';

const RecipeTips = ({tips}) => {
    return(
        <div className="col-10 section__recipe--tips">
            <h1 className="u-center-text directions__heading">Need some advice?</h1>
            <Forum></Forum>
        </div>
    )
}

// add click to button to switch to discussion section
export default RecipeTips;