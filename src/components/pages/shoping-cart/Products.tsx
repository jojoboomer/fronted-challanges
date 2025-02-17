import Card from "@components/pages/shoping-cart/Card";
import { css } from "@styled-system/css";
import useCartStore from "src/store/cartStore";

function Products() {
  const { products } = useCartStore();
  
  return (
    <div className="product-list">
      <h2 className={css({ fontSize: "2.5rem", fontWeight: "extrabold" })}>
        Desserts
      </h2>
      <div className="product-list-container">
        {products.map((e, i) => (
          <Card key={i} item={e} />
        ))}
      </div>
    </div>
  );
}

export default Products;
