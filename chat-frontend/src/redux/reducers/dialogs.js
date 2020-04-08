const initialState = {
  items: [],
  currentDialogId: null,
  isLoading: false
}

const dialogs = (state = initialState, action) => {
  switch (action.type) {

    case 'DIALOGS:SET_ITEMS':
      return {
        ...state,
        items: action.payload
      }

    case 'DIALOGS:SET_CURRENT_DIALOG_ID':
      return {
        ...state,
        currentDialogId: action.payload
      }
      
    default:
      return state
  }
}

export default dialogs