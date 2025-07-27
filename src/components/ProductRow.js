function ProductRow({product}) {
  return <>
    <tr>
        <td>{product.name}</td>
        <td style={ (product.inStock) ? {color: 'black'} : {color: 'red'}}>{product.name}</td>
        <td>{product.price}</td>
    </tr>
  </>
}
export default ProductRow;