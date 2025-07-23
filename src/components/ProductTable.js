import "../App.css";
import ProductRow from "./ProductRow";
import jsonData from "./../data.json"

function ProductTable(products) {
  return <div className="ProductTable">
  <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
    { jsonData.map((product) =>{
      return <ProductRow oneProduct={product}/>
    }
    )}
    </table>
  </div>;
}
export default ProductTable;