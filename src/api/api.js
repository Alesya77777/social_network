import axios from "axios";


const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": "b6119ca0-63a3-4295-9bc1-e77b4ad61b01" }
});

export const usersAPI = {
  requestUsers(currentPage = 1, sizePage = 15) {
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
  },

  login(email, password, rememberMe = false) {
    return (
      instance
        .post(`auth/login`, { email, password, rememberMe })
        .then(response => response.data)
    )
  },

  logouts() {
    return (
      instance
        .delete(`auth/login`)
        .then(response => response.data)
    )
  }
};



export const profileAPI = {
  getProfile(userId) {
    return (
      instance.get(`profile/` + userId)
        .then(response => response.data)
    )
  },

  getStatus(userId) {
    return (
      instance
        .get(`profile/status/` + userId)
        .then(response => response.data)
    )
  },

  updateStatus(status) {
    return (
      instance
        .put(`profile/status`, { status: status })
        .then(response => response.data)
    )
  },

  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return (
      instance
        .put(`/profile/photo`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }

        })
        .then(response => response.data)
    )
  },

  saveProfile(profile) {
    return (
      instance
        .put(`profile`, profile)
        .then(response => response.data)
    )
  },



};

