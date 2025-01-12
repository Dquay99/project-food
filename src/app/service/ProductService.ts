export interface ProductModel {
    id: number,
    name: string,
    ingredients: string[],
    instructions: string[],
    prepTimeMinutes: number,
    cookTimeMinutes: number,
    servings: number,
    difficulty: string,
    cuisine: string,
    caloriesPerServing: number,
    tags: string[],
    userId: number,
    image: string,
    rating: number,
    reviewCount: number,
    mealType: string[]
}

export interface RecipesResponse {
    recipes: ProductModel[],
    total: number,
    skip: number,
    limit: number,
}

export interface Sorting {
    type: string,
    order: string
}

export interface Paging {
    page: number;
    size: number;
    total?: number;
}


export const getProducts = async (paging: Paging = {page: 1, size: 10}, sort: Sorting): Promise<RecipesResponse> => {
    console.log("paging", paging)
    const skip = (paging.page - 1) * paging.size;
    const response = await fetch(`https://dummyjson.com/recipes?limit=${paging.size}&skip=${skip}&sortBy=${sort.type}&order=${sort.order}`);
    console.log(response);
    return await response.json();
}

export const getProductDetail = async (id: string): Promise<ProductModel> => {
    const response = await fetch(`https://dummyjson.com/recipes/${id}`);
    return await response.json();
}