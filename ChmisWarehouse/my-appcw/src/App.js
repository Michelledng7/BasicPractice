
import Header from "./components/Header";
import Products from "./components/Products";
import { useEffect, useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import EditProduct from "./components/EditProduct"
import About from "./components/About"
import AddProduct from "./components/AddProduct"
//import Button from "./components/Button"
import Pagination from "./components/Pagination"

const App = () => {

  // const {id} = useParams()
  // console.log({id});
 // const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])
  //const [showAddBut, setShowAddBut] = useState(true)
  //pagination
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(5)
  //get current products
  const indexOfLastProducts = currentPage * productsPerPage
  const indexOfFirstProducts = indexOfLastProducts - productsPerPage
  const currentProducts = products.slice(indexOfFirstProducts, indexOfLastProducts)

    useEffect(()=> {
  const getProducts = async () => {
    const productsFromServer = await fetchProducts()
    
    console.log(productsFromServer)
    setProducts(productsFromServer)
      }
      getProducts()
        },[])

    // const sortProducts = () =>{
    //   products.sort((a,b)=> {
    //       if (a.name.toString().toLowerCase() < b.name.toString().toLowerCase()) return -1;
    //       if (a.name.toString().toLowerCase() > b.name.toString().toLowerCase()) return 1;
    //       return 0;
    //   })
    //   console.log(products)
    //   return products
    // }

      // const sortArray =[]
      // products.map((product) => sortArray.push(product.name))
      // for (var i=0; i<sortArray.length; i++)
      // console.log(sortArray.length)
      // sortArray.sort()
      // console.log(sortArray)
      

  //fetch products from server
  const fetchProducts = async () => {
  const resp = await fetch('http://localhost:5500/products')
   console.log (resp)
  const data = await resp.json()
  console.log (data)
  return data
}  

  //Add new product object to array
  const addProduct = async (product) =>{
    const res = await fetch('http://localhost:5500/products', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(product),
    })
   const newProduct = await res.json()
   setProducts([...products, newProduct])
    // console.log(product)
    // const id = Math.floor(Math.random()*10000) + 1
    // console.log(id)
    // const newProduct = {id, ...product}
    // setProducts([...products, newProduct])
    // console.log(products)  //gave the original product array, not including new as it should be a callback
  }

  //Edit product

  
   //Delete product
   const deleteProduct = async (id) => {
     if (products.length>0)
     alert('Please confirm this product is to be deleted')
     await fetch(`http://localhost:5500/products/${id}`, {
       method: 'DELETE',
     })
     setProducts(products.filter((product)=> product.id !== id))  //show those not id
     console.log(products, id)
    }


    const onPaginate = pageNumbers=> setCurrentPage(pageNumbers);
    //  console.log(pageNumbers)
      

  return (
    <Router>
    <div className="container mt-5">
      <h1 className="text-primary mb-3">Chemist Warehouse We beat</h1>
      <Header />
      <Routes>
      <Route path = '/Add' element = {<AddProduct toAdd={addProduct}/>}/>
      <Route path = '/' element = {<Products products={currentProducts} onDelete ={deleteProduct}/>}/>
      <Route path='/about' element = {<About />} />
      <Route path='/products/:id' element = {<EditProduct/>} />
      </Routes>  
      <Pagination className='footer' productsPerPage = {productsPerPage} totalProducts = {products.length} 
      paginate={onPaginate}/>
      </div>
    </Router>    
  )
}

export default App
