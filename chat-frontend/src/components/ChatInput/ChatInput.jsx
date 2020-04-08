import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { UploadField } from '@navjobs/upload'
import { Input, Button } from 'antd'
import {
  SmileOutlined,
  AudioOutlined,
  SendOutlined,
  CameraOutlined
} from '@ant-design/icons'
import { Picker } from 'emoji-mart'

import './ChatInput.scss'

const ChatInput = ({ className }) => {
  const [value, setValue] = useState('')
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false)

  const changeHandler = e => setValue(e.target.value)
  const toggleEmojiPickerVisible = () => {
    setEmojiPickerVisible(!emojiPickerVisible)
  }

  return (
    <div className={cn('chat-input', className)}>
      <div className='chat-input__smile-btn'>
        {emojiPickerVisible && (
          <div className='chat-input__emoji-picker'>
            <Picker set='apple' />
          </div>
        )}
        <Button
          type='link'
          onClick={toggleEmojiPickerVisible}
          icon={<SmileOutlined />}
          size='large'
        />
      </div>
      <Input
        placeholder='Введите текст сообщения…'
        size='large'
        value={value}
        onChange={changeHandler}
      />
      <div className='chat-input__actions'>
        <UploadField
          onFiles={files => console.log(files)}
          containerProps={{
            className: 'chat-input__actions-upload-btn'
          }}
          uploadProps={{
            accept: '.jpg,.jpeg,.png,.bmp',
            multiple: 'multiple'
          }}
        >
          <Button type='link' icon={<CameraOutlined />} size='large' />
        </UploadField>
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
