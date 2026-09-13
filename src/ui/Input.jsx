const Input = ({ type, label, placeholder, register }) => {
  return (
    <div className=" flex flex-col gap-2 my-2">
      <label htmlFor={label} className=" text-sm capitalize font-semibold">
        {label}
      </label>
      <input
        {...register(label)}
        type={type}
        placeholder={placeholder}
        className=" border border-gray-200 px-4 py-2 rounded outline-none focus:ring-green-900"
      />
    </div>
  );
};

export default Input;
