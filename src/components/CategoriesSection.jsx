import BagImage from "../assets/bag.jpg";
import ElectronicsImage from "../assets/electronics.jpg";
import ShoesImage from "../assets/shoes.jpg";
import AccessoriesImage from "../assets/watch.jpg";

const categories = [
  {
    id: 1,
    name: "Accessories",
    img: AccessoriesImage,
  },
  {
    id: 2,
    name: "Electronics",
    img: ElectronicsImage,
  },
  {
    id: 3,
    name: "Bags",
    img: BagImage,
  },
  {
    id: 4,
    name: "Shoes",
    img: ShoesImage,
  },
];

const CategoriesSection = () => {
  return (
    <div className="mt-20">
      <h2 className="text-2xl lg:text-4xl font-semibold text-center">
        Shop By Category
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {categories.map((item) => (
          <div key={item.id}>
            <img
              className="object-center w-full block rounded-lg"
              src={item.img}
              alt="categories image"
            />
            <h6 className="text-center text-2xl font-semibold mt-2">
              {item.name}
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
