import React from 'react'
// import PropTypes from 'prop-types'
import cn from 'classnames'
import format from 'date-fns/format'
import isToday from 'date-fns/isToday'

import { IconReaded, Avatar } from 'components'
import './DialogItem.scss'

const getMessageTime = created_at => {
  const date = Date.parse(created_at)

  if (isToday(date)) {
    return format(date, 'HH :mm')
  } else {
    return format(date, 'dd.MM.yyyy')
  }
}

const DialogItem = ({
  _id,
  user,
  created_at,
  text,
  isMe,
  unread,
  onSelect,
  currentDialogId
}) => {
  return (
    <div
      className={cn('dialogs__item', {
        'dialogs__item--online': user.isOnline,
        'dialogs__item--selected': currentDialogId === _id
      })}
      onClick={onSelect.bind(this, _id)}
    >
      <div className='dialogs__item-avatar'>
        <Avatar user={user} />
      </div>
      <div className='dialogs__item-info'>
        <div className='dialogs__item-info-top'>
          <b>{user.fullname}</b>
          <time>{getMessageTime(created_at)}</time>
        </div>
        <div className='dialogs__item-info-bottom'>
          <p>{text}</p>
          {isMe && (
            <IconReaded
              isMe={true}
              isReaded={true}
              className='dialogs__item-info-bottom-readed'
            />
          )}
          {unread > 0 && (
            <div className='dialogs__item-info-bottom-count'>
              {unread < 9 ? unread : '+9'}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

DialogItem.propTypes = {}

export default DialogItem
