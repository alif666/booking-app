
import styles from "../styles/ProductCard.module.css";

function ProductCard({ product }) {
  return (
    <div className={styles["product-card"]}>
      <img
        className={styles["product-card__image"]}
        src={"https://iiimywcrhwybichlzcyh.supabase.co/storage/v1/object/public/cabin-images//"+product.image}
        alt={product.name}
        loading="lazy"
      />
      <div className={styles["product-card__info"]}>
        <h3 className={styles["product-card__name"]}>{product.name}</h3>
        <p className={styles["product-card__price"]}>{product.regularPrice}</p>
      </div>
    </div>
  );
}

export default ProductCard;
