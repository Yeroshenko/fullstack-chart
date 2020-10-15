import { messagesApi } from 'utils/api'

const actions = {
  // Action creators
  setMessages: id => ({ type: 'MESSAGES:SET_ITEMS', payload: id }),
  setIsLoading: bool => ({ type: 'MESSAGES:SET_IS_LOADING', payload: bool }),

  // Thank creators
  fetchMessages: dialogId => async dispatch => {
    dispatch(actions.setIsLoading(true))
    const response = await messagesApi.getAllByDialogId(dialogId)

    dispatch(actions.setMessages(response.data))
    dispatch(actions.setIsLoading(false))
  }
}

export default actions
