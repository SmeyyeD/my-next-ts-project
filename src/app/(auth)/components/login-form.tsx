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
    <div>
      <p>Welcome back!</p>
      <h1>Login to your account</h1>
    </div>
  )
}

export default loginForm