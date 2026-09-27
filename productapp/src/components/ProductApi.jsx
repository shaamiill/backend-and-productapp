import axios from 'axios'
import React, { useState } from 'react'

const ProductApi = () => {

    var[product,setproduct]=useState([])

    axios.get("https://fakestoreapi.com/products")
    .then((res)=>{
        console.log(res.data)
        setproduct(res.data)
    })

  return (
    <div>
        <h1 class="bg-red-50">product page</h1>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

    {product.map((val)=>{
        return(
        <div class="bg-white rounded-lg shadow-md overflow-hidden"> 
             <img
            src={val.image}
            alt=""
            class="w-full h-48 object-cover"
          />
          <div>
            <h2 class="text-xl font-bold text-gray-800">
             {val.title}
            </h2>

          
            <p class="text-green-600 font-bold text-lg mt-3">
             RS: {val.price}
            </p>

            <p class="text-gray-500 mt-2">
              {val.description}
            </p>


            
            <button class="bg-blue-600 text-white py-2 mt-3 p-3 rounded hover:bg-green-700">
            buyNow
            </button>
          </div>
          {/* card closing */}
          </div> 
    )

    })}

       {/* grid closing    */}
        </div>

        
    </div>
  )
}

export default ProductApi