import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

/** Form to add a new box
 * 
 * Props:
 * - createNewBox (function)
 * 
 * State: 
 * - formData: {height, width, backgroundColor}
 * 
 * BoxList -> NewBoxForm
 */
function NewBoxForm({createNewBox}) {
  const [formData, setFormData] = useState({
    height: "", 
    width: "", 
    backgroundColor: ""
  });

  /** Function to update info in form input */
  function handleChange(evt) {
    const {name, value} = evt.target;
    setFormData(formData => ({
      ...formData, 
      [name]: value,
    }));
  }

  /** Function to submit the form
   *  Calls createNewBox() passed down from parent w/ formData and generated id
   *  Should clear input fields after submission
   */
  function handleSubmit(evt) {
    evt.preventDefault();
    createNewBox({...formData, id: uuid()});
    setFormData({height: "", width: "", backgroundColor: ""});
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="newBoxHeight">Height</label>
          <input
            id="newBoxHeight" 
            name="height" 
            value={formData.height} 
            onChange={handleChange}
            required/>
        </div>
        <div>
          <label htmlFor="newBoxWidth">Width</label>
          <input 
            id="newBoxWidth"
            name="width" 
            value={formData.width} 
            onChange={handleChange}
            required/>
        </div>
        <div>
          <label htmlFor="newBoxBackgroundColor">Background Color</label>
          <input 
            id="newBoxBackgroundColor"
            name="backgroundColor" 
            value={formData.backgroundColor} 
            onChange={handleChange}
            required/>
        </div>
        <button>Add box!</button>
      </form>
    </div>
  )
}

export default NewBoxForm;
