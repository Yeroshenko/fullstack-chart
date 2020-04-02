import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { Time, IconReaded } from 'components'
import './DialogItem.scss'

const getAvatar = avatar => {
  if (avatar) {
    return <img src={avatar} alt={`avatar`} />
  } else {
    // color avatar
  }
}

const DialogItem = ({ user, message, unreaded }) => {
  return (
    <div
      className={cn('dialogs__item', {
        'dialogs__item--online': user.isOnline
      })}
    >
      <div className='dialogs__item-avatar'>
        {/* <img src={user.avatar} alt={`${user.fullname} avatar`} /> */}
        {getAvatar('https://cutt.ly/1tYF4rp')}
      </div>
      <div className='dialogs__item-info'>
        <div className='dialogs__item-info-top'>
          <b>Фёдор Достоевский</b>
          <time>
            13:03
            {/* <Time date={new Date()} /> */}
          </time>
        </div>
        <div className='dialogs__item-info-bottom'>
          <p>Мы все свидетельствуем все свидетельствуем все свидетельствуем</p>
          <IconReaded
            isMe={true}
            isReaded={true}
            className='dialogs__item-info-bottom-readed'
          />
          {unreaded > 0 && (
            <div className='dialogs__item-info-bottom-count'>{unreaded < 9 ? unreaded : '+9'}</div>
          )}
        </div>
      </div>
    </div>
  )
}

DialogItem.propTypes = {}

export default DialogItem
