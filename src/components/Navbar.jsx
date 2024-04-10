import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    {
      id: 1,
      page: "Products",
      url: "/products",
    },
    {
      id: 2,
      page: "About us",
      url: "/about-us",
    },
    {
      id: 3,
      page: "FAQs",
      url: "/faqs",
    },
  ];
  return (
    <header className="bg-white fixed inset-x-0 top-0 z-50 shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center mb-4 md:mb-0"
        >
          <span className="text-xl text-primary">E-Store</span>
        </Link>

        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center justify-center">
          {navItems.map((item) => (
            <Link
              to={item.url}
              key={item.id}
              className="mr-5 hover:text-primary"
            >
              {item.page}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
