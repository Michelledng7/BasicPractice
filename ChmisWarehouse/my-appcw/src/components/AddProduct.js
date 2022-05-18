import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "./Button"

const AddProduct = ({toAdd}) => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [active, setActive] = useState(false)
  const navigate = useNavigate()
  //const [type, setType] = useState([])

  //Add Product
  // const onAdd = {
  //   setText(text)
  // }
  //validate the form
  const onsubmit = (e) =>{
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
    else{
    toAdd({name, price, active})
    setName('')
    setPrice('')
    setActive(false)}
  }


  return (
    <form className='add-form' onSubmit = {onsubmit}>
      <div className='form-control'>
      <label>New Product Name</label>
      <input type='text' placeholder='Add a new product name' value = {name} onChange ={(e) => 
        setName(e.target.value)}></input>
      </div>

      <div className='form-control'>
      <label>Price</label>
      <input type='text' placeholder='Add price' value={price} 
      onChange = {(e)=> setPrice(e.target.value)}></input>
      </div>

      <label>
      Pls Pick New Product Type:
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
      <input type='checkbox' value={active} checked={active}
      onChange = {(e) => setActive(e.currentTarget.checked)} />
      </div>

     <input type= 'submit' value = 'Save New Product' className='btn btn-block'/> 
     <Button text = 'Back' color = 'steelblue' onclick = {() => {navigate('/')}} />
    </form>
  )
}

export default AddProduct