import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

const initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 25 },
    { id: 2, message: "It's my first post", likesCount: 30 },
    { id: 3, message: "It's my second post", likesCount: 35 },
  ],
  newPostText: "it",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return ({
        ...state,
        posts: [...state.posts, {
          id: 4,
          message: state.newPostText,
          likesCount: 0,
        }],
        newPostText: '',
      });
    case UPDATE_NEW_POST_TEXT:
      return ({
        ...state,
        newPostText: action.newText
      });
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    default:
      return state;
  };
};

export const addPostActionCreator = () => {
  return { type: ADD_POST }
};
export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text }
};

export const setUserProfile = (userProfile) => {
  return { type: SET_USER_PROFILE, profile: userProfile }
};


  export const getUserProfile = (userId) =>  (dispatch) => {
      profileAPI.getProfile(userId)
      .then(data => {
        dispatch(setUserProfile(data));
      })
    
  };

export default profileReducer;