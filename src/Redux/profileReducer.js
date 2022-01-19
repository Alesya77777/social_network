import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const DELETE_POST = "DELETE_POST";

const initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 25 },
    { id: 2, message: "It's my first post", likesCount: 30 },
    { id: 3, message: "It's my second post", likesCount: 35 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return ({
        ...state,
        posts: [...state.posts, {
          id: 4,
          message: action.newPostText,
          likesCount: 0,
        }],
      });
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_USER_STATUS:
      return { ...state, status: action.status };
    case DELETE_POST:
      return { ...state, posts: state.posts.filter(p => p.id !== action.postId) };
    default:
      return state;
  };
};

export const addPostActionCreator = (newPostText) => {
  return { type: ADD_POST, newPostText }
};
export const deletePost = (postId) => {
  return { type: DELETE_POST, postId: postId }
};

export const setUserProfile = (userProfile) => {
  return { type: SET_USER_PROFILE, profile: userProfile }
};
export const setUserStatus = (status) => {
  return { type: SET_USER_STATUS, status: status }
};


export const getUserProfile = (userId) => async (dispatch) => {
  const data = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(data));
};

export const requestUserstatus = (userId) => async (dispatch) => {
  const data = await profileAPI.getStatus(userId);
  dispatch(setUserStatus(data));
};
export const updateUserStatus = (status) => async (dispatch) => {
  const data = await profileAPI.updateStatus(status);
  if (data.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
};

export default profileReducer;