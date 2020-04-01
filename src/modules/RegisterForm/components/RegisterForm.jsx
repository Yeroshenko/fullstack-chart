import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'antd'
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  InfoCircleTwoTone
} from '@ant-design/icons'

import { Button, ShadowBlock, Input } from 'components'

class RegisterForm extends Component {
  render() {
    const success = false
    return (
      <>
        <div className='auth__top'>
          <h2>Регистрация</h2>
          <p>Для входа в чат, вам нужно зарегистрироваться</p>
        </div>
        <ShadowBlock>
          {!success && (
            <Form name='login' className='auth__form'>
              <Form.Item>
                <Input
                  prefix={<MailOutlined />}
                  placeholder='E-mail'
                  size='large'
                />
              </Form.Item>

              <Form.Item>
                <Input
                  prefix={<UserOutlined />}
                  placeholder='Ваше имя'
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
}

export default RegisterForm
