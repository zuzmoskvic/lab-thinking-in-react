import "../App.css";

function ProductRow({oneProduct}) {
  return <div className="ProductRow">
    <p>ProductRow</p>
    <p>{oneProduct.name}</p>
  </div>;
}
export default ProductRow;