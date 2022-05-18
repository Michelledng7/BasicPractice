import { useEffect, useState } from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import Button from './Button'
//import Products from './Products'
//import {useForm} from 'react-hook-form'

const EditProduct = () => {

  const [oldProduct, setOldProduct] = useState({})
 // const [products, setProducts] = useState()
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [active, setActive] = useState(false)
  const navigate = useNavigate()
  const {id} = useParams()
 // const [loading, setLoading] = useState()
 // const {pathname} = useLocation()
  const [ setError] = useState(null)
//  const {register, setValue, formState:{}} = useForm()

const showProduct = async () => {
  const res = await fetch(`http://localhost:5500/products/${id}`)
  console.log(res)
  const data = await res.json()
  setOldProduct(data)
  
  if (res.status === 404) {
        setError('Product not Found')
        navigate('/')
        }
  }

useEffect (() =>{
    showProduct()
},[])



// const fetchProduct = async () =>{
//   const res = await fetch (`http://localhost:5500/products/${id}`)
//   const data = await res.json()
//   console.log(data)
//   setOldProduct(data)
//   console.log(oldProduct)
//   if (res.status === 404) {
//     setError('Task not Found')
//     }
//   }
// fetchProduct()

  const onsubmit = (e) =>{
    console.log(oldProduct)
      e.preventDefault()
      if(!name)
      {
        alert('Please add a product name')
        return
      }
      if (!name.match(/^[a-zA-Z]+$/))
      {
        alert('Please input letters for product name')
      }
      if (!price.match(/^[0-9]*$/))
      {
        alert('Please input number for price')
      }
    else{editProduct({name,price})
     // EditProduct({name, price, active})
      setName('')
      setPrice('')
      setActive(false)}
    }

    //to save edited/updated product to server
    const editProduct = async (updatedProduct) =>{
      const res = await fetch(`http://localhost:5500/products/${id}`, {
        method: "PUT",
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
      }
     )
     const updatedP = await res.json()
     console.log(updatedP)
     return updatedP
     //setProducts([...products, updatedP])
    }
  // const [state, setState] =useState()
  // this.handleInputChange = this.handleInputChange.bind(this);
  //  const handleInputChange=(e) => {
  //   //this.handleInputChange = this.handleInputChange.bind(this);
  //       const target = e.target
  //       const value = target.value 
  //       const name = target.name
  //    this.setState({
  //         [name]: value
  //       });
  //   }

  return (
    <div><h5><p>Edit Product: {oldProduct.name}</p>
    <ul>Price: ${oldProduct.price}</ul></h5>
    <form className='add-form' onSubmit={onsubmit}>
      <div className='form-control'>    
      <label>Product Name</label>
      <input name = 'name' type ='text' value = {name} onChange = {(e)=> setName(e.target.value)} 
      placeholder="Name">
       </input>
      </div>

      <div className='form-control'>
      <label>Price</label>
      <input name ='price' type='text' value = {price} onChange = {(e)=>setPrice(e.target.value)}
      placeholder = "Price"></input>
      </div>

      <label>
      Pls Edit Product:
      <select>
        <option value="books">Books</option>
        <option value="electronics">Electronics</option>
        <option value="food">Food</option>
        <option value="furniture">Furniture</option>
        <option value="toys">Toys</option>
      </select>
    </label>

      <div className='form-control-check'>
      <label>Active</label>
      <input name='active' type='checkbox' value={active} checked={active}
      onChange = {(e)=>setActive(e.target.active)} />
      </div>

     <input type= 'submit' value = 'Save New Product' className='btn btn-block'/> 
     <Button text = 'Back' color = 'steelblue' onclick = {() => {navigate('/')}} />
    </form>
    </div>
  )
}

export default EditProduct