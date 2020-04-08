import React from 'react'
import cn from 'classnames'

import './ShadowBlock.scss'

const ShadowBlock = ({ children, className }) => (
  <div className={cn('shadow-block', className)}>{children}</div>
)

export default ShadowBlock
