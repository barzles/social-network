const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


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

  dispatch(action) { // {type: ADD_POST}
    if (action.type === ADD_POST) {
      let newPost = {
        message: this._state.profilePage.newPostText,
        id: 5,
        likesCount: 6
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const addUpdateNewPostTextActionCreator = (e) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: e.target.value
  }
};

export default store;
window.store = store;
