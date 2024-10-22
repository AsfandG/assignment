import { Input } from "@/components/ui/input";
import { HiMail } from "react-icons/hi";
import { CiUser } from "react-icons/ci";
import { MdLockOutline } from "react-icons/md";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { registerUser, User } from "@/store/reducers/authSlice";
import toast from "react-hot-toast";
import { useAppDispatch } from "@/store/hook";

const FormSchema = z
  .object({
    email: z.string().min(2, {
      message: "email must be at least 2 characters.",
    }),
    name: z.string().min(2, {
      message: "name must be at least 2 characters.",
    }),
    password: z.string().min(3, {
      message: "Password must be at least 3 characters.",
    }),
    confirmPassword: z.string().min(3, {
      message: "Confirm password must be at least 3 characters.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match.",
    path: ["confirmPassword"], // This will target the confirmPassword field.
  });

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = users.some((user) => user.name === data.name);

    if (userExists) {
      toast.error("User already exists!");
      return;
    }

    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));

    dispatch(registerUser(data));
    toast.success("account created successfully!");
    navigate("/login");
  }
  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex flex-col ">
                    <label className="flex items-center space-x-2 border px-2 rounded-md">
                      <CiUser className="text-gray-500" size={20} />

                      <Input
                        {...field}
                        placeholder="Name"
                        className="flex-1 bg-transparent border-none outline-none focus:outline-none focus:ring-0 focus:border-none w-full"
                      />
                    </label>
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex flex-col ">
                    <label className="flex items-center space-x-2 border px-2 rounded-md">
                      <HiMail className="text-gray-500" size={20} />

                      <Input
                        {...field}
                        type="email"
                        placeholder="Email"
                        className="flex-1 bg-transparent border-none outline-none focus:outline-none focus:ring-0 focus:border-none w-full"
                      />
                    </label>
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex flex-col ">
                    <label className="flex items-center space-x-2 border px-2 rounded-md">
                      <MdLockOutline className="text-gray-500" size={20} />

                      <Input
                        type="password"
                        {...field}
                        placeholder="Password"
                        className="flex-1 bg-transparent border-none outline-none focus:outline-none focus:ring-0 focus:border-none w-full"
                      />
                    </label>
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex flex-col ">
                    <label className="flex items-center space-x-2 border px-2 rounded-md">
                      <MdLockOutline className="text-gray-500" size={20} />

                      <Input
                        {...field}
                        type="password"
                        placeholder="ConfirmPassword"
                        className="flex-1 bg-transparent border-none outline-none focus:outline-none focus:ring-0 focus:border-none w-full"
                      />
                    </label>
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            variant="primary"
            className="py-2 rounded-full"
            size="sm"
          >
            Create Account
          </Button>
        </form>
      </Form>

      <p className="text-xs text-center text-neutral-800 my-3">
        Already have an account?
      </p>

      <Link to="/login">
        <Button
          type="submit"
          variant="outline"
          className="w-full rounded-full py-2"
        >
          Login
        </Button>
      </Link>
    </div>
  );
};

export default RegisterForm;
