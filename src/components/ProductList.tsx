import { useState } from "react";
import { IProduct } from "../interface/Product.type";
import ProductModal from "./ProductModal";

type Props = {
  list: IProduct[];
  onDeleteClickhdn: (data: IProduct) => void;
  onEdit: (data: IProduct) => void;
};

const ProductList = (props: Props) => {
  const { list, onDeleteClickhdn, onEdit } = props;
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(
    null as IProduct | null
  );
  const viewProduct = (data: IProduct) => {
    setSelectedProduct(data);
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  console.log("List: ", list);

  return (
    <div className=" w-full h-full">
      <table className="w-full">
        <tr className="flext items-center justify-evenly border w-full py-4 ">
          <th className="text-center py-4">ID</th>
          <th className="text-center py-4">Product Name</th>
          <th className="text-center py-4">Price</th>
          <th className="text-center py-4">Quantity</th>
          <th className="text-center py-4">Action</th>
        </tr>

        {list.map((product) => {
          return (
            <tr
              key={product.id}
              className="flext items-center justify-evenly border w-full py-4 "
            >
              <td className="text-center py-4 px-12">{product.id}</td>
              <td className="text-center py-4 px-12">{product.productName}</td>
              <td className="text-center py-4 px-12">{product.price}</td>
              <td className="text-center py-4 px-12">{product.quantity}</td>
              <td className="text-center py-4">
                <input
                  className=" px-12 py-2 bg-black text-white text-base rounded-lg  cursor-pointer mr-3"
                  type="button"
                  value="View"
                  onClick={() => viewProduct(product)}
                />{" "}
                <input
                  className=" px-12 py-2 bg-black text-white text-base rounded-lg  cursor-pointer mr-3"
                  type="button"
                  value="Edit"
                  onClick={() => onEdit(product)}
                />
                <input
                  className=" px-12 py-2 bg-black text-white text-base rounded-lg  cursor-pointer mr-3"
                  type="button"
                  value="Delete"
                  onClick={() => onDeleteClickhdn(product)}
                />
              </td>
            </tr>
          );
        })}
      </table>
      {showModal && selectedProduct !== null && (
        <div className="w-full h-full flex items-center justify-center fixed bg-[#00000080] inset-0 backdrop-filter backdrop-blur-[6px]">
          <ProductModal onCloseModal={onCloseModal} data={selectedProduct} />
        </div>
      )}
    </div>
  );
};

export default ProductList;
