import React from 'react'
import { Button } from 'antd'
import { TeamOutlined, FormOutlined, EllipsisOutlined } from '@ant-design/icons'

import { Dialogs, Messages } from 'containers'
import { Status, ChatInput } from 'components'
import './Home.scss'

const Home = () => {
  return (
    <section className='home'>
      <div className='chat'>
        <div className='chat__sidebar'>
          <div className='chat__sidebar-header'>
            <div>
              <TeamOutlined />
              <span className='chat__sidebar-header__title'>
                Список диалогов
              </span>
            </div>
            <Button type='link' icon={<FormOutlined />} size='large' />
          </div>

          <div className='chat__sidebar-dialogs'>
            <Dialogs userId={0} />
          </div>
        </div>
        <div className='chat__dialog'>
          <div className='chat__dialog-header'>
            <b className='chat__dialog-username'>Гай Юлий Цезарь</b>
            <div className='chat__dialog-status'>
              <Status online={true} />
            </div>
            <Button type='link' icon={<EllipsisOutlined />} size='large' />
          </div>
          <div className='chat__dialog-messages'>
            <Messages />
          </div>
          <div className='chat__dialog-input'>
            <ChatInput />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
