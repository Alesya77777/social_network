import profileReducer, { addPostActionCreator, deletePost } from "./profileReducer";

let state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 25 },
    { id: 2, message: "It's my first post", likesCount: 30 },
    { id: 3, message: "It's my second post", likesCount: 35 },
  ]
};


test('length of post should be incremented', () => {
  let action = addPostActionCreator("Kyzya");
 
  let newState = profileReducer(state,action);

  expect(newState.posts.length).toBe(4);
});

test('message of posts should be corret', () => {
  let action = addPostActionCreator("Kyzya");
 
  let newState = profileReducer(state,action);

  expect(newState.posts[3].message).toBe("Kyzya");
});

test('after deleding length message should be decrement', () => {
  let action = deletePost(1);
 
  let newState = profileReducer(state,action);

  expect(newState.posts.length).toBe(2);
});

test('after deleding length message shouldn"t  be decrement, if id is incorrect', () => {
  let action = deletePost(1000);
 
  let newState = profileReducer(state,action);

  expect(newState.posts.length).toBe(3);
});