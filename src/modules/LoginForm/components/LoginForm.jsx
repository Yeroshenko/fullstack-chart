import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import { Button, Input, ShadowBlock } from 'components'

class LoginForm extends Component {
  render() {
    return (
      <>
        <div className='auth__top'>
          <h2>Войти в аккаунт</h2>
          <p>Пожалуйста, войдите в свой аккаунт</p>
        </div>
        <ShadowBlock>
          <Form name='login' className='auth__form'>
            <Form.Item>
              <Input
                prefix={<UserOutlined />}
                placeholder='Имя пользователя'
                size='large'
              />
            </Form.Item>

            <Form.Item>
              <Input
                prefix={<LockOutlined />}
                type='password'
                placeholder='Пароль'
                size='large'
              />
            </Form.Item>

            <Form.Item>
              <Button type='primary' size='large' className='login-form-button'>
                ВОЙТИ В АККАУНТ
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
}

export default LoginForm
