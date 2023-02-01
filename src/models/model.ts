export type User = {
    id: string,
    name: string
    email : string,
    password : string,
  }

export enum Category {
    ACCESSORIES = "Acessórios",
    CLOTHES_AND_SHOES = "Roupas e calçados",
    ELECTRONICS = "Eletrônicos"
}

export type Product = {
    id: string,
    name : string,
    price : number,
    description: string,
    imgURL: string,
    category: Category,
    quantity: number
  }

export type Purchase = {
    id: string,
    buyer_id: string,
    totalPrice : number,
    paid : 0 | 1
  }

  export type PurchasesProductsFK = {
    purchase_id: string, 
    product_id: string,
    quantity:string
}

export type PurchasesWithProducts = {
  id: string
  buyer_id: string
  total_price: number
  paid: 0 | 1
  listOfProducts: Product[]
}
