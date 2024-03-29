import {usersAPI} from "../../api/api";
import {updateObjectInArray} from "../../helpers/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducers = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userid, 'id', {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userid, 'id', {followed: false})
            }
        case SET_USERS: {
            return {...state, users: [...action.users]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state, followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}
export const followSuccess = (userid) => (
    {
        type: FOLLOW,
        userid
    }
)
export const unFollowSuccess = (userid) => (
    {
        type: UNFOLLOW,
        userid
    }
)
export const setCurrentPage = (currentPage) => (
    {
        type: SET_CURRENT_PAGE,
        currentPage
    }
)
export const setUsers = (users) => ({type: SET_USERS, users})

export const toggleIsFetching = (isFetching) => (
    {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
)
export const toggleFollowingProgress = (followingInProgress, userId) => (
    {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        followingInProgress,
        userId
    }
)
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})

// THUNK
export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));
        let data = await usersAPI.getUsers(page, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId))

    let data = await apiMethod(userId);

    if (!data.resultCode) {
        dispatch(actionCreator(userId))
    }

    dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId) => {
    return (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.followUsers.bind(usersAPI), followSuccess);
    }
}
export const unFollow = (userId) => {
    return (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unFollowUsers.bind(usersAPI), unFollowSuccess);
    }
}
export default usersReducers;
