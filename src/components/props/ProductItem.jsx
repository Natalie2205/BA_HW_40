const ProductItem = ({ title, price, isBought }) => {
  return (
    <div className="product-item">
      <h4>{title}</h4>
      <p>Ціна: {price} грн</p>
      <span>{isBought ? "Придбаний" : "Треба придбати"}</span>
    </div>
  );
}

export default ProductItem;
