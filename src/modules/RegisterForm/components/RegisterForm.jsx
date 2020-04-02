import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'antd'
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  InfoCircleTwoTone
} from '@ant-design/icons'

import { validateField } from 'utils/helpers'
import { Button, ShadowBlock, Input } from 'components'

const RegisterForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
    handleBlur
  } = props

  const success = false
  return (
    <>
      <div className='auth__top'>
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам нужно зарегистрироваться</p>
      </div>
      <ShadowBlock>
        {!success && (
          <Form className='auth__form' onSubmit={handleSubmit}>
            <Form.Item
              hasFeedback
              validateStatus={validateField('email', touched, errors)}
              help={touched.email && errors.email}
            >
              <Input
                id='email'
                prefix={<MailOutlined />}
                placeholder='E-mail'
                size='large'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>

            <Form.Item>
              <Input
                prefix={<UserOutlined />}
                placeholder='Ваше имя'
                size='large'
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
                onBlur={handleBlur}
              />
            </Form.Item>

            <Form.Item>
              <Input
                prefix={<LockOutlined />}
                type='password'
                placeholder='Повторите пароль'
                size='large'
              />
            </Form.Item>

            <Form.Item>
              <Button
                type='primary'
                size='large'
                className='login-form-button'
                onClick={handleSubmit}
              >
                Зарегистрироваться
              </Button>
            </Form.Item>

            <Link to='/login' className='auth__register-link'>
              Войти в аккаунт
            </Link>
          </Form>
        )}
        {success && (
          <div className='auth__success-block'>
            <InfoCircleTwoTone style={{ fontSize: '48px' }} />
            <h3>Подтвердите свой аккаунт</h3>
            <p>
              На Вашу почту отправлено письмо с ссылкой на подтверждение
              аккаунта.
            </p>
          </div>
        )}
      </ShadowBlock>
    </>
  )
}

export default RegisterForm
