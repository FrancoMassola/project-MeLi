import React, {useState} from 'react';
import { SearchBar } from '../shared/SearchBar';

export const ProductDetails = () => {

      //state for handle the product to search
  const [, setproductToSearch] = useState("");
  return (
    <>
    <SearchBar setproductToSearch={setproductToSearch}/>
    <h3>Categories</h3>
    <div className='product-details-container'>

    </div>
    </>
  )
}
