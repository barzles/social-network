import profileReducer from "./reducer/profile";
import dialogsReducer from "./reducer/dialogs";
import sidebarReducer from "./reducer/sidebar";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


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
      ],
      newMessageBody: ''
    },
    sidebar: {}
  },
  _callSubscriber(state) {
    console.log('State changed', state)
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state)
  },
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
};

export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    messageBody: body
  }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export default store;
window.store = store;
