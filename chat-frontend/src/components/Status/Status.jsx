import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import './Status.scss'

const Status = ({ online, clssName }) => (
  <div className={cn('status', clssName, { 'status--online': online })}>
    {online ? 'онлайн' : 'офлайн'}
  </div>
)

Status.propTypes = {
  clssName: PropTypes.string,
  online: PropTypes.bool
}

export default Status
