import Product from "./Product"
import Button from "./Button"
import { useEffect } from "react"
import { useState } from "react"

  const Products = ({products, onDelete}) => {

  // const [productsFromServer, setProducts] = useState() 

  //   useEffect(() => {
  //     const getProducts = async () =>{
  //     const res = await fetch('http://localhost:5500/products')
  //     const data = await res.json()
  //     console.log(data)
  //     setProducts(data)
  //   }
  //   getProducts()
    
  // },[])
    
    const sorted =  products.sort((a,b) => {
      console.log(a.name)
      console.log(b.name)
     // console.log(a.name - b.name)       
     return a.name.localeCompare(b.name)
    })
    const onSort = () => {
      return sorted
      }
      
      // {sorted.map((product)=> (
      //   <Product key = {product.id} product = {product} onDelete={onDelete}/>))}

        //return a.name.localeCompare(b.name)})
        //.map((item)=>
      //   (<Product key = {item.id} product = {item} onDelete={onDelete}/>))
      console.log(sorted)
      

    return (
        <>
          <Button color='green' text='Sort' onclick = {onSort} />
          <article className='products'>  
          {sorted.map((product)=> (
            <Product key = {product.id} product = {product} onDelete={onDelete}/>))}
          </article>
        </>
        )
  }

  export default Products