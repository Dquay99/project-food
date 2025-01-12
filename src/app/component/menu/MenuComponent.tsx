import './menu.scss';
import {useEffect, useState} from "react";
import {getProducts, ProductModel, Sorting} from "../../service/ProductService.ts";
import RecipeItem from "./RecipeItem/RecipeItem.tsx";


function MenuComponent() {
  const [recipes, setRecipes] = useState<ProductModel[]>([]);
  const [page, setPage] = useState<number>(1);
  const [sort, setSort] = useState<Sorting>({
      type: "name",
      order: "asc"
  });
  const [totalPage, setTotalPage] = useState<number>(0);
  useEffect(() => {
      getProducts(page, sort)
          .then(response => {
              console.log("Response is: ", response);
              setRecipes(response.recipes);
              setTotalPage(Math.ceil(response.total / response.limit))
          });
  }, [page, sort]);

    const Pagination = () => {
        return Array.from({ length: totalPage }, (_, i) => (
            <button
                key={i + 1}
                className={`pagination-button ${page === i + 1 ? "active" : ""}`}
                onClick={() => setPage(i + 1)}
            >
                {i + 1}
            </button>
        ));
    };

    const handleOnChangeSortingType = (e) => {
        setSort(function (prevState) {
            return {
                ...prevState,
                type: e.target.value
            }
        })
    }

    const handleOnChangeSortingOrder = (e) => {
        setSort(function (prevState) {
            return {
                ...prevState,
                order: e.target.value
            }
        })
    }

  return (
      <div className="menu-container">
        <h1>Menu</h1>
          <div>
              <span>Sắp xếp</span>
              <select onChange={handleOnChangeSortingType}>
                  <option value="name">Tên</option>
                  <option value="rating">Đánh giá</option>
              </select>
              <select onChange={handleOnChangeSortingOrder}>
                  <option value="asc">Từ bé đến lớn</option>
                  <option value="desc">Từ lớn đến bé</option>
              </select>
          </div>
          <div className="product-list">
              {recipes.map((recipe: ProductModel) => (
                  <RecipeItem recipe={recipe}/>
              ))}
          </div>
          <div>
              <Pagination />
          </div>
      </div>
  );
}

export default MenuComponent;