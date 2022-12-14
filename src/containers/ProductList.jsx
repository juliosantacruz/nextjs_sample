import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
import styles from '@styles/ProductList.module.scss';

 

const ProductList = () => {
  const products = useGetProducts();
  // console.log(products)
  return (
    <section className={styles['main-container']}>
      <div className={styles['ProductList']}>
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
