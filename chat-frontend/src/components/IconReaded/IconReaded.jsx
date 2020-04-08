import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import readedIcon from 'assets/img/readed.svg'
import noreadedIcon from 'assets/img/noreaded.svg'

const IconReaded = ({ isMe, isReaded, className }) => (
  <Fragment>
    {isMe && (
      <div className={cn('icon-readed', className)}>
        {isReaded ? (
          <img src={readedIcon} alt='readed' />
        ) : (
          <img src={noreadedIcon} alt='no readed' />
        )}
      </div>
    )}
  </Fragment>
)

IconReaded.propTypes = {
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool
}

export default IconReaded
