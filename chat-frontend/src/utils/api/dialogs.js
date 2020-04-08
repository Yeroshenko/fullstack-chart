import { axios } from 'core'

const dialogsApi = {
  getAll: () => {
    return (
      axios.get('dialogs')
    )
  }
}

export default dialogsApi