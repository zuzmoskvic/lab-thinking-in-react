import "../App.css";
import ProductRow from "./ProductRow";
import jsonData from "./../data.json"

function ProductTable() {
  const products = jsonData;
  return <div className="ProductTable">
    <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>

        <ProductRow products={products}/>

    </table>
  </div>;
}
export default ProductTable;