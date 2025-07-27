import "../App.css";
import ProductRow from "./ProductRow";

function ProductTable({products, searchValue}) {
  
  return <div className="ProductTable">
    <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>

      {/* // Filter products for the searchValue and then map them them and ensure they are shown in the ProductRow */}
        {products
          .filter((product)=> product.name.toLowerCase().includes(searchValue.toLowerCase()))
          .map((product)=><ProductRow product={product}/>)

        }

    </table>
  </div>;
}
export default ProductTable;