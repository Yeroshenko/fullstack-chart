import React from 'react'
import PropTypes from 'prop-types'
// import cn from 'classnames'
import { Empty } from 'antd'

import { Message } from '../'
import './Messages.scss'

const Messages = ({ items }) => {
  return (
    <>
      {items ? (
        <div>
          <Message
            avatar='https://cutt.ly/1tYF4rp'
            date='Wed Apr 01 2020 16:18:26'
            audio='https://www.myinstants.com/media/sounds/trollolol.swf.mp3'
          />
          <Message
            avatar='https://cutt.ly/1tYF4rp'
            date='Wed Apr 01 2020 16:18:26'
            audio='https://www.myinstants.com/media/sounds/wow-mlg-sound-effect.mp3'
          />
          <Message
            avatar='https://cutt.ly/1tYF4rp'
            text='Салам, Брут! Чё, как, уничтожил флот галлов?'
            date='Wed Apr 01 2020 16:18:26'
            isMe={false}
          />
          <Message
            avatar='https://cutt.ly/ktY1uAQ'
            text='Всё норм! Флот построили на Лауре. Галлов добили после вашего нападения. Спс! 🔥'
            date='Wed Apr 01 2020 16:18:26'
            isMe={true}
            isReaded={true}
          />
          <Message
            avatar='https://cutt.ly/1tYF4rp'
            text='Всё норм! 🔥'
            date='Wed Apr 01 2020 16:22:26'
            attachments={[
              {
                filename: 'image.jpg',
                url: 'https://i.picsum.photos/id/46/100/100.jpg'
              },
              {
                filename: 'image2.jpg',
                url: 'https://i.picsum.photos/id/77/100/100.jpg'
              },
              {
                filename: 'image3.jpg',
                url: 'https://i.picsum.photos/id/264/100/100.jpg'
              }
            ]}
          />
          <Message
            avatar='https://cutt.ly/ktY1uAQ'
            text='Ave Caesar! Morituri te salutant! ☝️'
            date='Wed Apr 01 2020 17:18:26'
            isMe={true}
            isReaded={true}
            attachments={[
              {
                filename: 'image.jpg',
                url: 'https://i.picsum.photos/id/90/100/100.jpg'
              },
              {
                filename: 'image2.jpg',
                url: 'https://i.picsum.photos/id/115/100/100.jpg'
              },
              {
                filename: 'image3.jpg',
                url: 'https://i.picsum.photos/id/228/100/100.jpg'
              }
            ]}
          />
          <Message
            avatar='https://cutt.ly/1tYF4rp'
            attachments={[
              {
                filename: 'image.jpg',
                url: 'https://i.picsum.photos/id/230/150/150.jpg'
              }
            ]}
            isMe
          />
          <Message
            avatar='https://cutt.ly/1tYF4rp'
            isReaded={true}
            attachments={[
              {
                filename: 'image.jpg',
                url: 'https://i.picsum.photos/id/140/150/150.jpg'
              }
            ]}
          />
          <Message avatar='https://cutt.ly/1tYF4rp' isTyping />
        </div>
      ) : (
        <Empty description={'Нет сообщений'} />
      )}
    </>
  )
}

Messages.propTypes = {
  items: PropTypes.array,
  clssName: PropTypes.string
}

export default Messages
