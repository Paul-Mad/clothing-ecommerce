import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShopData = (state) => state.shopData;

export const selectCollections = createSelector(
  [selectShopData],
  (shopData) => shopData.collections
);

//Convert the collections object into an array for preview
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  )
);
