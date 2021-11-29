import { rerenderEntireTree } from "../render";

const state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 25 },
      { id: 2, message: "It's my first post", likesCount: 30 },
      { id: 3, message: "It's my second post", likesCount: 35 },
    ],
  },
  dialogsPage: {
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
    ]
  },
  sitebar: {
    links: [
      { id: 1, name: "Profile", path: "/profile" },
      { id: 2, name: "Messages", path: "/dialogs" },
      { id: 3, name: "News", path: "/news" },
      { id: 4, name: "Music", path: "/music" },
      { id: 5, name: "Settings", path: "/settings" },
    ],
    friends: [
      {id: 1, name: "Andrew", photo: "https://teleprogramma.pro/wp-content/uploads/2016/03/596a3d04481816330f07e4f97510c28f-1-1024x754.jpg"},
      {id: 2, name: "Sasha", photo: "https://cdnimg.rg.ru/i/gallery/93a5d2d1/10_86ad2d85.jpg"},
      {id: 3, name: "Sveta", photo: "https://www.afisha.uz/ui/materials/2016/03/0881639_b.jpg"},
    ]
  }
};

export const addPost = (postMessage) => {
  const newPost = {
    id: 4,
    message: postMessage,
    likesCount: 0,

  }
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
}



export default state;