import {authAPI} from "../../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});
// THUNK
export const getAuthUserData = () => {
    return async (dispatch) => {
        let data = await authAPI.getMe();

        if (!data.resultCode) {
            let {id, email, login} = data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    }
};
export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        let data = await authAPI.login(email, password, rememberMe);

        if (!data.resultCode) {
            dispatch(getAuthUserData())
        }
    }
};

export const logout = () => {
    return async (dispatch) => {
        let data = await authAPI.logout();

        if (!data.resultCode) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }
};
export default authReducer;
