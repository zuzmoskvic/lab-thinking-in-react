import "../App.css";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

function ProductsPage() {
  return <div className="ProductsPage">
    <SearchBar/>
    <ProductTable/>
  </div>;
}
export default ProductsPage;