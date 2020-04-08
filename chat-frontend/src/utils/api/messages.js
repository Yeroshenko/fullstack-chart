import { axios } from 'core'

const messagesApi = {
  getAllByDialogId: (id) => {
    return (
      axios.get('messages?dialog=' + id)
    )
  }
}

export default messagesApi