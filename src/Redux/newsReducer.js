const ADD_NEWS = "ADD-NEWS"
const UPDATE_NEW_NEWS_TEXT = "UPDATE-NEW-NEWS-TEXT";

const initialState = {
  news: [
    { id: 1, photo: "https://www.rsl.ru/photo/dataphotos/2/2e/2e171790b8017d32658ddfa8fc2ba353.jpg", message: "Правильно написать новость – настоящее искусство. Но научиться этому не сложно.      Прежде чем начнём раскрывать алгоритм написания, вспомним, что такое новость." },
    { id: 2, photo: "https://www.rsl.ru/photo/dataphotos/2/2e/2e171790b8017d32658ddfa8fc2ba353.jpg", message: "Правильно написать новость – настоящее искусство. Но научиться этому не сложно.      Прежде чем начнём раскрывать алгоритм написания, вспомним, что такое новость." },
    { id: 3, photo: "https://www.rsl.ru/photo/dataphotos/2/2e/2e171790b8017d32658ddfa8fc2ba353.jpg", message: "Правильно написать новость – настоящее искусство. Но научиться этому не сложно.      Прежде чем начнём раскрывать алгоритм написания, вспомним, что такое новость." },
    { id: 4, photo: "https://www.rsl.ru/photo/dataphotos/2/2e/2e171790b8017d32658ddfa8fc2ba353.jpg", message: "Правильно написать новость – настоящее искусство. Но научиться этому не сложно.      Прежде чем начнём раскрывать алгоритм написания, вспомним, что такое новость." },
  ],
  newNewsText: "Новость",
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWS:
      return ({
        ...state,
        news: [...state.news, {
          id: 5,
          photo: "https://www.rsl.ru/photo/dataphotos/2/2e/2e171790b8017d32658ddfa8fc2ba353.jpg",
          message: state.newNewsText,
        }],
        newNewsText: '',
      });
    case UPDATE_NEW_NEWS_TEXT:
      return ({
        ...state,
        newNewsText: action.newText
      });
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