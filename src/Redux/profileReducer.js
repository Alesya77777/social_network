const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 25 },
    { id: 2, message: "It's my first post", likesCount: 30 },
    { id: 3, message: "It's my second post", likesCount: 35 },
  ],
  newPostText: "it",
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 4,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
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

export default profileReducer;