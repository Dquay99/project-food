import { useParams } from 'react-router-dom';
import {useEffect, useState} from "react";
import {getProductDetail, ProductModel} from "../../../service/ProductService.ts";

const RecipeDetails = () => {
    const { id } = useParams<string>();
    const [recipe, setRecipe] = useState<ProductModel>()
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getProductDetail(id)
            .then(data => {
                console.log("Data is: ", data);
                if (data) {
                    setLoading(false);
                    setRecipe(data);
                }
            })
    }, []);

    return (
        <div>
            { loading ? <p>Đang tải dữ liệu</p> : (
                <div>
                    <h1>{recipe.name}</h1>
                    <img src={recipe.image} alt="recipe" />
                    <p>{recipe.difficulty}</p>
                    <p>{recipe.ingredients}</p>
                    <p>{recipe.instructions}</p>
                </div>
            ) }
        </div>
    );
};

export default RecipeDetails;