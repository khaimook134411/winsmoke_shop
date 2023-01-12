import React from "react";
import CardProduct from "../../components/CardProduct";
import style from "./AllProduct.module.css";

const allProducts = [
  {
    id: 1,
    productName: "ks quik 2000 puff",
    productPicture:
      "https://f.btwcdn.com/store-27599/product-thumb/b97e385b-a88c-71f4-ee03-63a40c719c7e.jpg",
    productDescription: "พอตใช้แล้วทิ้ง",
  },
  {
    id: 2,
    productName: "salt nic",
    productPicture:
      "https://น้ํายาบุหรี่ไฟฟ้าลําปาง.com/wp-content/uploads/2022/06/Marboro-salt-hub-banner-e1601112452707.jpg",
    productDescription: "น้ำยาบุหรี่ไฟฟ้่า",
  },
];

function AllProduct() {
  return (
    <div>
      <h1>AllProduct</h1>
      <div className={style.cardContainer}>
        {allProducts.map((product) => {
          return (
            <div>
              <CardProduct
                key={product.id}
                id={product.id}
                imgUrl={product.productPicture}
                name={product.productName}
                desc={product.productDescription}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllProduct;
