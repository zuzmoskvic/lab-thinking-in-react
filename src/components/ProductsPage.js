import "../App.css";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import { useState } from "react";
import jsonData from "../data.json";

function ProductsPage() {
  const [products, setProducts]= useState(jsonData);

  return <div className="ProductsPage">
    {/* <SearchBar/> */}
    <ProductTable />
  </div>
}
export default ProductsPage;


