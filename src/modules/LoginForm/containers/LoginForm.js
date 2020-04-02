import { withFormik } from 'formik'

import validateFunc from 'utils/validate'
import LoginForm from '../components/LoginForm'

export default withFormik({
  mapPropsToValues: () => ({ email: '', password: '', }),

  validate: values => {
    let errors = {}

    validateFunc({ isAuth: true, values, errors })
    
    return errors
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 1000)
  },

  displayName: 'LoginForm' // helps with React DevTools
})(LoginForm)
