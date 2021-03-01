import {profileAPI as profileApi} from "../../api/api";

const ADD_POST = 'ADD-POST';
const SET_STATUS = 'SET_STATUS';

let initialState = {
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
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        message: action.newPostText,
        id: 5,
        likesCount: 6
      };

      return {
        ...state,
        postsData: [...state.postsData, newPost],
      };

    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }

    default:
      return state;
  }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status
  }
}
export const getStatus = (userId) => (dispatch) => {
  profileApi.getStatus(userId).then(response => {
      dispatch(setStatus(response.data))
  })
}

export const updateStatus = (status) => (dispatch) => {
  profileApi.updateStatus(status).then(response => {
    if (!response.data.resultCode) {
      dispatch(setStatus(status))
    }
  })
}
export default profileReducer;
