import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import {
  SmileOutlined,
  AudioOutlined,
  SendOutlined,
  CameraOutlined
} from '@ant-design/icons'
import { Input, Button } from 'antd'

import './ChatInput.scss'

const ChatInput = ({ className }) => {
  const [value, setValue] = useState('')

  const changeHandler = e => setValue(e.target.value)

  return (
    <div className={cn('chat-input', className)}>
      <div className='chat-input__smile-btn'>
        <Button type='link' icon={<SmileOutlined />} size='large' />
      </div>
      <Input
        placeholder='Введите текст сообщения…'
        size='large'
        value={value}
        onChange={changeHandler}
      />
      <div className='chat-input__actions'>
        <Button type='link' icon={<CameraOutlined />} size='large' />
        {value.length > 0 ? (
          <Button type='link' icon={<SendOutlined />} size='large' />
        ) : (
          <Button type='link' icon={<AudioOutlined />} size='large' />
        )}
      </div>
    </div>
  )
}

ChatInput.propTypes = {
  clssName: PropTypes.string
}

export default ChatInput
