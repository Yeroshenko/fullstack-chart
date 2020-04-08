import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'

import { messagesActions } from 'redux/actions'
import { Messages as BaseMessages } from 'components'

const Messages = ({ currentDialogId, items, fetchMessages, isLoading }) => {
  const messageRef = useRef(null)

  useEffect(() => {
    if (currentDialogId) {
      fetchMessages(currentDialogId)
    }
  }, [currentDialogId])

  useEffect(() => {
    messageRef.current.scrollTo(0, 99999)
  }, [items])

  return <BaseMessages items={items} isLoading={isLoading} blockRef={messageRef} />
}

const mapStateToProps = state => {
  return {
    currentDialogId: state.dialogs.currentDialogId,
    items: state.messages.items,
    isLoading: state.messages.isLoading
  }
}

export default connect(mapStateToProps, { ...messagesActions })(Messages)
