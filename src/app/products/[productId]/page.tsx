import getProductById from '@/app/actions/getProductById';
import getCurrentUser from '@/app/actions/getCurrentUser';
import EmptyState from '@/components/EmptyState';
import ProductClient from './ProductClient';

interface Params {
    productId?: string;
}

const ProductPage = async ({ params } : { params: Params }) => {

    const product = await getProductById(params);
    const currentUser = await getCurrentUser();

    if(!product) {
      return (
        <EmptyState />
      )
    }

    return (
      <div>
        <ProductClient 
          product={product}
          currentUser={currentUser}
        />
      </div>
    )
}

export default ProductPage
