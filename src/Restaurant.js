import React, { useState } from 'react'

const UploadAndDisplayImage = () => {
   const [selectedImage, setSelectedImage] = useState(null);
 

   const [allValues, setAllValues] = React.useState({
      type: '',
      price: ''
       })
  
  const handleChange = e => {
    setAllValues({...allValues, [e.target.name]: e.target.value});
    }

 
     
      return (
      
        <div className='resta'>

         <label>Name: <br/>
            <input type='text'/>
         </label>

         <label>Adress: <br/>
            <input type='text'/>
         </label>

         <label>Opening hours: <br/>
            <input type='text'/>
         </label>

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
      <form>
       <label>
           Restaurant type: <br/>
        <div>
      <select value={allValues.type} name="type" onChange={handleChange} >
        <option value="Buffet">Buffet</option>
        <option value="Fastfood">Fast Food</option>
        <option value="Fastcasual">Fast Casual</option>
        <option value="Casualdining">Casual Dining</option>
        <option value="Finedining">Fine Dining</option>
         </select>
        </div>
     </label>
    </form>

    <form>
         <label>
        Price level: <br/>
       <div>
       <select value={allValues.price} name="price" onChange={handleChange} >
        <option value="€">€</option>
        <option value="€€">€€</option>
        <option value="€€€">€€€</option>
        <option value="€€€€">€€€€</option>
      </select>
     </div> 
  </label>
 </form>


     <div>
       <button type="submit">Finish</button>
      </div>
     </div>
   )
}

export default UploadAndDisplayImage;
