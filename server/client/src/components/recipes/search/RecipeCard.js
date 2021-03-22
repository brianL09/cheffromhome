import React from 'react';
import {NavLink} from 'react-router-dom';
import SVGIcon from '../../icons/SvgIcon';

const RecipeCard = ({data}) => {
    // console.log(data);
    return(
        <div className="recipe-card">
            <div className="recipe-card__image">
                <img className="recipe-card__image--image"
                     alt={data.basicInfo.thumbnail.alt} 
                     src={data.basicInfo.thumbnail.src}/>
            </div>
            <div className="recipe-card__content">
                <h3 className="recipe-card__content--heading">{data.basicInfo.title}</h3>
                <h4 className="recipe-card__content--content">{data.about.paragraphs[0]}</h4>
            </div>
            <div className="recipe-card__links">
                <div className="recipe-card__links--link">
                    <NavLink to={`/recipe/edit/${data._id}`}>
                        <SVGIcon icon="#icon-edit"/>
                    </NavLink>
                </div>
                <div className="recipe-card__links--link">
                    <NavLink to={`/recipe/edit/${data._id}`}>
                        <SVGIcon icon="#icon-edit"/>
                    </NavLink>
                </div>
                <div className="recipe-card__links--link">
                    <NavLink to={`/recipe/edit/${data._id}`}>
                        <SVGIcon icon="#icon-edit"/>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard;