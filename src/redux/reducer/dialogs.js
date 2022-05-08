import {profileAPI} from "../../api/api";

const SEND_MESSAGE = 'SEND-MESSAGE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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
    profile: {}
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;

            return {
                ...state,
                messagesData: [...state.messagesData, {id: 6, message: body}]
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})


// THUNK
export const getUserProfile = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.getProfile(userId);

        dispatch(setUserProfile(data))
    }
}
export default dialogsReducer;
