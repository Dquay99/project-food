import { useNavigate } from "react-router-dom";

import './recipeItem.scss';
import {Card} from "antd";

const RecipeItem = ({ recipe }) => {
    const navigate = useNavigate();

    const handleItemDetails = (id: number) => {
        navigate(`/menu/${id}`);
    }

    return (
        <div key={recipe.id} className="recipe-item" onClick={() => handleItemDetails(recipe.id)}>
            <div>
                <img className={'recipeItemImg'} src={recipe.image} alt={recipe.name}/>
            </div>
            <div>
                <h2 className={'recipeItemName'}>{recipe.name}</h2>
                <p className={'recipeRating'}>Rating: {recipe.rating}</p>
            </div>
        </div>
    );
};

export default RecipeItem;