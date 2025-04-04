"use client"
import React from 'react'
import { loginSchema, registerSchema } from '../utils/auth-schema';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import PrimaryButton from './primary-button';



type Props = { type: "login" | "register"};

const AuthForm = ({ type }: Props) => {
  const router = useRouter ();
  const dispatch = useDispatch();

  const authSchema = type === "login" ? loginSchema : registerSchema;
  type AuthSchema = typeof authSchema extends z.ZodTypeAny ? z.infer<typeof authSchema> : never;
};

const {
  register,
  handleSubmit,
  formState: { errors, isSubmitting },
} = useForm<AuthSchema>(
  mode: "onChange"
  resolver: zodResolver(authSchema),
});

const onSubmit = async (data: AuthSchema) => {
  try {
    const res =
    type === "login"
    ? await apiLogin(data)
    : await apiRegister(data as z.infer<typeof registerSchema>);

    const token =
    type === "login"
    ? res.data.action_login.token
    : res.data.action_register.token;

    dispatch(login(token));
    setToken(token);
    Router.push("/");
  } cath (error) {
    console.log("Giriş/Kayıt işlemi sırasında bir hata oluştu", error);
  }
};

function authform() {
  return (
    <div className='flex flex-col justify-between items-center my-20 h-full w-2/3'>
      <div>
        <Image src="/Logo.png" alt="logo" width={120} height={78} />
      </div>
      <div className='flex flex-col w-full'>
      <p className='font-semibold text-2xl'>
        {type === "login" ? "Welcome back!" : "Join us today!"}
      </p>
      <p className='font-bold text-3xl'>
        { type === "login" ? "Login to your account" : "Create your account"}
      </p>
      </div>

      <form onSubmit={handleSubmit(OnSubmit)} className='flex flex-col w-full gap-y-20'>
        <div className='flex flex-col gap-y-4'>
          <div className='flex flex-col gap-y-10'>
            { type === "register" && (
              <FormInput
              type="text"
              label="Name"
              register={register("name")}
              error={"name" in errors ? errors.name?.message : undefined}
              />
            )}
            <FormInput
            type="text"
            label="E-mail"
            register={register("email")}
            error={errors.email?.message}
            />
            <FormInput
            type="password"
            label="Password"
            register={register("password")}
            error={errors.password?.message}
            />
          </div>

          { type === "login" && (
            <label className="text-[#6251DD] font-bold">
              <input className="mr-2 accent-[#6251DD]" type="checkbox" />
              Remember me
              </label>
          )}
        </div>

        <div className='flex flex-col gap-y-2'>
          {type === "login" ? (
            <>
            <PrimaryButton disabled={isSubmitting}>Register</PrimaryButton>
            <PrimaryButton onCLick={() => Router.push("/register")} type="button" variant="secondary">Login
            </PrimaryButton>
            </>
          )};
        </div>
      </form>
    </div>
  );
};

export default AuthForm;