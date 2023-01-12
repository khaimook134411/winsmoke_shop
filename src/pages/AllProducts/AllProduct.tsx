import { useEffect, useState } from "react";
import CardProduct from "../../components/CardProduct";
import style from "./AllProduct.module.css";
import axios from "axios";

export type Products = {
  id: number;
  name: string;
  description: string;
  image: string;
};

function AllProduct() {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    axios
      .get("https://winsmoke-backend.vercel.app/api/product_type")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>AllProduct</h1>
      <div className={style.cardContainer}>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <CardProduct
                id={product.id}
                imgUrl={product.image}
                name={product.name}
                desc={product.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllProduct;
