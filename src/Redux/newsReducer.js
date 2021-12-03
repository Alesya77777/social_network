const ADD_NEWS = "ADD-NEWS"
const UPDATE_NEW_NEWS_TEXT = "UPDATE-NEW-NEWS-TEXT";

const newsReducer = (state, action) => {
  switch (action.type) {
    case ADD_NEWS:
      const newNews = {
        id: 5,
        photo: "https://www.rsl.ru/photo/dataphotos/2/2e/2e171790b8017d32658ddfa8fc2ba353.jpg",
        message: state.newNewsText,
      };

      state.news.push(newNews);
      state.newNewsText = '';
      return state;
    case UPDATE_NEW_NEWS_TEXT:
      state.newNewsText = action.newText;
      return state;
    default:
      return state;
  };
};




export const addNewsActionCreator = () => {
  return { type: ADD_NEWS }
};
export const updateNewNewsTextActionCreator = (text) => {
  return { type: UPDATE_NEW_NEWS_TEXT, newText: text }
};


export default newsReducer;