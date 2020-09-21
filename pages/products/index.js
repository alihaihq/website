import { NextSeo } from 'next-seo';
import ProductItem from '../../components/ProductItem';
import productItems from '../../data/products';
import styles from './Products.module.css';
import HeaderBanner from '../../components/HeaderBanner';

const Products = ({ data }) => (
  <div className={styles.products}>
    <NextSeo title="Alihai Store - Products" />
    <HeaderBanner buttonText="Contact us" buttonURL="/" />
    <main className={styles.productListContainer}>
      <ul className={styles.productList}>
        {data.map((item) => (
          <li className={styles.productItemContainer}>
            <ProductItem data={item} key={data.id} />
          </li>
        ))}
      </ul>
    </main>
  </div>
);

export const getStaticProps = async () => ({
  props: {
    data: productItems,
  },
});

export default Products;
