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
        <div className="section__recipe--yield col-12 flex flex__wrap flex__justify--center">
        <div>
            <input type="text" value={total} onChange={e => updateYield(e.target.value)}/>
        </div>
            <h1 className=" col-12 u-center-text section__recipe--msg">portions</h1>
            {errorMsg ? <h1 className="error__card">{errorMsg}</h1> : ""}
    </div>
    )
}

export default RecipeYield;