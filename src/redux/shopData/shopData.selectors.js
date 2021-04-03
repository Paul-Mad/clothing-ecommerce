import { createSelector } from "reselect";

const selectShopData = (state) => state.shopData;

export const selectCollections = createSelector(
  [selectShopData],
  (shopData) => shopData.collections
);
