import "../App.css";
import ProductRow from "./ProductRow";
import jsonData from "../data.json";

function ProductTable() {
  return <div className="ProductTable">
    <p>ProductTable:</p>
    {jsonData.map((product) => {
      return <ProductRow oneProduct={product}/>
    }

    )}
  </div>;
}
export default ProductTable;