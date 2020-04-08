import is from 'is_js'

export default ({ isAuth, values, errors }) => {
  const rules = {
    email: (value, errors) => {
      if (!value) {
        errors.email = 'Введите e-mail'
      } else if (!is.email(value)) {
        errors.email = 'Некоректный email адресс'
      }
    },
    password: (value, errors) => {
      if (!value) {
        errors.password = 'Введите пароль'
      } else if (value.length < 6) {
        errors.password = isAuth ? 'Не верный пароль' : 'Слишком легкий пароль'
      }
    }
  }

  Object.keys(values).forEach(key => {
    rules[key] && rules[key](values[key], errors)
  })
 
}
