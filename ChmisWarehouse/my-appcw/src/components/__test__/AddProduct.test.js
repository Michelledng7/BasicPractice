import { render, screen, fireEvent } from '@testing-library/react';
import AddProduct from '../AddProduct'
import {BrowserRouter as Router} from 'react-router-dom'

describe("Unit Test - Add new product", ()=> {
it('renders Add Product', () => {
    const MockAdd = () => {
        return(
            <Router>
            <AddProduct/>
            </Router>)
        }
  render(<MockAdd/>);
  const linkElement = screen.getByText(/New Product Name/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders Add Product', () => {
    const MockAdd = () => {
        return(
            <Router>
            <AddProduct/>
            </Router>)
        }
  render(<MockAdd/>);
  const linkElements = screen.getAllByRole("button")
  expect(linkElements).toBeEnabled;
});

it('renders Add Product', () => {
    const MockAdd = () => {
        return(
            <Router>
            <AddProduct/>
            </Router>)
        }
  render(<MockAdd/>);
  const linkElements = screen.getByText(/Price/i);
  expect(linkElements).toBeInTheDocument;
});

it('renders Add Product', () => {
    const MockAdd = () => {
        return(
            <Router>
            <AddProduct/>
            </Router>)
        }
  render(<MockAdd/>);
  const linkElements = screen.getByDisplayValue(/Save New Product/i);
  expect(linkElements).toBeEnabled;
});
})

describe("Integration Test", ()=>{
    it('input box and ', () => {
        const MockAdd = () => {
            return(
                <Router>
                <AddProduct/>
                </Router>)
            }
      render(<MockAdd/>);
      const linkElements = screen.getByDisplayValue(/Save New Product/i);
      expect(linkElements).toBeEnabled;
    });

})