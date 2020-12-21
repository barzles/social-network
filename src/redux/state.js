let store = {
  _state: {
    profilePage: {
      postsData: [
        {
          message: 'Hello friend!',
          id: 1,
          likesCount: 7
        },
        {
          message: 'How are you ?',
          id: 2,
          likesCount: 5
        },
        {
          message: 'How old are you ?',
          id: 3,
          likesCount: 12
        },
        {
          message: 'What is your name?',
          id: 4,
          likesCount: 13
        },
      ],
      newPostText: '',
    },
    dialogsPage: {
      dialogsData: [
        {
          name: 'Morozov',
          id: 1
        },
        {
          name: 'Guro',
          id: 2
        },
        {
          name: 'Stas',
          id: 3
        },
        {
          name: 'Shulyak',
          id: 4
        },
      ],
      messagesData: [
        {
          message: 'Lorem ipsum dolor.'
        },
        {
          message: 'Lorem ipsum dolor sit amet.'
        },
        {
          message: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
        },
        {
          message: 'Lorem ipsum dolor sit amet, consectetur.'
        },
      ]
    },
  },
  _callSubscriber() {
    console.log('State changed')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) { // {type: 'ADD-POST'}
    if (action.type === 'ADD-POST') {
      let newPost = {
        message: this._state.profilePage.newPostText,
        id: 5,
        likesCount: 6
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if(action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },

};
export default store;
window.store = store;
