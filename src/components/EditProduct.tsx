import { useState } from "react";
import { IProduct } from "../interface/Product.type";

type Props = {
  data: IProduct;
  onBackBtnHandle: () => void;
  onUpdateData: (data: IProduct) => void;
};

const EditProduct = (props: Props) => {
  const { data, onBackBtnHandle, onUpdateData } = props;
  const [updateProduct, setupdateProduct] = useState(data);
  const onProductIdChangeHnd = (e: any) => {
    setupdateProduct({ ...updateProduct, id: e.target.value });
  };

  const onProductNameChangeHnd = (e: any) => {
    setupdateProduct({ ...updateProduct, productName: e.target.value });
  };

  const onProductPriceChangeHnd = (e: any) => {
    setupdateProduct({ ...updateProduct, price: e.target.value });
  };
  const onProductDescriptionChangeHnd = (e: any) => {
    setupdateProduct({ ...updateProduct, description: e.target.value });
  };

  const onProductQuantityChangeHnd = (e: any) => {
    setupdateProduct({ ...updateProduct, quantity: e.target.value });
  };
  const onSubmitupdateProductHnd = (e: any) => {
    e.preventDefault();
    // const data: IProduct = {
    //   id: updateProduct.id,
    //   productName: updateProduct.productName,
    //   description: updateProduct.description,
    //   price: updateProduct.price,
    //   quantity: updateProduct.quantity,
    // };
    onUpdateData(updateProduct);
    onBackBtnHandle();
  };

  return (
    <div className="w-full  h-full flex items-center justify-start flex-col">
     
      <form
        className=" w-[60%] h-[60%] border rounded-xl flex flex-col items-center justify-evenly py-10 mt-10"
        onSubmit={onSubmitupdateProductHnd}
      >
        <div className="w-full flex items-center justify-center">
          <label className="w-[30%] flex items-center justify-end pr-4">
            Produc Id :{" "}
          </label>
          <input
            className="w-[60%] border border-black  px-4 py-1"
            type="text"
            value={updateProduct.id}
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
            value={updateProduct.productName}
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
            value={updateProduct.description}
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
            value={updateProduct.price}
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
            value={updateProduct.quantity}
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
            value="Update Product"
          />
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
