import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'antd'
import { LockOutlined, MailOutlined } from '@ant-design/icons'

import { validateField } from 'utils/helpers'
import { Button, Input, ShadowBlock } from 'components'

const LoginForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
    handleBlur
  } = props

  return (
    <>
      <div className='auth__top'>
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйста, войдите в свой аккаунт</p>
      </div>
      <ShadowBlock>
        <Form className='auth__form' onSubmit={handleSubmit}>
          <Form.Item
            hasFeedback
            validateStatus={validateField('email', touched, errors)}
            help={touched.email && errors.email}
          >
            <Input
              id='email'
              prefix={<MailOutlined />}
              placeholder='E-mail пользователя'
              size='large'
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item
            hasFeedback
            validateStatus={validateField('password', touched, errors)}
            help={touched.password && errors.password}
          >
            <Input
              id='password'
              prefix={<LockOutlined />}
              type='password'
              placeholder='Пароль'
              size='large'
              value={values.password}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type='primary'
              size='large'
              className='login-form-button'
              onClick={handleSubmit}
            >
              Войти в аккаунт
            </Button>
          </Form.Item>

          <Link to='/register' className='auth__register-link'>
            Зарегистрироваться
          </Link>
        </Form>
      </ShadowBlock>
    </>
  )
}

export default LoginForm
