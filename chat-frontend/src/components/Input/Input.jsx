import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Input as BaseInput } from 'antd'

import './Input.scss'

const Input = props => (
  <BaseInput
    {...props}
    className={cn('input', props.className, {
      'input--large': props.size === 'large'
    })}
  />
)

Input.propTypes = {
  clssName: PropTypes.string
}

export default Input
