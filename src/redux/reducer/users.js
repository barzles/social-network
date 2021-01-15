const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
  users: [
    {
      id: 1,
      avatar: '',
      followed: false,
      fullName: 'Dmitry',
      status: 'I\'m a boss 1',
      location: {city: 'Minsk', country: 'Belarus'}
    },
    {
      id: 2,
      avatar: '',
      followed: false,
      fullName: 'Sasha',
      status: 'I\'m a boss 2',
      location: {city: 'Moscow', country: 'Russia'}
    },
    {
      id: 3,
      avatar: '',
      followed: true,
      fullName: 'Petya',
      status: 'I\'m a boss 3',
      location: {city: 'Minsk', country: 'Belarus'}
    },
    {
      id: 4,
      avatar: '',
      followed: false,
      fullName: 'Vladimir',
      status: 'I\'m a boss 4',
      location: {city: 'Krakow', country: 'Poland'}
    },
  ]
}

const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userid) {
            return {...user, followed: true}
          }
          return user
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userid) {
            return {...user, followed: false}
          }
          return user
        })
      }
    default:
      return state
  }
}
export const followAC = (userid) => (
  {
    type: FOLLOW,
    userid
  }
)
export const unFollowAC = (userid) => (
  {
    type: UNFOLLOW,
    userid
  }
)
export default usersReducers;
