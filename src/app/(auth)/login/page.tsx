import React from 'react'
import PrimaryButton from '../components/primary-button'
import LoginForm from '../components/login-form'


function page() {
  return (
    <div>
      <LoginForm />
      <PrimaryButton label='Login' />
      <PrimaryButton label='Register' variant='secondary'/>
    </div>
  )
}

export default page