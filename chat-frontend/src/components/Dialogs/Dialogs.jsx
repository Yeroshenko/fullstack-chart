import React from 'react'
import orderBy from 'lodash/orderBy'
import { Input, Empty } from 'antd'

import { DialogItem } from 'components'
import './Dialogs.scss'

const Dialogs = ({ items, userId, inputValue, onSearch, currentDialogId, onSelectDialog }) => {
  console.log(currentDialogId)
  return (
    <div className='dialogs'>
      <div className='dialogs__search'>
        <Input.Search
          placeholder='Поиск среди контактов'
          value={inputValue}
          onChange={e => onSearch(e.target.value)}
        />
      </div>
      {items && items.length ? (
        orderBy(items, ['created_at'], ['desc']).map(item => (
          <DialogItem
            key={item._id}
            onSelect={onSelectDialog}
            isMe={item.user._id === userId}
            currentDialogId={currentDialogId}
            {...item}
          />
        ))
      ) : (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={'Ничего не найдено'}
        />
      )}
    </div>
  )
}

export default Dialogs
