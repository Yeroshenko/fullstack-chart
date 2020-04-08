import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Empty, Spin } from 'antd'

import { Message } from '../'
import './Messages.scss'

const Messages = ({ isLoading, items, blockRef }) => {
  return (
    <div
      ref={blockRef}
      className={cn('messages', { 'messages--is-loading': isLoading })}
    >
      {isLoading ? (
        <Spin size='large' tip='Загрузка сообщений...' /> // loading
      ) : items && !isLoading ? (
        items.length > 0 ? (
          items.map(item => <Message {...item} key={item._id} />) // show messages
        ) : (
          <Empty description={'Диалог пуст'} /> // no messages
        )
      ) : (
        <Empty description={'Откройте диалог'} /> // dialog is not opet
      )}
    </div>
  )
}

Messages.propTypes = {
  items: PropTypes.array,
  isLoading: PropTypes.bool
}

export default Messages
