import React from 'react'
import { Link} from 'react-router-dom'
import Button from './Button'
// import BodyMist from '../public/Images/BodyMist.jpeg'
// import Perfume from '../public/Images/Perfume.jpeg'


const Product = ({product,onDelete}) => {
  return (
    <div className ='product'>
    <h4>{product.name}</h4>
    <h4>${product.price}</h4>
    <img src= {product.image} alt= "img placeholder"/>
    <h5>{product.type}</h5>
   <h6>{product.id}</h6>
   <div><Link to={`/products/${product.id}`} className = 'btn' >Edit</Link></div> 
    
   <div><Button className ='btn.delete' color = 'green' text = 'Delete' 
   onclick= {() => onDelete(product.id)}></Button></div>
    </div>
  )
}

export default Product