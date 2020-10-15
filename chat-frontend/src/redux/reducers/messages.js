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
      date: 'Thu Mar 13 2008 20:23:06 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
    },
    {
      _id: '5e8af82cb13534acf4ea2a29',
      user: {
        _id: '5e8af82ccb2f27cf4bc34597',
        fullname: 'Zelma Baker',
        avatar: null
      },
      text:
        'Officia laboris occaecat reprehenderit sit irure qui nulla consectetur eu labore.',
      isReeaded: true,
      date: 'Mon Mar 28 1994 21:14:58 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
    },
    {
      _id: '5e8af82c226aefef28f92c4e',
      user: {
        _id: '5e8af82c2b8a9d031f5d773b',
        fullname: 'Anthony Bradford',
        avatar: null
      },
      text: 'Duis enim in consectetur ut sint.',
      isReeaded: false,
      date: 'Fri Feb 10 2012 03:24:04 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
    },
    {
      _id: '5e8af82c59b61e0ce19e3bab',
      user: {
        _id: '5e8af82c6b1e38d6748b66bb',
        fullname: 'Gates Whitney',
        avatar: null
      },
      text:
        'Et voluptate ullamco excepteur aute sit occaecat minim non occaecat.',
      isReeaded: false,
      date: 'Sun Jan 04 1981 23:51:43 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
    },
    {
      _id: '5e8af82c9f01869e328db6d0',
      user: {
        _id: '5e8af82c3b5b111c0fedfeea',
        fullname: 'Hodges Barlow',
        avatar: null
      },
      text:
        'Cupidatat cillum enim laborum laborum aliqua consectetur non veniam sunt excepteur laboris incididunt commodo voluptate.',
      isReeaded: false,
      date: 'Thu Mar 01 2012 12:46:36 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
    },
    {
      _id: '5e8af82c63ffc089605cbc04',
      user: {
        _id: '5e8af82c78ad2ecc92c997c9',
        fullname: 'Cleo Kerr',
        avatar: null
      },
      text:
        'Lorem irure eiusmod tempor minim enim adipisicing sit dolore consectetur officia amet occaecat pariatur.',
      isReeaded: false,
      date: 'Wed Mar 19 1986 12:19:25 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
    },
    {
      _id: '5e8af82c47ac6da24cf1ce41',
      user: {
        _id: '5e8af82c74e530a88374d85f',
        fullname: 'Alston Mcmahon',
        avatar: null
      },
      text:
        'Nostrud incididunt aute duis qui do exercitation officia cupidatat ea incididunt minim.',
      isReeaded: false,
      date: 'Sat Nov 29 1997 15:40:36 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
    },
    {
      _id: '5e8af82c7d4c86177df963ed',
      user: {
        _id: '5e8af82cc31edd1ba49bccbb',
        fullname: 'Hurst Cleveland',
        avatar: null
      },
      text:
        'In nulla laborum excepteur aliqua elit ad aliqua velit Lorem labore consectetur.',
      isReeaded: true,
      date: 'Sat Jun 10 2017 09:31:46 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
    },
    {
      _id: '5e8af82cf56580fb7493b03f',
      user: {
        _id: '5e8af82c52db68408df143a6',
        fullname: 'Opal Abbott',
        avatar: null
      },
      text:
        'Pariatur reprehenderit adipisicing adipisicing et cillum officia et aliqua nostrud ex pariatur.',
      isReeaded: false,
      date: 'Mon Mar 07 1977 00:06:47 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
    },
    {
      _id: '5e8af82c3608aba4938cbe61',
      user: {
        _id: '5e8af82ce5413c62ab8da3c2',
        fullname: 'Nicole Rice',
        avatar: null
      },
      text:
        'Eiusmod officia et elit adipisicing fugiat amet irure non tempor excepteur.',
      isReeaded: false,
      date: 'Sun Jun 06 1971 00:40:18 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
    },
    {
      _id: '5e8af82c0978f2d9e2e81eb5',
      user: {
        _id: '5e8af82cb52bb1f153bb707d',
        fullname: 'Vasquez Paul',
        avatar: null
      },
      text: 'Nostrud culpa reprehenderit duis amet cillum eu.',
      isReeaded: false,
      date: 'Wed Aug 12 2009 05:37:31 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
    },
    {
      _id: '5e8af82cfc874bfb0a9a67b7',
      user: {
        _id: '5e8af82c0010ba0a9efb6edf',
        fullname: 'Brianna Rich',
        avatar: null
      },
      text:
        'Culpa consectetur pariatur consequat commodo officia minim nostrud pariatur voluptate ad Lorem.',
      isReeaded: false,
      date: 'Sun Feb 18 2001 01:32:49 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
    },
    {
      _id: '5e8af82cf101ded690ce1555',
      user: {
        _id: '5e8af82c933e9ce16d39b9e9',
        fullname: 'Finch Henson',
        avatar: null
      },
      text:
        'Nostrud laboris culpa amet qui sunt veniam eu dolore et deserunt mollit qui in.',
      isReeaded: false,
      date: 'Fri Jun 22 2018 07:34:09 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
    },
    {
      _id: '5e8af82c7d610277ece3127c',
      user: {
        _id: '5e8af82c2e2936c394fc830f',
        fullname: 'Katina Pittman',
        avatar: null
      },
      text: 'Adipisicing fugiat cillum do est quis minim dolor.',
      isReeaded: true,
      date: 'Tue Jan 11 2011 04:23:18 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
    },
    {
      _id: '5e8af82c2507ae16577e63fc',
      user: {
        _id: '5e8af82c7e85ee4df60c10d7',
        fullname: 'Waller Rocha',
        avatar: null
      },
      text:
        'Aliquip excepteur cupidatat consectetur deserunt proident laboris quis Lorem nulla est ipsum irure aute officia.',
      isReeaded: false,
      date: 'Wed Nov 29 2017 22:08:17 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
    },
    {
      _id: '5e8af82c1a4e270d94a65085',
      user: {
        _id: '5e8af82c43a9c5b5d448d022',
        fullname: 'Silva Fletcher',
        avatar: null
      },
      text: 'Quis cupidatat dolor irure duis pariatur consectetur.',
      isReeaded: true,
      date: 'Sat May 31 2014 18:11:44 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
    },
    {
      _id: '5e8af82ce3a48a974808c085',
      user: {
        _id: '5e8af82c3a98937da7925900',
        fullname: 'Hickman Gibbs',
        avatar: null
      },
      text: 'Exercitation ut velit dolor ex nulla in ad aliqua.',
      isReeaded: true,
      date: 'Wed Feb 12 1975 04:42:22 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
    },
    {
      _id: '5e8af82ccb660f4ef552a707',
      user: {
        _id: '5e8af82c81fe9983fa41437b',
        fullname: 'Tucker Buckner',
        avatar: null
      },
      text: 'Ad anim commodo ut veniam irure.',
      isReeaded: true,
      date: 'Mon Sep 30 1974 19:19:57 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
    },
    {
      _id: '5e8af82c665215cbbad74115',
      user: {
        _id: '5e8af82c84fd0f83c5e78856',
        fullname: 'Williamson Harper',
        avatar: null
      },
      text:
        'Officia incididunt sunt quis labore aute ad ad aliquip enim veniam qui nisi occaecat dolore.',
      isReeaded: true,
      date: 'Fri Dec 11 2009 10:14:36 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
    },
    {
      _id: '5e8af82c73a54f048c192d55',
      user: {
        _id: '5e8af82c56ac7095c7370782',
        fullname: 'William Mccall',
        avatar: null
      },
      text: 'Ea velit proident id Lorem Lorem incididunt duis Lorem amet.',
      isReeaded: false,
      date: 'Fri Sep 06 1996 07:56:53 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
    },
    {
      _id: '5e8af82c1289aa81b4efc609',
      user: {
        _id: '5e8af82ca45cced30bc528da',
        fullname: 'Cathleen Cruz',
        avatar: null
      },
      text: 'Reprehenderit amet consectetur ipsum ea esse nulla cillum est.',
      isReeaded: true,
      date: 'Thu Dec 19 2002 19:52:18 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
    },
    {
      _id: '5e8af82cb41064b7c229d0d1',
      user: {
        _id: '5e8af82c2653591aee4ef917',
        fullname: 'Jenna Rogers',
        avatar: null
      },
      text:
        'Velit commodo proident sint fugiat ipsum exercitation non id officia qui.',
      isReeaded: true,
      date: 'Mon Jul 22 1991 21:13:42 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
    },
    {
      _id: '5e8af82ce3b03f6dc505efd1',
      user: {
        _id: '5e8af82c909240fc37bf8b4c',
        fullname: 'Frye Newman',
        avatar: null
      },
      text:
        'Laborum est excepteur nostrud fugiat do adipisicing voluptate non in sint.',
      isReeaded: true,
      date: 'Fri Mar 27 2015 14:51:54 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
    },
    {
      _id: '5e8af82ccee12b91636ab23b',
      user: {
        _id: '5e8af82c00cc30ac11852259',
        fullname: 'Tommie Albert',
        avatar: null
      },
      text:
        'Ea officia est ea proident Lorem duis est ut nulla pariatur Lorem quis consequat exercitation.',
      isReeaded: true,
      date: 'Sun Dec 28 1975 02:36:00 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
    },
    {
      _id: '5e8af82ce0a17ddd4538b4df',
      user: {
        _id: '5e8af82c8aba639bfe53a2d5',
        fullname: 'Burton Gallegos',
        avatar: null
      },
      text:
        'Voluptate velit dolore fugiat irure dolore aliquip laborum et amet nisi velit tempor reprehenderit.',
      isReeaded: false,
      date: 'Mon Oct 01 1979 22:36:59 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
    },
    {
      _id: '5e8af82c3bca09f8981fba92',
      user: {
        _id: '5e8af82c25f63dc85c869175',
        fullname: 'Mari Burgess',
        avatar: null
      },
      text:
        'Nulla ut ad ea adipisicing tempor enim commodo eu do reprehenderit cillum consectetur tempor.',
      isReeaded: true,
      date: 'Sun Feb 18 1979 20:57:57 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
    },
    {
      _id: '5e8af82c8442df62c5072d49',
      user: {
        _id: '5e8af82c8418c810b817da06',
        fullname: 'Spears Cummings',
        avatar: null
      },
      text: 'Voluptate nisi nisi elit dolore id.',
      isReeaded: true,
      date: 'Sun Oct 19 1975 03:09:49 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
    },
    {
      _id: '5e8af82cc182d6c649c93ab1',
      user: {
        _id: '5e8af82c01546e17a005f065',
        fullname: 'Holly Perkins',
        avatar: null
      },
      text:
        'Non veniam dolore laboris esse proident mollit ipsum nostrud ipsum enim est.',
      isReeaded: false,
      date: 'Sun Mar 15 1987 01:49:43 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
    },
    {
      _id: '5e8af82c2e9cb3e834122557',
      user: {
        _id: '5e8af82c7cc08bd39296e6c9',
        fullname: 'Tonia Combs',
        avatar: null
      },
      text: 'Do exercitation sunt irure officia consequat cillum veniam in.',
      isReeaded: true,
      date: 'Sat Oct 03 1987 07:30:22 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
    },
    {
      _id: '5e8af82cc0a2d9453efcdb70',
      user: {
        _id: '5e8af82c494f9f30bf0b8cfa',
        fullname: 'Hopkins Moreno',
        avatar: null
      },
      text:
        'Voluptate minim minim nostrud ea laborum cupidatat incididunt aute cupidatat.',
      isReeaded: false,
      date: 'Thu Apr 17 2008 19:36:54 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
    },
    {
      _id: '5e8af82cb71c91e7e550139f',
      user: {
        _id: '5e8af82c1c0b71062baa8ff9',
        fullname: 'Angel Contreras',
        avatar: null
      },
      text: 'Officia in aute consectetur non ea duis.',
      isReeaded: true,
      date: 'Wed May 01 1991 16:15:26 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
    },
    {
      _id: '5e8af82c21afab13a25a8b90',
      user: {
        _id: '5e8af82cc76ffb6847b57c99',
        fullname: 'Serena Martin',
        avatar: null
      },
      text: 'Nisi ex magna elit adipisicing magna sit.',
      isReeaded: false,
      date: 'Thu Jan 02 1997 12:38:54 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
    },
    {
      _id: '5e8af82c358f0b75694d74bb',
      user: {
        _id: '5e8af82c15260439e7f476bc',
        fullname: 'Tisha Blake',
        avatar: null
      },
      text:
        'Pariatur enim et sit reprehenderit esse ullamco eu in officia aliquip veniam non proident.',
      isReeaded: false,
      date: 'Wed Apr 12 2000 00:24:30 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
    },
    {
      _id: '5e8af82ca7392e5d5c9b32e0',
      user: {
        _id: '5e8af82c2e1c789bf9b5e7ee',
        fullname: 'Henrietta Hayden',
        avatar: null
      },
      text:
        'Proident fugiat dolore eu occaecat nostrud Lorem laborum elit mollit do irure magna veniam aliquip.',
      isReeaded: false,
      date: 'Fri Feb 28 1975 16:56:20 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
    },
    {
      _id: '5e8af82c0f1c4ee66f04295e',
      user: {
        _id: '5e8af82cd29acd64cc397312',
        fullname: 'Benton Vega',
        avatar: null
      },
      text:
        'Cupidatat minim consectetur laborum mollit nostrud cupidatat tempor esse deserunt proident pariatur velit.',
      isReeaded: false,
      date: 'Wed Jun 26 1985 01:02:59 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
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
      date: 'Sat Mar 28 1981 08:26:17 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
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
      date: 'Sat Apr 13 1974 09:36:40 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
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
      date: 'Thu Jun 09 2011 09:34:08 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
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
      date: 'Mon Jun 30 1975 20:11:27 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
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
      date: 'Sat Jun 24 2017 06:51:21 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c',
      isMe: true
    },
    {
      _id: '5e8af82ce9bfe554494c2093',
      user: {
        _id: '5e8af82c0ec8b75001618ef4',
        fullname: 'MALADOY',
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlbglatVBDYyrXXzvlVzovq-4lV3FqLwUeOg&usqp=CAU'
      },
      audio:
        'https://www.myinstants.com/media/sounds/anime-wow-sound-effect-mp3cut.mp3',
      isReeaded: true,
      date: 'Sat Jun 24 2017 06:51:21 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
    },
    {
      _id: '5e8af82ce9bfe554494c2093',
      user: {
        _id: '5e8af82c0ec8b75001618ef4',
        fullname: 'MALADOY',
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlbglatVBDYyrXXzvlVzovq-4lV3FqLwUeOg&usqp=CAU'
      },
      attachments: [
        {
          filename: 'image.jpg',
          url: 'https://i.pinimg.com/originals/02/19/f3/0219f3c8b9d8c4014ff682a18e3c5722.png'
        }
      ],
      isMe: true,
      date: 'Sat Jun 24 2017 06:51:21 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
    },
    {
      _id: '5e8af82ce9bfe554494c2093',
      user: {
        _id: '5e8af82c0ec8b75001618ef4',
        fullname: 'MALADOY',
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlbglatVBDYyrXXzvlVzovq-4lV3FqLwUeOg&usqp=CAU'
      },
      isTyping: true,
      date: 'Sat Jun 24 2017 06:51:21 GMT+0000 (UTC)',
      dialog: '5e8af82c11313bb59d35b24c'
    }
  ],
  isLoading: false
}

const messages = (state = initialState, action) => {
  switch (action.type) {
    case 'MESSAGES:SET_ITEMS':
      return {
        ...state,
        items: action.payload,
        isLoading: false
      }

    case 'MESSAGES:SET_IS_LOADING':
      return {
        ...state,
        isLoading: action.payload
      }

    default:
      return state
  }
}

export default messages
