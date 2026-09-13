const Button = ({ text = 'login' }) => {
  return (
    <div>
      <button
        type="submit"
        className=" bg-orange-500 text-white font-semibold px-4 py-2 rounded cursor-pointer"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
