import { Card } from 'antd';
import Link from 'next/link';
import styles from './ProductItem.module.css';

const ProductItem = ({ data }) => (
  <Link href={`/products/${data.id}`}>
    <a>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={(
          <img
            alt={data.name}
            src={data.imageURL}
            height={280}
            className={styles.coverPhoto}
          />
        )}
        className={styles.productItem}
      >
        <Card.Meta title={`Rs. ${data.price}`} description={data.name} />
      </Card>
    </a>
  </Link>
);

export default ProductItem;
