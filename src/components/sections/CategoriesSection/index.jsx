import {CategoryCard} from "./CategoryCard";
import { categories } from "../../../data/category";
import styles from "./style.module.css";
export const CategoriesSection = () => {
    
    return (
        <section className={`container ${styles.categoriesSection}`}>
          <h2 className="title2">Categories</h2>
          <ul className={styles.categoriesList}>
          {
            categories.map((category) => {
            const { id, name, img } = category;
            return (
            <li key={id}>
              <CategoryCard title={name} image={img} />
           </li>
           )
            })
          }
          </ul>
        </section>
        );
}