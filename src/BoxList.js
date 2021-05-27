import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm"
import Box from "./Box"

/** Handles state of list of boxes
 * 
 * State:
 * boxes = [
 *          {boxId, height, width, backgroundColor}, 
 *          {boxId, height, width, backgroundColor},
 *          ...
 *         ]
 * App -> BoxList -> NewBoxForm
 *                -> Box
 */
function BoxList() {
  const [boxes, setBoxes] = useState([]);

  function addBox(newBox) {
    // TODO: add box to boxes with given info from form
    setBoxes(boxes => [...boxes, newBox]);
  }

  function removeBox(id) {
    // TODO: remove box from boxes with given id
    setBoxes(boxes => boxes.filter(b => b.id !== id));
  }

  return (
    <div>
      <NewBoxForm createNewBox={addBox}/>
      {boxes.map(({ id, height, width, backgroundColor}) => (
        <Box
          key={id}
          id={id}
          height={height}
          width={width}
          backgroundColor={backgroundColor}
          removeBox={removeBox}/>
      ))}
    </div>
  )
}

export default BoxList;