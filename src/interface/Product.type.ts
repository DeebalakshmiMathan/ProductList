export interface IProduct {
  id: string;
  productName: string;
  description: string;
  price: string;
  quantity: string;
}

export const dummyProductList: IProduct[] = [
  {
    id: "1",
    productName: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: "549",
    quantity: "6",
  },
  {
    id: " 2",
    productName: "iPhone 10",
    description: "An apple mobile which is nothing like apple",
    price: "548",
    quantity: "4",
  },
  {
    id: "3",
    productName: "iPhone 11",
    description: "An apple mobile which is nothing like apple",
    price: "547",
    quantity: "5",
  },
  {
    id: "4",
    productName: "iPhone 12",
    description: "An apple mobile which is nothing like apple",
    price: "546",
    quantity: "3",
  },
];

export enum PageEnum {
  list,
  add,
  edit,
}
