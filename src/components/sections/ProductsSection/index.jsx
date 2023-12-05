import {ProductCard} from "./ProductCard";
import { products } from "../../../data/product";
import styles from "./style.module.css";
export const ProductsSection = () => {
    
    return (
        <section className={`container ${styles.productsSection}`}>
          <h2 className="title2">beautiful clothes</h2>
          <ul className={styles.productList}>
          {
            products.map((product) => {
            const { id, name, price, img } = product;
            return (
            <li key={id}>
            <ProductCard title={name} price={price} image={img} />
            </li>
            );
            })
          }
          </ul>
        </section>
        );
}