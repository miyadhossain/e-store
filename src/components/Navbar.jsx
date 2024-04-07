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
      page: "FAQ",
      url: "/faq",
    },
  ];
  return (
    <header className="text-gray-600 bg-white fixed inset-x-0 top-0 z-50 shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Link to="/">
            <span className="text-xl">Gadget Store</span>
          </Link>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          {navItems.map((item) => (
            <Link
              to={item.url}
              key={item.id}
              className="mr-5 hover:text-gray-900"
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
