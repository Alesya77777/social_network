import { followAPI, usersAPI } from "../api/api";
import { updateObjectInArray } from "../units/objectsHelpers";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLLOWING_PROGRESS = "TOGGLE_IS_FOLLLOWING_PROGRESS";


const initialState = {
  users: [],
  currentPage: 1,
  totalUsersCount: 0,
  sizePage: 10,
  isFetching: true,
  isFollowingProgress: [],


  // users: [
  //   { id: 1, fullname: "Andrew", location: { country: "Russia", city: "Moscov" }, followed: false, status: "I like football", photo: "https://teleprogramma.pro/wp-content/uploads/2016/03/596a3d04481816330f07e4f97510c28f-1-1024x754.jpg" },
  //   { id: 2, fullname: "Dmitry", location: { country: "Russia", city: "Rostov-on-Don" }, followed: true, status: "I like jumping", photo: "https://avochka.ru/img/kartinka/1/lis_zveropolice.jpg" },
  //   { id: 3, fullname: "Sasha", location: { country: "United States", city: "Texas" }, followed: false, status: "I like tennis", photo: "https://cdnimg.rg.ru/i/gallery/93a5d2d1/10_86ad2d85.jpg" },
  //   { id: 4, fullname: "Sveta", location: { country: "Canada", city: "Vancouver" }, followed: true, status: "I like tennis", photo: "https://www.afisha.uz/ui/materials/2016/03/0881639_b.jpg" },
  //   { id: 5, fullname: "Valera", location: { country: "Italy", city: "Rome" }, followed: true, status: "I like swimming", photo: "https://sites.google.com/site/zveropolis896/_/rsrc/1459922444261/vse-geroi-multfilma/%D0%BE%D0%BD3.jpg" },
  //   { id: 6, fullname: "Viktor", location: { country: "China", city: "Beijing" }, followed: false, status: "I like hockey", photo: "https://img.gazeta.ru/files3/217/10588217/Zootopia-pic905-895x505-73183.jpg" },
  // ],
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return ({
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
      });
    case UNFOLLOW:
      return ({
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
      });
    case SET_USERS:
      return { ...state, users: [...action.users] };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.count };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_IS_FOLLLOWING_PROGRESS:
      return {
        ...state,
        isFollowingProgress: action.isFetching
          ? [...state.isFollowingProgress, action.userId]
          : [state.isFollowingProgress.filter(id => id !== action.userId)]
      };

    default:
      return state;
  };
};



export const followSuccess = (userId) => {
  return { type: FOLLOW, userId }
};
export const unfollowSuccess = (userId) => {
  return { type: UNFOLLOW, userId }
};

export const setUsers = (users) => {
  return { type: SET_USERS, users }
};

export const setCurrentPage = (currentPage) => {
  return { type: SET_CURRENT_PAGE, currentPage }
};
export const setTotalUsersCount = (totalUsersCount) => {
  return { type: SET_TOTAL_USERS_COUNT, count: totalUsersCount }
};
export const toggleIsFetching = (flag) => {
  return { type: TOGGLE_IS_FETCHING, isFetching: flag }
};
export const toggleIsFollowingProgress = (flag, userId) => {
  return { type: TOGGLE_IS_FOLLLOWING_PROGRESS, isFetching: flag, userId }
};

export const requestUsers = (currentPage, sizePage) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    const data = await usersAPI.requestUsers(currentPage, sizePage)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));

  }
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {

  dispatch(toggleIsFollowingProgress(true, userId));
  const data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(toggleIsFollowingProgress(false, userId));
};


export const follow = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userId, followAPI.postUnfollow.bind(userId), followSuccess);


  }
};


export const unfollow = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userId, followAPI.deleteFollow.bind(userId), unfollowSuccess);
  }
};

export default usersReducer;