import { useState } from "react";
import { IProduct } from "../interface/Product.type";

type Props = {
  onBackBtnHandle: () => void;
  onAddNewProductHandler: (data: IProduct) => void;
};

const AddProduct = (props: Props) => {
  const { onBackBtnHandle, onAddNewProductHandler } = props;

  const [newProduct, setNewProduct] = useState({} as IProduct);

  const onProductIdChangeHnd = (e: any) => {
    setNewProduct({ ...newProduct, id: e.target.value });
  };

  const onProductNameChangeHnd = (e: any) => {
    setNewProduct({ ...newProduct, productName: e.target.value });
  };

  const onProductPriceChangeHnd = (e: any) => {
    setNewProduct({ ...newProduct, price: e.target.value });
  };
  const onProductDescriptionChangeHnd = (e: any) => {
    setNewProduct({ ...newProduct, description: e.target.value });
  };

  const onProductQuantityChangeHnd = (e: any) => {
    setNewProduct({ ...newProduct, quantity: e.target.value });
  };

  const onSubmitNewProductHnd = (e: any) => {
    e.preventDefault();
    // const data: IProduct = {
    //   id: newProduct.id,
    //   productName: newProduct.productName,
    //   description: newProduct.description,
    //   price: newProduct.price,
    //   quantity: newProduct.quantity,
    // };
    onAddNewProductHandler(newProduct);
    onBackBtnHandle();
  };

  return (
    <div className="w-full border h-full flex items-center justify-start flex-col">
      <div>
        <h3 className="text-center py-4 text-2xl">Add Product Details</h3>
      </div>
      <form
        className=" w-[60%] h-[60%] border  flex flex-col items-center justify-evenly"
        onSubmit={onSubmitNewProductHnd}
      >
        <div className="w-full flex items-center justify-center">
          <label className="w-[30%] flex items-center justify-end pr-4">
            Produc Id :{" "}
          </label>
          <input
            className="w-[60%] border border-black  px-4 py-1"
            type="text"
            value={newProduct.id}
            onChange={onProductIdChangeHnd}
          />
        </div>
        <div className="w-full flex items-center justify-center">
          <label className="w-[30%] flex items-center justify-end pr-4">
            Produc Name :{" "}
          </label>
          <input
            className="w-[60%] border border-black  px-4 py-1"
            type="text"
            value={newProduct.productName}
            onChange={onProductNameChangeHnd}
          />
        </div>
        <div className="w-full flex items-center justify-center">
          <label className="w-[30%] flex items-center justify-end pr-4">
            Description :{" "}
          </label>
          <input
            className="w-[60%] border border-black  px-4 py-1"
            type="text"
            value={newProduct.description}
            onChange={onProductDescriptionChangeHnd}
          />
        </div>
        <div className="w-full flex items-center justify-center">
          <label className="w-[30%] flex items-center justify-end pr-4">
            Price :{" "}
          </label>
          <input
            className="w-[60%] border border-black  px-4 py-1"
            type="text"
            value={newProduct.price}
            onChange={onProductPriceChangeHnd}
          />
        </div>
        <div className="w-full flex items-center justify-center">
          <label className="w-[30%] flex items-center justify-end pr-4">
            Quantity :{" "}
          </label>
          <input
            className="w-[60%] border border-black px-4 py-1"
            type="text"
            value={newProduct.quantity}
            onChange={onProductQuantityChangeHnd}
          />
        </div>
        <div className="w-[90%] flex items-center justify-end">
          <input
            className=" px-12 py-2 bg-black text-white text-base rounded-lg  cursor-pointer mr-3"
            type="button"
            value="Back"
            onClick={onBackBtnHandle}
          />
          <input
            className=" px-6 py-2 bg-black text-white text-base rounded-lg  cursor-pointer"
            type="submit"
            value="Add Product"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
