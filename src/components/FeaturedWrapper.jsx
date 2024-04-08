const FeaturedWrapper = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-20">
      {children}
    </div>
  );
};

export default FeaturedWrapper;
