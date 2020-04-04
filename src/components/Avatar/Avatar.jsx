import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { generateAvatarFromHash } from 'utils/helpers'

import './Avatar.scss'

const Avatar = ({ user, className }) => {
  if (user.avatar) {
    return (
      <img
        className={cn('avatar', className)}
        src={user.avatar}
        alt={user.fullname}
      />
    )
  } else {
    const {color, colorLighten} = generateAvatarFromHash(user._id)
    const firstChar = user.fullname[0].toUpperCase()
    return (
      <div
        className={cn('avatar', 'avatar--symbol', className)}
        style={{
          background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%)`
        }}
      >
        {firstChar}
      </div>
    )
  }
}

Avatar.propTypes = {
  clssName: PropTypes.string
}

export default Avatar
