import { FC, useMemo } from 'react';
import { Field, Formik, FormikHelpers } from 'formik';

import {
  Container,
  FormColumn,
  FormRow,
  StyledForm,
  SubmitButton,
} from './ProductForm.style';
import { Product } from '../../../../shared/models';
import { getInitialProductFormValues } from '../../utils/product';
import { PRODUCT_CATEGORY_NAME_STRATEGY } from '../../utils/strategies';
import { Input, Select, Textarea } from '../FormElements';
import {
  useAddProductMutation,
  useUpdateProductMutation,
} from '../../services/productService';
import { useToast } from '../../hooks/useToast';

interface ProductFormProps {
  editProduct?: Product;
  onSuccess: () => void;
}

export const ProductForm: FC<ProductFormProps> = ({
  editProduct,
  onSuccess,
}) => {
  const [addProduct] = useAddProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const { showToast } = useToast();

  const isEdit = Boolean(editProduct);

  const initialValues = useMemo(
    () => getInitialProductFormValues(editProduct),
    [editProduct],
  );

  const handleSubmit = async (
    values: Omit<Partial<Product>, '_id'>,
    actions: FormikHelpers<Partial<Product>>,
  ) => {
    try {
      await (isEdit && editProduct
        ? updateProduct({ id: editProduct._id, data: values })
        : addProduct({ data: values })
      ).unwrap();

      onSuccess();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      if (err?.data?.validationErrors) {
        actions.setErrors(
          Object.keys(err.data.validationErrors).reduce(
            (acc, errorKey) => ({
              ...acc,
              [errorKey]: err.data.validationErrors[errorKey].message ?? '',
            }),
            {},
          ),
        );

        console.log(
          Object.keys(err.data.validationErrors).reduce(
            (acc, errorKey) => ({
              ...acc,
              [errorKey]: err.data.validationErrors[errorKey].message ?? '',
            }),
            {},
          ),
        );
      }

      showToast('There was a problem saving the product.', 'error');
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <Container>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting, values, errors }) => (
          <StyledForm>
            <FormRow>
              <FormColumn $width="50%">
                <label htmlFor="name">Name</label>
                <Field
                  as={Input}
                  type="name"
                  id="name"
                  name="name"
                  required
                  maxLength={100}
                  error={errors.name}
                />
              </FormColumn>
              <FormColumn $width="50%">
                <label htmlFor="price">Price</label>
                <Field
                  as={Input}
                  type="number"
                  step="any"
                  id="price"
                  name="price"
                  required
                  min={0}
                  error={errors.price}
                />
              </FormColumn>
            </FormRow>
            <FormRow>
              <FormColumn $width="33.3334%">
                <label htmlFor="quantity">Quantity</label>
                <Field
                  as={Input}
                  type="number"
                  id="quantity"
                  name="quantity"
                  required
                  min={0}
                  error={errors.quantity}
                />
              </FormColumn>
              <FormColumn $width="33.3334%">
                <label htmlFor="productionDate">Production Date</label>
                <Field
                  as={Input}
                  type="date"
                  id="productionDate"
                  name="productionDate"
                  required
                  error={errors.productionDate}
                />
              </FormColumn>
              <FormColumn $width="33.3334%">
                <label htmlFor="category">Category</label>
                <Field
                  as={Select}
                  id="category"
                  name="category"
                  required
                  error={errors.category}
                >
                  <option value="">Select</option>
                  {Object.keys(PRODUCT_CATEGORY_NAME_STRATEGY).map(
                    (categoryKey) => (
                      <option value={categoryKey}>
                        {
                          PRODUCT_CATEGORY_NAME_STRATEGY[
                            categoryKey as keyof typeof PRODUCT_CATEGORY_NAME_STRATEGY
                          ]
                        }
                      </option>
                    ),
                  )}
                </Field>
              </FormColumn>
            </FormRow>
            <FormRow>
              <FormColumn>
                <label htmlFor="description">Description</label>
                <Field
                  as={Textarea}
                  id="description"
                  name="description"
                  maxLength={2000}
                  error={errors.description}
                />
              </FormColumn>
            </FormRow>
            <SubmitButton
              disabled={isSubmitting || (isEdit && values === initialValues)}
            >
              {isEdit ? 'Save' : 'Add'}
            </SubmitButton>
          </StyledForm>
        )}
      </Formik>
    </Container>
  );
};
