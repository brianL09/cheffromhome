import {useState} from 'react';

const RecipeYield = ({total, setYield}) => {
    const [errorMsg, setError] = useState("");
   
    const updateYield = (value) => {
       if(parseInt(value)){
           setYield(value);
           setError("");
       } else {
           setError("New yield must be a number.");
           setYield("");
       }
    }
    return(
        <div className="col-12 flex">
        <div className="section__recipe--yield">
            <input type="text" value={total} onChange={e => updateYield(e.target.value)}/>
        </div>
        {errorMsg ? <h1>{errorMsg}</h1> : ""}
    </div>
    )
}

export default RecipeYield;