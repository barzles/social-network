import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '7807dd96-1e96-43d7-b9a1-2b9a0199eabb'
  }
})
export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 1) {
    return instance.get('users?page=' + currentPage + '&count=' + pageSize).then(response => response.data)
  },
  followUsers(id) {
    return instance.post('follow/' + id).then(response => response.data)
  },
  unFollowUsers(id) {
    return instance.delete('follow/' + id).then(response => response.data)
  }
}
export const authAPI = {
  getMe() {
    return instance.get('auth/me').then(response => response.data)
  }
}
export const profileAPI = {
  getProfile(userId) {
    return instance.get('profile/' + userId).then(response => response.data)
  },
  getStatus(userId) {
    return instance.get('profile/status/' + userId)
  },
  updateStatus(status) {
    return instance.get('profile/status/', {status})
  }
}
