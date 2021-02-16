import SvgIcon from '../icons/SvgIcon';

const IngredientInput = ({onIngredientChange, addNewInput, ingredients}) => {
    console.log('hello ing');
    const createFieldInput = (ingredient, index) => {
        let input = [];
        // let placeholders = ["Onions", "50", "g", "Vegetable"];
        let placeholders = ["Ingredient", "Qty", "Unit", "Food Type"]
        
        let i = 0;
        
        for(let key in ingredient){
            console.log(ingredient[key]);
            input.push(<input 
                key={`${key}${index}`}
                type="text"
                placeholder={placeholders[i]}
                className={`input__ingredient--${key}`}
                value={ingredient[key]}
                onChange={(e) => onIngredientChange(e, key, index)}
            />)
            i++;
        }

        return input;
    }

    const renderInputs = () => {
        let output = [];
        console.log('render ing');
        // for each ingredient in list
        for(let i = 0; i < ingredients.length; i++){
        //wrap the return input field from createFieldInput in a containing div
            output.push(<div className="input__ingredient--container" key={i}>{createFieldInput(ingredients[i], i)}</div>);
        }
        //return finished ingredient inputs
        return output;
    }
    
    return(
        <div className="input__ingredient">
            {renderInputs()}
            <div className="icon__container icon__container--recipe" onClick={() => addNewInput('rcp_ingredients')}>
                <SvgIcon icon={"#icon-add"} fill={"white"} stroke={"silver"} size={"1.5em"} centered={true}/>
            </div>
        </div>
    );
}

export default IngredientInput;

            

