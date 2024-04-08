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
        <h5 className="font-bold text-2xl tracking-tight mb-2 text-white">
          {product?.title}
        </h5>

        <p className="font-normal mb-3 text-gray-400">{product?.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
