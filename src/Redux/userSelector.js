export const getUsers = (state) => {
 return state.usersPage.users
};

export const getTotalUsersCount = (state) => {
 return state.usersPage.totalUsersCount
};

export const getSizePage = (state) => {
 return state.usersPage.sizePage
};

export const getCurrentPage = (state) => {
 return state.usersPage.currentPage
};

export const getIsFetching = (state) => {
 return state.usersPage.isFetching
};

export const getIsFollowingProgress = (state) => {
 return state.usersPage.isFollowingProgress
};
