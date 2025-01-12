import './menu.scss';
import {useEffect, useState} from "react";
import {getProducts, Paging, ProductModel, RecipesResponse, Sorting} from "../../service/ProductService.ts";
import RecipeItem from "./RecipeItem/RecipeItem.tsx";
import {Pagination, Select} from "antd";

const pageDefault: Paging = {
  page: 1,
  size: 10,
  total: 0
}

function MenuComponent() {
  const [recipes, setRecipes] = useState<ProductModel[]>([]);
  const [sort, setSort] = useState<Sorting>({
    type: "name",
    order: "asc"
  });

  const [page, setPage] = useState<number>(pageDefault.page);
  const [size, setSize] = useState<number>(pageDefault.size);
  const [total, setTotal] = useState<number | undefined>(pageDefault.total);

  const loadMenu = (page: number, size: number, sort: Sorting) => {
    console.log(page, size, sort);
    getProducts({page, size}, sort)
      .then((response: RecipesResponse) => {
        console.log("Response is: ", response);
        setRecipes(response.recipes);

        setSize(response.limit);
        setTotal(response.total);
        setPage(response.skip === 0 ? 1 : Math.ceil(response.total / response.skip));
      });
  }

  useEffect(() => {
    loadMenu(page, size, sort);
  }, []);

  const handleOnChangeSortingType = (e: any) => {
    setSort(function (prevState) {
      return {
        ...prevState,
        type: e.target.value
      }
    })
  }

  const handleOnChangeSortingOrder = (e: any) => {
    setSort(function (prevState) {
      return {
        ...prevState,
        order: e.target.value
      }
    })
  }

  const changePaging = (page: number, size: number) => {
    console.log(`page: ${page} điều kiện: ${(!isNaN(page) && isFinite(page))}`)
    console.log(`size: ${size} điều kiện: ${(!isNaN(size) && isFinite(size))}`)
    setPage(page)
    setSize(size);

    loadMenu(page, size, sort);
  }

  return (
    <div className="menu-container">
      <div className={'banner-img'}>
        <img src="https://admin.sriboga.com/storage/news/1685519116-asian-cuisine-ingredients-food-background-ginger-2023-05-09-20-34-33-utc.webp" alt=""/>
        <div className={'title text-bold text-uppercase'}>Thực đơn</div>
      </div>

      {/*<Breadcrumb*/}
      {/*  style={{marginTop: 30}}*/}
      {/*  separator={<RightOutlined style={{fontSize: 10}}/>}*/}
      {/*  items={[*/}
      {/*    {*/}
      {/*      title: <Link to={'/'}>Trang chủ</Link>,*/}
      {/*    },*/}
      {/*    {*/}
      {/*      title: 'Thực đơn',*/}
      {/*    }*/}
      {/*  ]}*/}
      {/*/>*/}
      <div className={'mt-30'}>
        <span className={'mr-30 text-bold'}>Sắp xếp </span>

        <Select
          defaultValue="name"
          style={{width: 200}}
          onChange={handleOnChangeSortingType}
          options={[
            {
              label: <span>Tên</span>,
              value: 'name'
            },
            {
              label: <span>Đánh giá</span>,
              value: 'rating'
            },
          ]}
        />

        <span>&nbsp;-&nbsp;</span>

        <Select
          defaultValue="asc"
          style={{width: 200}}
          onChange={handleOnChangeSortingOrder}
          options={[
            {
              label: <span>Từ bé đến lớn</span>,
              value: 'asc'
            },
            {
              label: <span>Từ lớn đến bé</span>,
              value: 'desc'
            },
          ]}
        />
      </div>
      <div className="product-list">
        {recipes && recipes.map((recipe: ProductModel) => (
          <RecipeItem key={recipe.id} recipe={recipe}/>
        ))}
      </div>
      <div className={'my-30'}>
        <Pagination
          size={'default'}
          onChange={(page, size) => changePaging(page, size)}
          align={'end'}
          defaultCurrent={page}
          total={total}
          pageSize={size}
          showSizeChanger={true}
        />
      </div>
    </div>
  );
}

export default MenuComponent;