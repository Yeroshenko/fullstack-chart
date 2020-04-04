import React from 'react'

import { Dialogs, Message } from 'components'
import './Home.scss'

const Home = () => {
  return (
    <section className='home'>
      <Dialogs
        userId={0}
        items={[
          {
            _id: Math.random(),

            user: {
              _id: 'f67c2bcbfcfa30fccb36f72dca22a817',
              fullname: 'Марк Цукерберг',
              avatar: 'https://cutt.ly/1tYF4rp'
            },
            text: 'Салам, Марк Чё, как, уничтожил флот галлов?',
            isReaded: true,
            created_at: 'Fri Apr 03 2020 14:56:09'
          },
          {
            _id: Math.random(),

            user: {
              _id: 'a9f2a3c1dcd5b1cac71bf0c03f2ff1bd',
              fullname: 'Йарк'
              // avatar: 'https://cutt.ly/1tYF4rp'
            },
            text: 'Hello world',
            isReaded: true,
            created_at: 'Fri Apr 03 2019 14:56:09',
            unread: 3
          }
        ]}
      />

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
    </section>
  )
}

export default Home
