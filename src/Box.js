import React from "react";

/**  
 * Props:
 * - id
 * - width
 * - height
 * - backgroundColor
 * - removeBox (function)
 * 
 * BoxList -> Box
*/
function Box({id, width, height, backgroundColor, removeBox}) {
  
  function handleRemove() {
    removeBox(id);
  }

  return (
    <div className="Box">
      <div style={{
        height: `${height}em`,
        width: `${width}em`,
        backgroundColor: backgroundColor}}/>
      <button onClick={handleRemove}>X</button>
    </div>
  )
}

export default Box;