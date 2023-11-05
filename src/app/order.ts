export interface Order {
    orderNumber: number;
    customer: string;
    products: {
      product: string;
      productImg: string;
      quantity: number;
    }[];
    address: string;
  }