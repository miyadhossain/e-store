import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import BounceLoader from "react-spinners/BounceLoader";
import { getAllProducts } from "../api";
import ProductPagination from "../components/Pagination";

const Products = () => {
  const [perPage, setPerPage] = useState(12);
  const [page, setPage] = useState(0);

  const { data: products, isLoading } = useQuery(
    ["allProducts", perPage, page],
    () => getAllProducts(perPage, page),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  const handleChange = (event, value) => {
    setPage(value);
  };

  const count = Math.ceil(products?.total / products?.limit);

  useEffect(() => {
    document.title = "Products";
  }, []);

  if (isLoading)
    return (
      <div className="h-screen flex justify-center items-center">
        <BounceLoader color="#36d7b7" />
      </div>
    );
  return (
    <div className="container px-5 mx-auto my-24">
      <h6 className="text-xl my-4">Products</h6>
      <div className="flex flex-wrap -m-4">
        {products.products?.length > 0
          ? products?.products?.map((product) => (
              <div key={product?.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className=" object-center w-full h-full block rounded-lg"
                    src={product?.thumbnail}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xl tracking-widest mb-1">
                    {product?.title}
                  </h3>
                  <h2 className="text-gray-900 text-sm">
                    {product?.description}
                  </h2>
                  <p className="mt-1">${product?.price}</p>
                </div>
              </div>
            ))
          : "Products  Not Found!"}
      </div>
      <div className="flex justify-end items-center mt-6">
        <ProductPagination
          count={count}
          page={page}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Products;
