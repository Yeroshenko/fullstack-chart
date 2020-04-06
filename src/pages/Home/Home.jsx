import React from 'react'
import { Button } from 'antd'
import { TeamOutlined, FormOutlined, EllipsisOutlined } from '@ant-design/icons'

import { Dialogs } from 'containers'
import { Messages, Status, ChatInput } from 'components'
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
            <Dialogs
              userId={0}
              items={[
                {
                  _id: 'ec1a2cbb35d8b15e2574d0b3cd9b1310',
                  user: {
                    _id: 'ec1a2cbb35d8b15e2574d0b3cd9b1310',
                    fullname: 'Clark Flowers',
                    avatar: null
                  },
                  text: 'Ea pariatur pariatur cillum sunt ipsum nisi culpa.',
                  isReeaded: false,
                  created_at: 'Wed Jun 21 1989 08:01:40 GMT+0000 (UTC)'
                },
                {
                  _id: 'gk98ea2d3ed25473a2fa3c2b',
                  user: {
                    _id: 'gk98ea2db447a1013ccbea70',
                    fullname: 'Therese Moran',
                    avatar: null
                  },
                  text: 'Qui do excepteur Lorem nisi tempor qui fugiat.',
                  isReeaded: false,
                  created_at: 'Mon Jun 29 2015 08:59:07 GMT+0000 (UTC)'
                },
                {
                  _id: '1l08ea2dffa8fe848e36a30c',
                  user: {
                    _id: '1l08ea2d333822724f5fc93f',
                    fullname: 'Holland Moss',
                    avatar: null
                  },
                  text: 'Lorem in qui et sit minim in nisi.',
                  isReeaded: false,
                  created_at: 'Fri Aug 05 2005 00:55:30 GMT+0000 (UTC)'
                },
                {
                  _id: '8597df4c61307d770ad8b2ec2ef3c07e',
                  user: {
                    _id: '8597df4c61307d770ad8b2ec2ef3c07e',
                    fullname: 'Boyle Nunez',
                    avatar: null
                  },
                  text:
                    'Reprehenderit magna laborum officia cupidatat enim aliquip ipsum amet anim ad reprehenderit deserunt.',
                  isReeaded: false,
                  created_at: 'Sat Feb 03 2018 19:05:59 GMT+0000 (UTC)'
                },
                {
                  _id: '2ab40b9bcce48db9f8287a6264b3f85d',
                  user: {
                    _id: '2ab40b9bcce48db9f8287a6264b3f85d',
                    fullname: 'Nolan Dale',
                    avatar: null
                  },
                  text:
                    'Labore officia exercitation magna adipisicing incididunt exercitation reprehenderit culpa qui dolor incididunt ex tempor.',
                  isReeaded: true,
                  created_at: 'Mon Apr 23 1984 02:02:26 GMT+0000 (UTC)'
                },
                {
                  _id: '9f58cd653ca3b05fa886c5ec3c451f2e',
                  user: {
                    _id: '9f58cd653ca3b05fa886c5ec3c451f2e',
                    fullname: 'Harrington Santiago',
                    avatar: null
                  },
                  text:
                    'Qui ipsum aliquip deserunt tempor nulla eiusmod eu amet esse sit nulla ad.',
                  isReeaded: true,
                  created_at: 'Tue Nov 27 2007 08:59:32 GMT+0000 (UTC)'
                },
                {
                  _id:
                    'c58fbf8447a09613787b6b261fb50b82641afefe87cf25d0ec61646fcd0c1288',
                  user: {
                    _id:
                      'c58fbf8447a09613787b6b261fb50b82641afefe87cf25d0ec61646fcd0c1288',
                    fullname: 'Bridgett Winters',
                    avatar: null
                  },
                  text:
                    'In et occaecat laboris anim occaecat consequat eu ad ex duis ut pariatur cillum velit.',
                  isReeaded: false,
                  created_at: 'Sun Mar 21 2010 07:59:03 GMT+0000 (UTC)'
                },
                {
                  _id: '641afefe87cf25d0ec61646fcd0c1288',
                  user: {
                    _id: '641afefe87cf25d0ec61646fcd0c1288',
                    fullname: 'Colette Pacheco',
                    avatar: null
                  },
                  text:
                    'Exercitation enim nulla Lorem veniam commodo ullamco sint adipisicing.',
                  isReeaded: false,
                  created_at: 'Sun Nov 03 2019 23:07:56 GMT+0000 (UTC)'
                },
                {
                  _id: 'a328b44944d8a5b97a202850515948cd',
                  user: {
                    _id: 'a328b44944d8a5b97a202850515948cd',
                    fullname: 'Fitzgerald Holloway',
                    avatar: null
                  },
                  text:
                    'Ipsum nostrud aliqua aliqua minim exercitation sint esse.',
                  isReeaded: false,
                  created_at: 'Wed Nov 17 1999 21:35:59 GMT+0000 (UTC)'
                },
                {
                  _id: '5e88ea2dfb5247e08af4116b',
                  user: {
                    _id: '5e88ea2d332b00e46901fb3e',
                    fullname: 'Lynda Collins',
                    avatar: null
                  },
                  text:
                    'Cillum reprehenderit sint qui qui veniam ipsum id excepteur tempor proident.',
                  isReeaded: false,
                  created_at: 'Mon Nov 25 2019 02:36:54 GMT+0000 (UTC)'
                }
              ]}
            />
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
