import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { convertCurrentTime } from 'utils/helpers'
import { Time, IconReaded, Avatar } from 'components'
import waveIcon from 'assets/img/wave.svg'
import playIcon from 'assets/img/play.svg'
import pauseIcon from 'assets/img/pause.svg'
import './Message.scss'

const MessageAudio = ({ audio }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const audioElem = useRef(null)

  useEffect(() => {
    audioElem.current.addEventListener('play', () => {
      setIsPlaying(true)
    })
    audioElem.current.addEventListener('ended', () => {
      setIsPlaying(false)
      setProgress(0)
      setCurrentTime(0)
    })
    audioElem.current.addEventListener('pause', () => {
      setIsPlaying(false)
    })
    audioElem.current.addEventListener('timeupdate', () => {
      const duration = (audioElem.current && audioElem.current.duration) || 0
      setCurrentTime(audioElem.current.currentTime)
      setProgress((audioElem.current.currentTime / duration) * 100)
    })
  }, [])

  const togglePlay = () => {
    audioElem.current.volume = '0.2'
    if (!isPlaying) {
      audioElem.current.play()
    } else {
      audioElem.current.pause()
    }
  }

  return (
    <div className='message__audio'>
      <audio ref={audioElem} src={audio} preload='auto' />
      <div
        className='message__audio-progress'
        style={{ width: `${progress}%` }}
      ></div>
      <div className='message__audio-info'>
        <div className='message__audio-btn'>
          <button onClick={togglePlay}>
            {isPlaying ? (
              <img src={pauseIcon} alt='pause icon' />
            ) : (
              <img src={playIcon} alt='play icon' />
            )}
          </button>
        </div>
        <div className='message__audio-wave'>
          <img src={waveIcon} alt='wave' />
        </div>
        <span className='message__audio-duration'>
          {convertCurrentTime(currentTime)}
        </span>
      </div>
    </div>
  )
}

const Message = ({
  avatar,
  user,
  text,
  date,
  isMe,
  isReaded,
  attachments,
  isTyping,
  audio
}) => {
  return (
    <div
      className={cn('message', {
        'message--isme': isMe,
        'message--is-typing': isTyping,
        'message--is-audio': audio,
        'message--image': attachments && attachments.length === 1
      })}
    >
      <div className='message__avatar'>
        <Avatar user={user} />
      </div>

      <div className='message__content'>
        {attachments && (
          <div className='message__attachments'>
            {attachments.map((item, index) => (
              <div className='message__attachments-item' key={index}>
                <img src={item.url} alt={item.filename} />
              </div>
            ))}
          </div>
        )}

        {(audio || text || isTyping) && (
          <div className='message__bubble'>
            {text && <p className='message__text'>{text}</p>}
            {isTyping && (
              <div className='message__typing'>
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
            {audio && <MessageAudio audio={audio} />}
          </div>
        )}
        {date && (
          <time className='message__date'>
            <Time date={date} />
          </time>
        )}
      </div>

      <IconReaded isMe={isMe} isReaded={isReaded} className='message__status' />
    </div>
  )
}

Message.defaultProps = {
  user: {}
}

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
  attachments: PropTypes.array,
  isTyping: PropTypes.bool,
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
  audio: PropTypes.string
}

export default Message
