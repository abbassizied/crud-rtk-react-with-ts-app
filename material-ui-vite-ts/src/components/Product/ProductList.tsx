import ProductCard from "./ProductCard";
import { useGetAllProductsQuery } from "../../services/products.service";
import { IProduct } from "../../services/type";

export default function ProductList() {
  const {
    data = [],
    isLoading,
    isFetching,
    isError,
  } = useGetAllProductsQuery();

  if (isError) return <div>An error has occurred!</div>;
  if (isLoading) return <div>... Loading</div>;

  return (
    <>

    
      {data.map((product: IProduct) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </>
  );
}
