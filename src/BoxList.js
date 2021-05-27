import React, { useState } from "react";
import Box from "./Box"
import NewBoxForm from "./NewBoxForm"

/** Handles state of list of boxes
 * 
 * State:
 * boxes = [
 *          {boxId, height, width, backgroundColor}, 
 *          {boxId, height, width, backgroundColor},
 *          ...
 *         ]
 * App -> BoxList -> Box
 */
function BoxList() {
  const [boxes, setBoxes] = useState([]);
}

export default BoxList;