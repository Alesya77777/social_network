type LinkType = {
  id: number,
  name: string,
path: string
};

type FriendType= {
  id: number,
  name: string,
  photo: string
};


type InitialStateType ={
  links: Array<LinkType>,
  friends: Array<FriendType>
};

const initialState: InitialStateType = {
  links: [
    { id: 1, name: "Profile", path: "/profile" },
    { id: 2, name: "Messages", path: "/dialogs" },
    { id: 3, name: "News", path: "/news" },
    { id: 4, name: "Music", path: "/music" },
    { id: 5, name: "Users", path: "/users" },
    { id: 6, name: "Settings", path: "/settings" },
  ],
  friends: [
    { id: 1, name: "Andrew", photo: "https://teleprogramma.pro/wp-content/uploads/2016/03/596a3d04481816330f07e4f97510c28f-1-1024x754.jpg" },
    { id: 2, name: "Sasha", photo: "https://cdnimg.rg.ru/i/gallery/93a5d2d1/10_86ad2d85.jpg" },
    { id: 3, name: "Sveta", photo: "https://www.afisha.uz/ui/materials/2016/03/0881639_b.jpg" },
  ]
};
const sitebarReducer = (state = initialState, action: any ) => {
  return state;
};

export default sitebarReducer;