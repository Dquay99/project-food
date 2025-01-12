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


export const getProducts = (page: number, sort: Sorting): Promise<RecipesResponse[]> => {
    const limit = 10;
    const skip = (page - 1) * limit;
    return fetch(`https://dummyjson.com/recipes?limit=${limit}&skip=${skip}&sortBy=${sort.type}&order=${sort.order}`)
        .then((response) => response.json());
}

export const getProductDetail = (id: string): Promise<ProductModel> => {
    return fetch(`https://dummyjson.com/recipes/${id}`)
        .then((response) => response.json());
}