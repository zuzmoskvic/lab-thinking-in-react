import "../App.css";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import { useState } from "react";
import jsonData from "../data.json";

function ProductsPage() {
  const [products, setProducts]= useState(jsonData);
  const [searchValue, setSearchValue] = useState("");

  return <div className="ProductsPage">
    <SearchBar products={products} setProducts={setProducts} searchValue={searchValue} setSearchValue={setSearchValue} />
    <ProductTable products={products} searchValue={searchValue}/>
  </div>
}
export default ProductsPage;


