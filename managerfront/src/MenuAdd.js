import React, { useState } from 'react'

const Menu = () => {
    const [selectedImage, setSelectedImage] = useState(null);




  return(
    <>
   <div>
      Name <br/>
      <input type='text' name='prodname' />
   </div>

   <div>
    Description <br/>
     <input type='text' name='descripton' />
   </div>

   <div>
     Price <br/>
     <input type='text' name='price' />
   </div>

   <div>
     
      {selectedImage && (
        <div>
        <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button onClick={()=>setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>


</>

  )
}

export default Menu;