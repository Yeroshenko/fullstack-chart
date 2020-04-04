import React from 'react'
import orderBy from 'lodash/orderBy'

import { DialogItem } from 'components'
import './Dialogs.scss'

const Dialogs = ({ items, userId }) => {
  return (
    <div className='dialogs'>
      {orderBy(items, ['created_at'], ['desc']).map(item => (
        <DialogItem
          key={item._id}
          isMe={item.user._id === userId ? true : false}
          {...item}
        />
      ))}
    </div>
  )
}

export default Dialogs
