import {profileAPI as profileApi} from "../../api/api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
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
                likesCount: 0
            };

            return {
                ...state,
                postsData: [...state.postsData, newPost],
            };

        case DELETE_POST:
            let newPostData = [...state.postsData].filter(post => post.id !== action.id)

            return {
                ...state,
                postsData: newPostData
            }

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

export const deletePostActionCreator = (id) => ({type: DELETE_POST, id});

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileApi.getStatus(userId);

    dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileApi.updateStatus(status);

    if (!response.data.resultCode) {
        dispatch(setStatus(status))
    }
}

export default profileReducer;
