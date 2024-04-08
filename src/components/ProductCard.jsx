const ProductCard = ({ product }) => {
  return (
    <div className="shadow-md border rounded-lg max-w-sm bg-gray-800 border-gray-400">
      <div className="block relative h-48 rounded overflow-hidden">
        <img
          alt="E-commerce thumbnail image"
          className="image_container"
          src={product?.thumbnail}
        />
      </div>

      <div className="p-5">
        <h5 className="font-bold text-xl tracking-tight mb-2 text-white line-clamp-1">
          {product?.title}
        </h5>

        <p className="font-semibold text-lg mb-3 text-gray-400">
          ${product?.price}
        </p>

        <button className="bg-white rounded-md px-4 py-2 font-semibold">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
