const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      let stateCopy = {...state};
      stateCopy.newMessageBody = action.messageBody;
      return stateCopy;
    case SEND_MESSAGE:
      let newState = {...state}
      newState.newMessageBody = '';
      newState.messagesData.push({message: newState.newMessageBody});
      return newState;
    default:
      return state;
  }
}

export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    messageBody: body
  }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export default dialogsReducer;
