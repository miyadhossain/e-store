import FavoriteIcon from "@mui/icons-material/Favorite";
import StarRating from "./StarRating";

const ProductCard = ({ product }) => {
  return (
    <div className="shadow-md border rounded-lg max-w-sm bg-gray-800 border-gray-400">
      <div className="block relative h-48 rounded">
        <img
          alt="E-commerce thumbnail image"
          className="image_container"
          src={product?.thumbnail}
        />
        <div className="absolute top-2 right-3 text-white bg-teal-500 rounded-md px-2 py-0.5 text-xs">
          <span className="font-semibold">
            {Math.ceil(product?.discountPercentage)}% OFF
          </span>
        </div>
      </div>

      <div className="p-5">
        <h5 className="font-bold mb-2 text-white line-clamp-1 capitalize">
          {product?.title}
        </h5>

        <div className="flex items-center justify-between mb-3">
          <div className="font-semibold text-lg text-gray-400">
            ${product?.price}
          </div>

          <StarRating rating={product?.rating} />
        </div>

        <div className="flex items-center justify-between">
          <button className="bg-white rounded-md px-4 py-0.5 font-semibold text-sm">
            Add to Cart
          </button>
          <div title="Wishlist" className="cursor-pointer">
            <FavoriteIcon style={{ color: "red" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
