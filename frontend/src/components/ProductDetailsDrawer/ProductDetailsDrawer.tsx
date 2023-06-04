import { FC } from 'react';
import Drawer from 'rsuite/Drawer';

import {
  Header,
  RowName,
  RowValue,
  StyledDrawer,
  Title,
} from './ProductDetailsDrawer.style';
import { Product } from '../../../../shared/models';
import { PRODUCT_CATEGORY_NAME_STRATEGY } from '../../utils/strategies';

interface ProductDetailsDrawerProps {
  activeProduct?: Product;
  onClose?: () => void;
}

export const ProductDetailsDrawer: FC<ProductDetailsDrawerProps> = ({
  activeProduct,
  onClose,
}) => (
  <StyledDrawer open={Boolean(activeProduct)} onClose={onClose}>
    <Header>
      <Title>Details of {activeProduct?.name}</Title>
    </Header>
    <Drawer.Body>
      <RowName>Name</RowName>
      <RowValue>{activeProduct?.name}</RowValue>

      <RowName>Price</RowName>
      <RowValue>{activeProduct?.price}</RowValue>

      <RowName>Quantity</RowName>
      <RowValue>{activeProduct?.quantity}</RowValue>

      <RowName>Production Date</RowName>
      <RowValue>{activeProduct?.productionDate}</RowValue>

      <RowName>Category</RowName>
      <RowValue>
        {activeProduct?.category &&
          PRODUCT_CATEGORY_NAME_STRATEGY[activeProduct.category]}
      </RowValue>

      {activeProduct?.description && (
        <>
          <RowName>Description</RowName>
          <RowValue>{activeProduct.description}</RowValue>
        </>
      )}
    </Drawer.Body>
  </StyledDrawer>
);
