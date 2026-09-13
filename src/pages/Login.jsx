import { useForm } from 'react-hook-form';
import Button from '../ui/Button';
import Input from '../ui/Input';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const handleData = data => {
    console.log(data);
  };

  return (
    <div className=" max-w-sm mx-auto h-screen   items-center flex flex-col justify-center gap-2">
      <div className=" bg-blue-300 p-10 w-125 rounded-2xl">
        <h1 className=" text-2xl font-bold">Login</h1>
        <p className=" text-base">Welcome to User</p>
        <form onSubmit={handleSubmit(handleData)}>
          <Input
            type="email"
            label="email"
            placeholder="Enter your email"
            register={register}
          />
          <Input
            type="password"
            label="password"
            placeholder="Enter your password"
            register={register}
          />
          <Button />
        </form>
      </div>
    </div>
  );
};

export default Login;
