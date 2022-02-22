import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";
import { PhotosType, PostType, ProfileType } from "../types/types";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "samurai-network/profileReducer/SAVE_PHOTO_SUCCESS";

const initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 25 },
    { id: 2, message: "It's my first post", likesCount: 30 },
    { id: 3, message: "It's my second post", likesCount: 35 },
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: "",
};

export type initialStateType = typeof initialState; 

const profileReducer = (state = initialState, action: any): initialStateType => {
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
    case SAVE_PHOTO_SUCCESS:
      return { ...state, profile: { ...state.profile, photos: action.photos } as ProfileType };
    default:
      return state;
  };
};

type AddPostActionCreatorType = {
  type: typeof ADD_POST,
  newPostText: string,
};

export const addPostActionCreator = (newPostText: string): AddPostActionCreatorType => {
  return { type: ADD_POST, newPostText }
};

type DeletePost = {
  type: typeof DELETE_POST,
  postId: number,
};

export const deletePost = (postId: number): DeletePost => {
  return { type: DELETE_POST, postId: postId }
};

type SetUserProfileType = {
  type: typeof SET_USER_PROFILE,
  profile: ProfileType
};

export const setUserProfile = (userProfile: ProfileType): SetUserProfileType => {
  return { type: SET_USER_PROFILE, profile: userProfile }
};

type SetUserStatusType = {
  type: typeof SET_USER_STATUS,
  status: string
};

export const setUserStatus = (status: string): SetUserStatusType => {
  return { type: SET_USER_STATUS, status: status }
};

type SavePhotoSuccessType = {
  type: typeof SAVE_PHOTO_SUCCESS,
  photos: PhotosType
};

export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => {
  debugger;
  return { type: SAVE_PHOTO_SUCCESS, photos: photos }
};





export const getUserProfile = (userId: number) => async (dispatch: any) => {
  const data = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(data));
};

export const requestUserstatus = (userId: number) => async (dispatch: any) => {
  const data = await profileAPI.getStatus(userId);
  dispatch(setUserStatus(data));
};

export const updateUserStatus = (status: string) => async (dispatch: any) => {
  const data = await profileAPI.updateStatus(status);
  if (data.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
};

export const savePhoto = (photo: object) => async (dispatch: any) => {
  const data = await profileAPI.savePhoto(photo);
  if (data.resultCode === 0) {
    dispatch(savePhotoSuccess(data.data.photos));
  }
};

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
  const userId = getState().auth.userId;
  const data = await profileAPI.saveProfile(profile);
  if (data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    let message = data.messages.length > 0 ? data.messages[0] : "Some error";
    dispatch(stopSubmit("editProfile", { _error: message }));
    return Promise.reject(message);
  }
};



export default profileReducer;