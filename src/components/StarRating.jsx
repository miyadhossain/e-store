import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";

const StarRating = ({ rating }) => {
  // Calculate the number of full stars
  const fullStars = Math.floor(rating);

  // Check if there's a half star
  const hasHalfStar = rating % 1 >= 0.5;

  // Calculate the number of empty stars needed to fill up to 5 stars
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="inline-flex items-center text-yellow-500">
      {/* Render full stars */}
      {[...Array(fullStars)].map((_, index) => (
        <StarIcon key={index} fontSize="small" />
      ))}

      {/* Render half star if exists */}
      {hasHalfStar && <StarHalfIcon fontSize="small" />}

      {/* Render empty stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <StarBorderIcon key={index} fontSize="small" />
      ))}
    </div>
  );
};

export default StarRating;
