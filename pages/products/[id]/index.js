import { NextSeo } from 'next-seo';
import productItems from '../../../data/products';
import styles from './ProductItemViewer.module.css';
import HeaderBanner from '../../../components/HeaderBanner';

const ProductItemViewer = ({ data }) => (
  <div className={styles.productItemViewer}>
    <NextSeo title={`Alihai Store - ${data.name}`} />
    <HeaderBanner buttonText="Contact us" buttonURL="/" />
    <main className={styles.main}>
      <div className={styles.productViewContainer}>
        <div className={styles.productPicContainer}>
          <img
            alt={data.name}
            src={data.imageURL}
            height={300}
            className={styles.coverPhoto}
          />
        </div>
        <div className={styles.metaContainer}>
          <div className={styles.price}>
            {`Rs. ${data.price}`}
          </div>
          <div className={styles.name}>{data.name}</div>
          <div style={{ fontSize: 20 }}>Coming soon</div>
        </div>
      </div>
    </main>
  </div>
);

export const getStaticProps = async ({ params }) => {
  const foundProduct = productItems.find((p) => p.id === +params.id);

  return {
    props: {
      data: foundProduct,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = productItems.map((product) => `/products/${product.id}`);

  return { paths, fallback: false };
};

export default ProductItemViewer;
