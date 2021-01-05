const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
  newPostText: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        message: state.newPostText,
        id: 5,
        likesCount: 6
      };
      let stateCopy = {...state};
      stateCopy.postsData = [...state.postsData]
      stateCopy.postsData.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy;

    case UPDATE_NEW_POST_TEXT:
      let newState = {...state}
      newState.newPostText = action.newText;
      return newState;
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
};

export default profileReducer;
