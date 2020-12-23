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
      state.newMessageBody = action.messageBody;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.messagesData.push({message: body});
      return state;
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