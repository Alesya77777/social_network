import axios from "axios";


const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": "b6119ca0-63a3-4295-9bc1-e77b4ad61b01" }
});

export const usersAPI = {
  getUsers(currentPage = 1, sizePage = 15) {
    return (instance
      .get(`users?page=${currentPage}&count=${sizePage}`)
      .then(response => response.data)
    )
  }
};

export const followAPI = {
  deleteFollow(userId) {
    return (
      instance
        .delete(`follow/${userId}`)
        .then(response => response.data)
    )
  },

  postUnfollow(userId) {
    return (
      instance
        .post(`follow/${userId}`)
        .then(response => response.data)
    )
  }

};


export const authAPI = {
  getDataMe() {
    return (
      instance
        .get(`auth/me`)
        .then(response => response.data)
    )
  }
};

export const profileAPI = {
  getProfile(userId) {
    return (
      instance.get(`profile/` + userId)
        // .then(response => response.data)
    )
  }
};

