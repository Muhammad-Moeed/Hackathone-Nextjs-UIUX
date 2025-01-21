import ProductDetails from '../../../components/productDetail';

interface IParams {
  id: string;
}

export default function ProductDetailsPage({ params }: { params: IParams }) {
  const { id } = params;

  return <ProductDetails productId={id} />;
}
