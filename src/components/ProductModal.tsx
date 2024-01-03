import { IProduct } from "../interface/Product.type";

type Props = {
  onCloseModal: () => void;
  data: IProduct;
};

const ProductModal = (props: Props) => {
  const { onCloseModal, data } = props;
  return (
    <div className=" h-[50%] w-[40%] rounded-2xl border flex items-center justify-center bg-white pb-10 ">
      <div className="h-full w-full">
        <div
          onClick={onCloseModal}
          className=" text-black cursor-pointer text-3xl w-full flex justify-end pt-4 pr-10 "
        >
          {" "}
          &times;
        </div>
        <div className="h-[95%] w-full flex flex-col items-center justify-evenly">
          <div className="w-full flex items-center justify-center">
            <label className="w-[45%] flex items-center justify-end pr-4">
              Produc Id :{" "}
            </label>
            <div className="w-[45%] ">{data.id}</div>
          </div>
          <div className="w-full flex items-center justify-center">
            <label className="w-[45%] flex items-center justify-end pr-4">
              Produc Name :{" "}
            </label>
            <div className="w-[45%] ">{data.productName}</div>
          </div>

          <div className="w-full flex items-center justify-center">
            <label className="w-[45%] flex items-center justify-end pr-4">
              Price :{" "}
            </label>
            <div className="w-[45%] ">{data.price}</div>
          </div>
          <div className="w-full flex items-center justify-center">
            <label className="w-[45%] flex items-center justify-end pr-4">
              Quantity :{" "}
            </label>
            <div className="w-[45%] ">{data.quantity}</div>
          </div>
          <div className="w-full  flex items-start justify-center">
            <label className="w-[45%] flex items-center justify-end pr-4">
              Description :{" "}
            </label>
            <div className="w-[45%] flex items-center ">{data.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
