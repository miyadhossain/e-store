import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import BounceLoader from "react-spinners/BounceLoader";
import { getAllProducts } from "../api";
import ProductPagination from "../components/Pagination";
import ProductCard from "../components/ProductCard";

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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const count = Math.ceil(products?.total / products?.limit);

  useEffect(() => {
    document.title = "Products";
  }, []);

  if (isLoading)
    return (
      <div className="h-screen flex justify-center items-center">
        <BounceLoader color="#0FBACE" />
      </div>
    );
  return (
    <div className="container px-5 mx-auto my-40 lg:my-24">
      <h6 className="text-2xl my-4 font-semibold">Products</h6>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.products?.length > 0
          ? products?.products?.map((product) => (
              <ProductCard key={product?.id} product={product} />
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
