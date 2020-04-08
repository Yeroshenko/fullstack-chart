import React from 'react'
import { Route } from 'react-router-dom'

import { LoginForm, RegisterForm } from 'modules'
import './Auth.scss'

const Auth = () => {
  return (
    <section className='auth'>
      <Route exact path={['/', '/login']} component={LoginForm} />
      <Route path='/register' component={RegisterForm} />
    </section>
  )
}

export default Auth
