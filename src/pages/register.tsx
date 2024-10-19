import RegisterForm from "@/components/register/register-form";

const Register = () => {
  return (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-3/5 bg-background rounded-lg flex overflow-hidden h-max">
        <div className="w-3/5 bg-primary flex items-center justify-center">
          <div className="text-background flex items-center justify-center flex-col">
            <img src="/images/Frame.png" alt="art" className="w-40" />
            <h2 className="font-semibold text-xl my-2">Welcome to our shop</h2>
            <p className="font-normal text-sm">Purchase imported shoes</p>
          </div>
        </div>
        <div className="flex-1 p-8">
          <h2 className="text-center font-semibold text-xl py-2">
            Registeration
          </h2>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
