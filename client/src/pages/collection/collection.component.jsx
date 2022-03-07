import {
  CollectionItemsContainer,
  CollectionPageContainer,
  CollectionTitle,
} from './collection.styles';

import CollectionItem from '../../components/collection-item/collection-item.component';
import React from 'react';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CollectionPage = ({ collection }) => {
  const { collectionId } = useParams();
  const { title, items } = useSelector(selectCollection(collectionId));
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

export default CollectionPage;
