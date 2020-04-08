import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { dialogsActions } from 'redux/actions'
import { Dialogs as BaseDialogs } from 'components'

const Dialogs = ({ items, userId, fetchDialogs, currentDialogId, setCurrentDialogId }) => {

  const [inputValue, setValue] = useState('')
  const [filtered, setFilteredItems] = useState(items)

  const onChangeInput = value => {
    setFilteredItems(
      items.filter(
        dialog =>
          dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0
      )
    )
    setValue(value)
  }

  useEffect(() => {
    if (!items.length) {
      fetchDialogs()
    } else {
      setFilteredItems(items)
    }
  }, [items])

  return (
    <BaseDialogs
      userId={userId}
      items={filtered}
      onSearch={onChangeInput}
      inputValue={inputValue}
      onSelectDialog={setCurrentDialogId}
      currentDialogId={currentDialogId}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    items: state.dialogs.items,
    currentDialogId: state.dialogs.currentDialogId
  } 
}

export default connect(mapStateToProps, { ...dialogsActions })(Dialogs)
