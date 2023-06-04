import { useNavigate, useParams } from 'react-router-dom';

import { ScreenHeading } from '../../components/ScreenHeading';
import { ProductForm } from '../../components/ProductForm';
import { useGetProductQuery } from '../../services/productService';
import { Loader } from '../../components/Loader';
import { Subheading } from '../../components/Subheading';
import { useToast } from '../../hooks/useToast';

export const ProductEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const { data: product, isLoading } = useGetProductQuery({ id: id || '' });

  const handleSuccess = () => {
    showToast('The product has been saved!', 'success');
    navigate('/');
  };

  return (
    <>
      <ScreenHeading backBtn>Edit Product</ScreenHeading>
      <Subheading>
        Complete the form below to edit product „{product?.name}”.
      </Subheading>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductForm editProduct={product} onSuccess={handleSuccess} />
      )}
    </>
  );
};
