import { dialogsApi } from 'utils/api'

const actions = {
  // Action creators
  setDialogs: id => ({ type: 'DIALOGS:SET_ITEMS', payload: id }),
  setCurrentDialogId: id => ({
    type: 'DIALOGS:SET_CURRENT_DIALOG_ID',
    payload: id
  }),

  // Thank creators
  fetchDialogs: () => async dispatch => {
    const response = await dialogsApi.getAll()

    dispatch(actions.setDialogs(response.data))
  }
}

export default actions
