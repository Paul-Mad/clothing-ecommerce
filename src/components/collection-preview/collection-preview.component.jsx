import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

import { withRouter } from "react-router-dom";

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items, match, history }) => (
  <CollectionPreviewContainer className="collection-preview">
    <TitleContainer
      className="tittle"
      onClick={() => history.push(`${match.url}/${title.toLowerCase()}`)}
    >
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer className="preview">
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
