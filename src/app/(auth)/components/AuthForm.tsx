"use client";
import React, { useState } from "react";
import PrimaryButton from "./primary-button";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

type AuthFormProps = {
  formType: "login" | "register";
};

function AuthForm({ type }: Props ) {
    const router = useRouter()
    const authSchema = type === "login" ? loginSchema : registerSchema;
    type AuthSchema = z.infer<typeof loginSchema> | z.infer<typeof registerSchema>;
}


  return (
    <div className="flex flex-col items-center min-h-screen">
      <img src="/Logo.png" alt="Logo" className="w-[100px] h-auto mt-8 mb-8" />

      <div className="flex flex-col items-start text-left w-[500px]">
        <p className="text-lg">
          {formType === "login" ? "Tekrar hoş geldiniz!" : "Bize katılın!"}
        </p>
        <h1 className="text-2xl font-bold">
          {formType === "login" ? "Hesabınıza giriş yapın" : "Hesap oluşturun"}
        </h1>
      </div>

      <div className="w-full flex flex-col justify-start">
        {formType === "register" && (
          <div className="flex flex-col gap-2 w-full mt-4">
            <label htmlFor="fullName" className="font-semibold">
              Ad Soyad
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Adınızı giriniz"
              value={fullName}
              {...register("name",{required:true, minLength:3})}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
        )}

        <div className="flex flex-col gap-2 w-full mt-4">
          <label htmlFor="username" className="font-semibold">E-posta</label>
          <input
            type="text"
            id="username"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="E-posta adresinizi giriniz"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="flex flex-col w-full mt-4">
          <label htmlFor="password" className="font-semibold">Şifre</label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Şifrenizi giriniz"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {formType === "login" && (
          <div className="flex flex-col justify-center mt-1 mb-5">
            <label className="text-blue-800">
              <input type="checkbox" className="mr-2" /> Beni hatırla
            </label>
          </div>
        )}
      </div>

      {formType === 'login' && (
        <PrimaryButton label="Giriş Yap" onClick={handleSubmit} type="submit" />
      )}

      {formType === 'register' && (
        <PrimaryButton
          label="Kayıt Ol"
          onClick={handleSubmit}
          variant="secondary"
          type="submit"
        />
      )}
    </div>
  );
}

export default AuthForm