const AppButton = ({ text }) => {
  return (
    <button className="bg-primary text-white rounded-md px-2 lg:px-10 py-2 lg:py-3 mt-5 hover:bg-primary/70">
      {text}
    </button>
  );
};

export default AppButton;
