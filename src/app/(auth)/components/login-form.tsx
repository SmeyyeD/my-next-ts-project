"use client"
import React, { useState } from 'react'
import PrimaryButton from './primary-button'


function loginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    alert(`Giriş yapan: ${username}`);
  };

  return (
    <div className="flex flex-col justify-center items-end pl-6 min-h-screen p-8">
      <div className="flex flex-col items-start text-left w-[500px]">
        <p className="text-lg">Welcome back!</p>
        <h1 className="text-2xl font-bold">Login to your account</h1>

        <div className="flex flex-col gap-2 w-full mt-4">
          <label htmlFor="username" className="font-semibold">E-mail</label>
          <input
            type="text"
            id="username"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="E-mail giriniz"
          />
        </div>

        <div className="flex flex-col w-full mt-4">
          <label htmlFor="password" className="font-semibold">Password</label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="*****"
          />
        </div>

        <div className="flex items-center gap-2 mt-4">
          <input type="checkbox" className="w-5 h-5" />
          <span className="text-blue-800">Remember Me</span>
        </div>
        <PrimaryButton label='Login' />
        <PrimaryButton label='Register' variant='secondary' /> 
      </div>

    </div>

  )
}

export default loginForm