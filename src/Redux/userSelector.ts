import { createSelector } from "reselect";

const getUsersSelector = (state:any) => {
  return state.usersPage.users
};

export const getUsers = createSelector(getUsersSelector,
  (users) => {
    return users.filter(u => true);
  });



export const getTotalUsersCount = (state: any) => {
  return state.usersPage.totalUsersCount
};

export const getSizePage = (state: any) => {
  return state.usersPage.sizePage
};

export const getCurrentPage = (state: any) => {
  return state.usersPage.currentPage
};

export const getIsFetching = (state:any) => {
  return state.usersPage.isFetching
};

export const getIsFollowingProgress = (state: any) => {
  return state.usersPage.isFollowingProgress
};
