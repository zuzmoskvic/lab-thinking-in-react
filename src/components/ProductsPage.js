import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import products from "../data.json"
import { useState } from "react";

function ProductsPage() {
    const [searchValue, setSearchValue] = useState("");
    return <div>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
        <ProductTable products={products} searchValue={searchValue}/>
    </div>
}

export default ProductsPage;