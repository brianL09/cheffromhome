const IngredientInput = ({onIngredientChange, addNewInput, ingredients}) => {

    const createFieldInput = (ingredient, index) => {
        let input = [];

        for(let key in ingredient){
            input.push(<input 
                key={`${key}${index}`}
                type="text"
                placeholder={key}
                value={ingredient[key]}
                onChange={(e) => onIngredientChange(e, key, index)}
            />)
        }

        return input;
    }

    const renderInputs = () => {
        let output = [];
        // for each ingredient in list
        for(let i = 0; i < ingredients.length; i++){
        //wrap the return input field from createFieldInput in a containing div
            output.push(<div key={i}>{createFieldInput(ingredients[i], i)}</div>);
        }
        //return finished ingredient inputs
        return output;
    }
    
    return(
        <div>
            {renderInputs()}
            <h1 key={'add_ingredient'} onClick={() => addNewInput('rcp_ingredients')}>
                Add New Ingredient Input
            </h1>
        </div>
    );
}

export default IngredientInput;

            

