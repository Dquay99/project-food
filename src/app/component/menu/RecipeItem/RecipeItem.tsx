import {useNavigate} from "react-router-dom";
import './recipeItem.scss';

const RecipeItem = ({recipe}) => {
  const navigate = useNavigate();

  const handleItemDetails = (id: number) => {
    navigate(`/menu/${id}`);
  }

  return (
    <div key={recipe.id} className="recipe-item" onClick={() => handleItemDetails(recipe.id)}>
      <div className={'item-img'}>
        <img className={'recipeItemImg'} src={recipe.image} alt={recipe.name}/>
      </div>
      <div className={'item'}>
        <h3 className={'recipeItemName'}>{recipe.name}</h3>
        <div className={'recipeRating'}>Rating: {recipe.rating}</div>
      </div>
    </div>
  );
};

export default RecipeItem;