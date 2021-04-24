import {useState} from 'react';

const RecipeNavigation = ({setSection}) => {
    const [showNav, toggleNav] = useState(false);

    return(
        <div className={`recipe__navigation ${showNav && window.innerWidth <= 1200 ? "recipe__navigation--full" : "recipe__navigation--hidden"}`}>
            <div className={`btn__toggle ${showNav ? "btn__toggle--close" : "btn__toggle--open"}`} onClick={() => toggleNav(!showNav)}>
                <div className="hamburger"></div>
            </div>
            <div className={`recipe__navigation--mobile-background ${showNav ? "recipe__navigation--mobile-background-show" : "recipe__navigation--mobile-background-hidden"}`}></div>
            <ul className="recipe__navigation--links">
                <li onClick={() => setSection("about")}>About</li>
                <li onClick={() => setSection("recipe")}>Recipe</li>
                <li onClick={() => setSection("discussion")}>Discussion</li>
            </ul>
        </div>
    )
}

export default RecipeNavigation;
