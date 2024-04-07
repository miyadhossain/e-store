import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import BounceLoader from "react-spinners/BounceLoader";
import { getAllProducts } from "../api";
import ProductPagination from "../components/Pagination";

const Products = () => {
  const perPage = 12;
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
    <div className="container px-5 mx-auto my-40 lg:my-24">
      <h6 className="text-2xl my-4 font-semibold">Products</h6>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.products?.length > 0
          ? products?.products?.map((product) => (
              <div
                key={product?.id}
                className="shadow-md border rounded-lg max-w-sm bg-gray-800 border-gray-400"
              >
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="E-commerce thumbnail image"
                    className="object-center w-full h-full block rounded-lg"
                    src={product?.thumbnail}
                  />
                </div>

                <div className="p-5">
                  <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                    {product?.title}
                  </h5>

                  <p className="font-normal mb-3 text-gray-400">
                    {product?.description}
                  </p>
                </div>
              </div>
            ))
          : "Products  Not Found!"}
      </div>
      <div className="flex justify-center lg:justify-end items-center mt-6">
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
