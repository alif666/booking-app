"use client";
import { useEffect, useState } from "react";
import { fetchProducts } from "../api";
import ProductCard from "./ProductCard";
import styles from "../styles/ProductCard.module.css";
import { getAllCabins } from "../utils/supabase/apiCabins";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllCabins().then(setProducts);
    
  }, []);

  return (
    <section className={styles["product-list"]}>
      <h2 className={styles["product-list__heading"]}>Featured Products</h2>
      <div className={styles["product-list__grid"]}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
