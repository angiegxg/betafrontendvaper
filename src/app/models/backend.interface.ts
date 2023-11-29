// interface Flavor {
//   ...
// }

export interface Flavor {
    id?: number
    flavor: string
  }
  
  // interface Product {
  //   ...
  // }
  
  export interface Product {
    id?: number
    name: string
    description: string
    img: string
    cost: number
  }
  
  // interface ProductByFlavor {
  //   ...
  // }
  
  export interface ProductByFlavor {
    flavorId: number
    productId: number
    product?: Product
    flavor?: Flavor
  }
  
  // interface Seller {
  //   ...
  // }
  
  export interface Seller {
    id?: number
    name: string
    commission: number
    stock?: Stock[]
  }
  
  // interface Sale {
  //   ...
  // }
  
  export interface Sale {
    id?: number
    date: Date
    productsSold: ProductDetail[]
    sellerId: number
    total: number
  }
  
  // interface ProductDetail {
  //   ...
  // }
  
  export interface ProductDetail {
    quantity: number
    productId: number
    flavorId: number
    price: number
    saleId: number
  }
  
  // interface Stock {
  //   ...
  // }
  
  export interface Stock {
    id?: number
    productId: number
    flavorId: number
    quantity: number
    sellerId: number
    product?: ProductByFlavor
    seller?: { name: string }
  }
  
  // interface Distribution {
  //   ...
  // }
  
  export interface Distribution {
    id?: number
    quantity: number
    fromStockId: number
    sentFromStock?: Stock
    receivedAtStock?: Stock
    toStockId: number
  }
  
  // interface StockDistribution {
  //   ...
  // }
  
  export interface StockDistribution {
    stockId: number
    distributionId: number
  }
  
  