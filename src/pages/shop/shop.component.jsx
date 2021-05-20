import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import CollectionPage from "../collection/collection.component";
import CollectionsOverview from "../../components/collection-overview/collection-overview.component";

import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.util";

import { updateCollections } from "../../redux/shopData/shopData.actions";

// import the "LOADING COMPONENT"
import WithSpinner from "../../components/with-spinner/with-spinner.component";

//get the CollectionsOverview and CollectionPage component wrapped with the spinner
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;

    // Get the collection reference from the database
    const collectionRef = firestore.collection("collections");

    //When the snapshot runs for the first time or is updated, it sends the collection data to the app
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }
  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionsPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
