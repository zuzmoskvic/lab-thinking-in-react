import "../App.css";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import { useState } from 'react';
import jsonData from '../data.json';


function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  return <div className="ProductsPage">
    <p>ProductsPage</p>
    <SearchBar/>
    <ProductTable products={products}/>
  </div>;
}
export default ProductsPage;