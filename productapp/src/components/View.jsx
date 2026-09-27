import axios from 'axios'
import React, { useState } from 'react'


const View = () => {


    var[product,setproduct]=useState([])


    axios.get("http://localhost:3000/view")
    .then((res)=>{
        setproduct(res.data)
        console.log(product)
    })


    //delete function
    const HandleDelete=(id)=>{
      console.log(id)
       axios.delete("http://localhost:3000/remove/"+id)
      .then((res)=>{
        alert(res.data)
    })
    }




  return (
    <div class="p-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
               
         {product.map((val)=>{
        return(  
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={val.Image}
            alt=""
            class="w-full h-48 object-cover"
          />


          <div class="p-4">
            <h2 class="text-xl font-bold text-grey-800">
              {val.Name}
            </h2>



            <p class="text-green-600 font-bold text-lg mt-3">
              {val.price}
            </p>


            <p class="text-gray-500 mt-2">
              {val.Disc}
            </p>


            <button class="w-full bg-red-600 text-white py-2 mt-3 rounded hover:bg-red-700"
            onClick={()=>{HandleDelete(val._id)}}>
              delete
            </button>


            <button class="w-full bg-green-600 text-white py-2 mt-3 rounded hover:bg-red-700">
              update
            </button>


          </div>
        </div>
        )})}
      </div>
    </div>
  )
}


export default View
