import { useQuery } from "@tanstack/react-query";
import { BounceLoader } from "react-spinners";
import { getAllProducts } from "../api";
import ProductCard from "./ProductCard";

const NewArrivalProducts = () => {
  const { data: products, isLoading } = useQuery(
    ["allProducts", 8, 0],
    () => getAllProducts(8, 0),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading)
    return (
      <div className="h-screen flex justify-center items-center">
        <BounceLoader color="#0FBACE" />
      </div>
    );
  return (
    <section className="mt-20">
      <h6 className="text-2xl my-4 font-semibold">New Arrival</h6>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.products?.length > 0
          ? products?.products?.map((product) => (
              <ProductCard key={product?.id} product={product} />
            ))
          : "Products  Not Found!"}
      </div>
    </section>
  );
};

export default NewArrivalProducts;
