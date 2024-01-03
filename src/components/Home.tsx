import React, { useEffect, useState } from "react";
import {
  IProduct,
  PageEnum,
  dummyProductList,
} from "../interface/Product.type";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";

const Home = () => {
  const [productList, setProductList] = useState([] as IProduct[]);
  const [shownPage, setShownPage] = useState(PageEnum.list);
  const [dataToEdit, setDataToEdit] = useState({} as IProduct);

  useEffect(() => {
    const listInString = window.localStorage.getItem("ProductList");
    if (listInString) {
      _setProductList(JSON.parse(listInString));
    }
  }, []);

  const onAddProductClickHnd = () => {
    setShownPage(PageEnum.add);
  };

  const showProductListPage = () => {
    setShownPage(PageEnum.list);
  };

  const _setProductList = (list: IProduct[]) => {
    setProductList(list);
    window.localStorage.setItem("ProductList", JSON.stringify(list));
  };

  const addProduct = (data: IProduct) => {
    _setProductList([...productList, data]);
  };

  const onDeleteProduct = (data: IProduct) => {
    // to get the index from the product list
    // splice array
    // update new array
    const indexofDeleteProduct = productList.indexOf(data);
    console.log("print data ", indexofDeleteProduct);
    const tempList = [...productList];
    tempList.splice(indexofDeleteProduct, 1);
    _setProductList(tempList);
  };

  const editProduct = (data: IProduct) => {
    setShownPage(PageEnum.edit);
    setDataToEdit(data);
  };

  

  const updateTheProduct = (data: IProduct) => {
    const filterdData = productList.filter((x) => x.id === data.id)[0];
    console.log("filterd data: ", filterdData);
    const indexOfProduct = productList.indexOf(filterdData);
    console.log("indexOfProduct: ", indexOfProduct);
    const tempData = [...productList];
    console.log("indexOfProduct: ", tempData);
    tempData[indexOfProduct] = data;
    console.log(" tempData[indexOfProduct] ", tempData[indexOfProduct]);
    _setProductList(tempData);
  };

  return (
    <div className="h-screen w-full">
      <article>
        <header>
          <h1 className=" underline text-center text-3xl py-4">
            {" "}
            Product List
          </h1>
        </header>
      </article>
      <section className="ml-[10%] mr-[10%] mt-3 w-[80%] h-[85%] min-w-[1250px] overflow-y-auto  ">
        {shownPage === PageEnum.list && (
          <>
            <input
              type="button"
              value="Add Product"
              className=" px-4 py-2 bg-black text-white text-base rounded-lg mb-4 cursor-pointer  "
              onClick={onAddProductClickHnd}
            />
            <ProductList
              list={productList}
              onDeleteClickhdn={onDeleteProduct}
              onEdit={editProduct}
            />
          </>
        )}
        {shownPage === PageEnum.add && (
          <AddProduct
            onBackBtnHandle={showProductListPage}
            onAddNewProductHandler={addProduct}
          />
        )}
        {shownPage === PageEnum.edit && (
          <EditProduct
            data={dataToEdit}
            onBackBtnHandle={showProductListPage}
            onUpdateData={updateTheProduct}
          />
        )}
      </section>
    </div>
  );
};

export default Home;
