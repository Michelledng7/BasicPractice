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


    const Dropdown = ({
        options
      }) => {
        const [selectedOption, setSelectedOption] = useState(options[0].value);
        return (
            <select
              value={selectedOption}
              onChange={e => setSelectedOption(e.target.value)}>
              {options.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
        );
      };

      products.length>0 && alert('Are you sure to delete the product?') deleteProduct

      [
        {
          "id": 2,
          "name": "Perfume1",
          "price": "7.99",
          "type": "Cosmetics",
          "active": true
        },
        {
          "id": 3,
          "name": "Body Mist",
          "price": "7.99",
          "type": "Cosmetics",
          "active": true
        },
        {
          "id": 4,
          "name": "Vitamin E",
          "price": "7.99",
          "type": "Health",
          "active": true
        },
        {
          "id": 5,
          "name": "Vitamin C",
          "price": "7.99",
          "type": "Health",
          "active": false
        }
      ]

     

      menuSort = () => {
        const newMenuItems = { ...this.props.menuItems };
        newMenuItems.sort((a, b) => a.name.localeCompare(b.name));
        this.setState({MenuItems: newMenuItems });
        };  



    {{pathname} === "/Add" ? <Button onclick={() => {navigate('/')}}  text = 'Go back products'/> :
    <Link to={`/Add`} className='btn'>Add a new product</Link>}

    <ul>{[pageNumbers]}</ul>

      //  const [SortedProducts,setSortedProducts] = useState()
  //const [sortProducts, setSortedState] = useState()

  // const onSort = (sortType) => sortProducts.
    // const sortProducts = () => {products.sort((a,b)=> {
    //       // if (a.name.toString().toLowerCase() < b.name.toString().toLowerCase()) return -1;
    //       // if (a.name.toString().toLowerCase() > b.name.toString().toLowerCase()) return 1;
    //       // return 0;
    //       return a.name.localeCompare(b.name)
    // })}

//const onSort = () => {setSortedProducts(...products, sortProducts)}

    // const sortProducts = () => {products.sort((a,b)=> {
    //   return a.name.localeCompare(b.name)}).map((item)=>
    //   (<Product key = {item.id} product = {item} onDelete={onDelete}/>))} 
    // console.log(sortProducts) 

    onChange = {(e)=> setPrice(e.target.value)

     // handleEditChange
      const handleEditFormChange = (event) => {
        event.preventDefault();
    
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;
    
        setEditFormData(newFormData);
      };


      <!*<input name ='name' type='text' value = {name} onChange = {(e)=>setName(e.target.name)}></input>-->
      <button onClick={()=>{setValue("name", "bill")}}>Edit</button>
      <input {...register("name")} onChange = {(e)=> setName(e.target.getAttribute(name))} 
      <input name = 'name' type ='text' value ={name} onChange = {(e)=> setName(e.target.getAttribute(name))} 
      placeholder="Name">

    

      <Button color='green' text='Sort' onclick ={products.sort((a,b)=> {
        return a.name.localeCompare(b.name)}).map((item)=>
        (<Product key = {item.id} product = {item} onDelete={onDelete}/>))}/>



        // <Button color='green' text='Sort' onclick ={products.sort((a,b)=> {
          //   return a.name.localeCompare(b.name)}).map((item)=>
          //   (<Product key = {item.id} product = {item} onDelete={onDelete}/>))}/>
        
  
          //   <Button color='green' text='Sort' onclick ={products.sort((a,b)=> {
          //     return a.name.localeCompare(b.name)}).map((item)=>
          //     (<Product key = {item.id} product = {item} onDelete={onDelete}/>))}/>




          import { useEffect, useState } from 'react'
import {useParams, Navigate, useNavigate, useLocation} from 'react-router-dom'
import Button from './Button'

function TaskDetails () {
const [loading, setLoading] = useState(true)
const [task, setTask] = useState({})
const [error, setError] = useState(null)
const params = useParams()
const navigate = useNavigate()
const {pathname} = useLocation()

useEffect(()=> {
const fetchTask = async () => {
const res = await fetch (`http://localhost:5500/tasks/${params.id}`)
console.log(params)
const data = await res.json()
console.log(data)
if (res.status === 404) {
setError('Task not Found')
}

setTask(data)
setLoading(false)
}
fetchTask()},[]
)

return loading? 
(<h3> Loading </h3>) :
    (<div>{pathname}
      <p> {task.text}</p>
    <p>{task.day}</p>
    <p><Button text ='Go Back' onClick={() =>{
      navigate('/')
    }}/></p>
    </div>)
  
if (error){
   return <Navigate to ='/' />
    }
  }
export default TaskDetails



REACT validation


class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {},
    };
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["name"] = "Only letters";
      }
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  contactSubmit(e) {
    e.preventDefault();

    if (this.handleValidation()) {
      alert("Form submitted");
    } else {
      alert("Form has errors.");
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render() {
    return (
      <div>
        <form
          name="contactform"
          className="contactform"
          onSubmit={this.contactSubmit.bind(this)}
        >
          <div className="col-md-6">
            <fieldset>
              <input
                ref="name"
                type="text"
                size="30"
                placeholder="Name"
                onChange={this.handleChange.bind(this, "name")}
                value={this.state.fields["name"]}
              />
              <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
              <br />
              <input
                refs="email"
                type="text"
                size="30"
                placeholder="Email"
                onChange={this.handleChange.bind(this, "email")}
                value={this.state.fields["email"]}
              />
              <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
              <br />
              <input
                refs="phone"
                type="text"
                size="30"
                placeholder="Phone"
                onChange={this.handleChange.bind(this, "phone")}
                value={this.state.fields["phone"]}
              />
              <br />
              <input
                refs="address"
                type="text"
                size="30"
                placeholder="Address"
                onChange={this.handleChange.bind(this, "address")}
                value={this.state.fields["address"]}
              />
              <br />
            </fieldset>
          </div>
        </form>
      </div>
    );
  }
}

React.render(<Test />, document.getElementById("container"));
    



REACT HOOKS for validation

import React from "react";
import useForm from 'react-hook-form';

function Test() {
  const { useForm, register } = useForm();
  const contactSubmit = data => {
    console.log(data);
  };

  return (
    <form name="contactform" onSubmit={contactSubmit}>
      <div className="col-md-6">
        <fieldset>
          <input name="name" type="text" size="30" placeholder="Name" ref={register} />
          <br />
          <input name="email" type="text" size="30" placeholder="Email" ref={register} />
          <br />
          <input name="phone" type="text" size="30" placeholder="Phone" ref={register} />
          <br />
          <input name="address" type="text" size="30" placeholder="Address" ref={register} />
          <br />
        </fieldset>
      </div>
      <div className="col-md-6">
        <fieldset>
          <textarea name="message" cols="40" rows="20" className="comments" placeholder="Message" ref={register} />
        </fieldset>
      </div>
      <div className="col-md-12">
        <fieldset>
          <button className="btn btn-lg pro" id="submit" value="Submit">
            Send Message
          </button>
        </fieldset>
      </div>
    </form>
  );
}