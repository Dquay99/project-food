import {Link, useParams} from 'react-router-dom';
import {ReactNode, useEffect, useState} from "react";
import {getProductDetail, ProductModel} from "../../../service/ProductService.ts";
import {Breadcrumb, Image} from "antd";
import './RecipeDetails.scss'
import {StarFilled, StarOutlined} from "@ant-design/icons";

const recipeInit: ProductModel = {
  id: 0,
  name: 'string',
  ingredients: [],
  instructions: [],
  prepTimeMinutes: 0,
  cookTimeMinutes: 0,
  servings: 0,
  difficulty: '',
  cuisine: '',
  caloriesPerServing: 0,
  tags: [],
  userId: 0,
  image: '',
  rating: 0,
  reviewCount: 0,
  mealType: []
}

const RecipeDetails = () => {
  const {id} = useParams<string>();
  const [recipe, setRecipe] = useState<ProductModel>(recipeInit)
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (id) {
      getProductDetail(id)
        .then(data => {
          console.log("Data is: ", data);
          if (data) {
            setLoading(false);
            setRecipe(data);
          }
        })
    }
  }, [id]);

  const joinString = (values: string[]) => {
    return values.join(", ");
  }

  function generateStars(rating: number) {
    const fullStars = Math.floor(rating); // Số ngôi sao đầy
    const halfStar = (rating % 1) >= 0.5; // Kiểm tra nếu có nửa sao
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Số ngôi sao trống

    const starsHtml: ReactNode[] = [];

    // Thêm sao đầy
    for (let i = 0; i < fullStars; i++) {
      starsHtml.push(<StarFilled style={{color: '#ead45d'}}/>);
    }

    // Thêm sao nửa
    if (halfStar) {
      starsHtml.push(<StarOutlined/>);
    }

    // Thêm sao trống
    for (let i = 0; i < emptyStars; i++) {
      starsHtml.push(<StarOutlined/>);
    }

    return starsHtml;
  }

  return (
    <div>
      {loading ? <p>Đang tải dữ liệu</p> : (
        <div className={'recipe-component'}>
          <Breadcrumb
            items={[
              {
                title: <Link to={'/'} title={'Trang chủ'}>Trang chủ</Link>,
              },
              {
                title: <Link to={'/menu'} title={'Thực đơn'}>Thực đơn</Link>,
              },
              {
                title: recipe.name,
              },
            ]}
          />
          <div className={'recipe-detail'}>
            <div className={'box-image'}>
              <Image
                className={'img'}
                src={recipe.image}
              />
            </div>
            <hr/>
            <div className={'box-info'}>
              <div className={'text-bold text-uppercase name'}>{recipe.name}</div>
              <div className={'row-info'}>
                <span className={'text-bold'}>Độ khó:</span> {recipe.difficulty}
              </div>
              <div className={'row-info'}>
                <span className={'text-bold'}>Xếp hạng:</span>
                <div className="stars">
                  {generateStars(recipe.rating)}
                </div>

              </div>
              <div className={'row-info'}>
                <span className={'text-bold'}>
                  Khẩu phần ăn:
                </span>
                <span>
                  {recipe.servings}
                  <span className={'unit'}>người</span>
                </span>
              </div>
              <div className={'row-info'}>
                <span className={'text-bold'}>Xuất xứ:</span>{recipe.cuisine}
              </div>
              <div className={'row-info'}>
                <span className={'text-bold'}>
                  Thời gian chuẩn bị:</span>
                <span>
                  {recipe.prepTimeMinutes}
                  <span className={'unit'}>phút</span>
                </span>
              </div>
              <div className={'row-info'}>
                <span className={'text-bold'}>
                  Thời gian nấu ăn:
                </span>
                <span>
                  {recipe.cookTimeMinutes}
                  <span className={'unit'}>phút</span>
                </span>
              </div>
              <div className={'row-info'}>
                <span className={'text-bold'}>
                  Calories / Khẩu phần:
                </span>
                <span>
                  {recipe.caloriesPerServing}
                  <span className={'unit'}>cal</span>
                </span>
              </div>
              <div className={'row-info'}>
                <span className={'text-bold'}>Lượt đánh giá:</span>{recipe.reviewCount}
              </div>
              <div className={'row-info'}>
                <span className={'text-bold'}>Loại bữa ăn:</span>{joinString(recipe.mealType)}
              </div>

              <div className={'row-info'}>
                <span className={'text-bold'}>Tags:</span> {joinString(recipe.tags)}
              </div>

              <div className={'row-info'}>
                <span className={'text-bold'}>Thành phần:</span>
                <div style={{textAlign: 'end'}}>
                  {joinString(recipe.ingredients)}
                </div>
              </div>
              <div className={'row-info'}>
                <span className={'text-bold'}>Hướng dẫn:</span>
                <div>
                  {
                    recipe.instructions && recipe.instructions.map((item: string, index: number) => {
                      return (
                        <div style={{textAlign: "end"}} key={index}>{item}</div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;