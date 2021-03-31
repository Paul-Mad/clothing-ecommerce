import { createSelector } from "reselect";

//normal selector
const selectUser = (state) => state.user;

//return the memoized value from the selector
export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
