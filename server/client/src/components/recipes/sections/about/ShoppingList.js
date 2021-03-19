import SvgIcon from '../../../icons/SvgIcon';

const ShoppingList = ({list}) => {
    const renderShoppingList = (list) => {
        let result = [];
        for(let category in list){
            result.push(returnSubList(list[category], category));
        }
        return result;
    }

    const returnSubList = (list, heading) => {
        let result = [];
        result.push(<li className="list__heading list__heading--primary" key={`${heading}`}><SvgIcon icon={`#icon-${heading}`}/>{heading}</li>);
        for(let i = 0; i < list.length; i++){
            result.push(<li className="list__item" key={`${heading}-${i}`}>{list[i]}</li>);
        }
        return <ul key={heading} className="shopping__list col-4">{result}</ul>
    }

    const shopping = {
        dairy: ["milk", "cheese", "yogurt"],
        meat: ["beef tenderloin", "chicken breast", "Fish Filet"],
        vegetable: ["onion", "carrot", "celery", "yukon potato"],
        dry: ["salt", "pepper"],
    }

    return(
        <div className="section__about--shopping flex flex__justify--center">
            <div className="flex__heading recipe__heading--shopping col-12">
                <h4 className="heading__tertiary">Heres what you'll need:</h4>
            </div>
            {renderShoppingList(shopping)}
        </div>
    )
}

export default ShoppingList;