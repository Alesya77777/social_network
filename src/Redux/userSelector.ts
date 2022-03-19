import { createSelector } from "reselect";
import { AppStateType } from "./reduxStore";

const getUsersSelector = (state: AppStateType) => {
  return state.usersPage.users
};

export const getUsers = createSelector(getUsersSelector,
  (users) => {
    return users.filter((u: any) => true);
  });



export const getTotalUsersCount = (state: AppStateType) => {
  return state.usersPage.totalUsersCount
};

export const getSizePage = (state: AppStateType) => {
  return state.usersPage.sizePage
};

export const getCurrentPage = (state: AppStateType) => {
  return state.usersPage.currentPage
};

export const getIsFetching = (state: AppStateType) => {
  return state.usersPage.isFetching
};

export const getIsFollowingProgress = (state: AppStateType) => {
  return state.usersPage.isFollowingProgress
};
