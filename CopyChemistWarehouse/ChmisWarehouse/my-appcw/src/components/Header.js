import { Link } from 'react-router-dom'
//import Button from './Button'
//import { useState} from 'react'
import { useLocation } from 'react-router-dom'


//import AddNew  from './AddProduct'


const Header = ({title}) => {
 // const [showAdd, setShowAdd] = useState('')
 //const navigate = useNavigate()
 //const [showAddBut, setShowAddBut] = useState(true)
 const {pathname} = useLocation()



  return (
    <header className='header'>{title} <h6>{pathname}</h6>
    <Link to={`/Add`} className='btn'>Add a new product</Link>
    </header>
  )
}

Header.defaultProps = {
    title: 'Products Solution',
}

export default Header