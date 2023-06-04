import { MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPen, FaPlus, FaTrash } from 'react-icons/fa';

import { Product } from '../../../../shared/models';
import { ScreenHeading } from '../../components/ScreenHeading';
import { Loader } from '../../components/Loader';
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from '../../services/productService';
import {
  DeleteConfirmationButton,
  EditButton,
  ItemContainer,
  ItemName,
} from './ProductList.style';
import { ProductDetailsDrawer } from '../../components/ProductDetailsDrawer';
import { ActionButton } from '../../components/ActionButton';
import { useToast } from '../../hooks/useToast';
import { Subheading } from '../../components/Subheading';

export const ProductList = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [activeProduct, setActiveProduct] = useState<Product>();

  const { data: products, isLoading } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();

  const handleProductDetails = (
    e: MouseEvent<HTMLDivElement>,
    product: Product,
  ) => {
    e.preventDefault();
    if (
      e.target === e.currentTarget ||
      (e.target as HTMLElement).tagName === 'P'
    ) {
      setActiveProduct(product);
    }
  };

  const handleProductDelete = async (
    product: Product,
    closeModal: () => void,
  ) => {
    try {
      await deleteProduct({ id: product._id });
      showToast('The product has been deleted.', 'success');
      closeModal();
    } catch {
      showToast('There was a problem removing the product.', 'error');
    }
  };

  return (
    <>
      <ProductDetailsDrawer
        activeProduct={activeProduct}
        onClose={() => setActiveProduct(undefined)}
      />
      <ScreenHeading>
        Product List
        <ActionButton onClick={() => navigate('/products/add')}>
          <FaPlus />
        </ActionButton>
      </ScreenHeading>
      {isLoading ? (
        <Loader />
      ) : !products?.length ? (
        <Subheading>There are no products at the moment.</Subheading>
      ) : (
        products?.map((product) => (
          <ItemContainer
            key={product._id}
            onClick={(e) => handleProductDetails(e, product)}
            role="button"
          >
            <ItemName>{product.name}</ItemName>
            <EditButton
              onClick={() => navigate(`/products/${product._id}/edit`)}
            >
              <FaPen /> Edit
            </EditButton>
            <DeleteConfirmationButton
              title="Are you sure you want to delete this product?"
              message="The product cannot be restored."
              btnVariant="danger"
              onConfirm={(closeModal) =>
                handleProductDelete(product, closeModal)
              }
            >
              <FaTrash /> Delete
            </DeleteConfirmationButton>
          </ItemContainer>
        ))
      )}
    </>
  );
};
