import { useNavigate } from 'react-router-dom';

import { ProductForm } from '../../components/ProductForm';
import { ScreenHeading } from '../../components/ScreenHeading';
import { Subheading } from '../../components/Subheading';
import { useToast } from '../../hooks/useToast';

export const ProductAdd = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const handleSuccess = () => {
    showToast('The product has been added!', 'success');
    navigate('/');
  };

  return (
    <>
      <ScreenHeading backBtn>Add Product</ScreenHeading>
      <Subheading>Complete the form below to add a new product.</Subheading>
      <ProductForm onSuccess={handleSuccess} />
    </>
  );
};
