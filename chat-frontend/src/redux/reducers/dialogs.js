const initialState = {
  items: [
    {
      _id: '5e8af82c11313bb59d35b24c',
      user: {
        _id: '5e8af82c3ba1a39876eac773',
        fullname: 'Natalie Gonzales',
        avatar: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'
      },
      text: 'Esse aute amet elit duis amet.',
      isReeaded: false,
      created_at: 'Thu Mar 13 2008 20:23:06 GMT+0000 (UTC)'
    },
    {
      _id: '5e8af82ca7392e5d5c9b32e0',
      user: {
        _id: 'af82c2e1c789bf9b5e7ee',
        fullname: 'Henrietta Hayden',
        avatar: null
      },
      text:
        'Proident fugiat dolore eu occaecat nostrud Lorem laborum elit mollit do irure magna veniam aliquip.',
      isReeaded: false,
      created_at: 'Fri Feb 28 1975 16:56:20 GMT+0000 (UTC)'
    },
    {
      _id: '5e8af82c0f1c4ee66f04295e',
      user: {
        _id: 'o2af82cd29acd64cc397312',
        fullname: 'Benton Vega',
        avatar: null
      },
      text:
        'Cupidatat minim consectetur laborum mollit nostrud cupidatat tempor esse deserunt proident pariatur velit.',
      isReeaded: false,
      created_at: 'Wed Jun 26 1985 01:02:59 GMT+0000 (UTC)'
    },
    {
      _id: '5e8af82ca56023551cbf9631',
      user: {
        _id: '5e8af82c566b69563c0dd7a0',
        fullname: 'Mcknight Morrow',
        avatar: null
      },
      text: 'Eiusmod consectetur incididunt tempor magna.',
      isReeaded: true,
      created_at: 'Sat Mar 28 1981 08:26:17 GMT+0000 (UTC)'
    },
    {
      _id: '5e8af82ca6f0791479c701c3',
      user: {
        _id: '5e8af82cbbb06d43e806e5f6',
        fullname: 'Bianca Hammond',
        avatar: null
      },
      text: 'Ipsum anim ut occaecat amet deserunt nisi.',
      isReeaded: false,
      created_at: 'Sat Apr 13 1974 09:36:40 GMT+0000 (UTC)'
    },
    {
      _id: '5e8af82c71f1dc7dfdd01155',
      user: {
        _id: '5e8af82cb49f90613936db04',
        fullname: 'Natalia Holt',
        avatar: null
      },
      text: 'Do irure elit officia esse Lorem ex.',
      isReeaded: true,
      created_at: 'Thu Jun 09 2011 09:34:08 GMT+0000 (UTC)'
    },
    {
      _id: '5e8af82cc28e931e88f49a4f',
      user: {
        _id: '5e8af82c6b1236e0af0e8251',
        fullname: 'Nieves Erickson',
        avatar: null
      },
      text:
        'Tempor consectetur non enim veniam proident qui voluptate irure nulla voluptate aliqua laborum.',
      isReeaded: false,
      created_at: 'Mon Jun 30 1975 20:11:27 GMT+0000 (UTC)'
    },
    {
      _id: '5e8af82ce9bfe554494c2093',
      user: {
        _id: '5e8af82c0ec8b75001618ef4',
        fullname: 'Dee Hansen',
        avatar: null
      },
      text: 'Ea anim incididunt aliqua tempor aliqua.',
      isReeaded: true,
      created_at: 'Sat Jun 24 2017 06:51:21 GMT+0000 (UTC)'
    }
  ],
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
