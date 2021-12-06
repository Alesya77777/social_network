
const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const initialState = {
  dialogs: [
    { id: 1, name: "Andrew", photo: "https://teleprogramma.pro/wp-content/uploads/2016/03/596a3d04481816330f07e4f97510c28f-1-1024x754.jpg" },
    { id: 2, name: "Dmitry", photo: "https://avochka.ru/img/kartinka/1/lis_zveropolice.jpg" },
    { id: 3, name: "Sasha", photo: "https://cdnimg.rg.ru/i/gallery/93a5d2d1/10_86ad2d85.jpg" },
    { id: 4, name: "Sveta", photo: "https://www.afisha.uz/ui/materials/2016/03/0881639_b.jpg" },
    { id: 5, name: "Valera", photo: "https://sites.google.com/site/zveropolis896/_/rsrc/1459922444261/vse-geroi-multfilma/%D0%BE%D0%BD3.jpg" },
    { id: 6, name: "Viktor", photo: "https://img.gazeta.ru/files3/217/10588217/Zootopia-pic905-895x505-73183.jpg" },
  ],
  messages: [
    { id: 1, message: "Hello" },
    { id: 2, message: "Hi!" },
    { id: 3, message: "How are you?" },
    { id: 4, message: "I'm fine, thanks. And you?" },
  ],
  newMessageText: "Новое сообщение",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage = {
        id: 5,
        message: state.newMessageText,
      };
      state.messages.push(newMessage);
      state.newMessageText = '';
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state
    default:
      return state;
  };
};



export const addMessageActionCreator = () => {
  return { type: ADD_MESSAGE }
};
export const updateNewMessageTextActionCreator = (text) => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, newText: text }
};

export default dialogsReducer;