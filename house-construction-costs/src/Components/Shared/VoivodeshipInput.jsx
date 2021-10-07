import React, {createRef} from 'react'
import {voivodships} from "../CostForm/dataForm"
import upDateForm from "../../actions/upDateForm"

 const VoivodeshipInput=(props)=> {
 const voivodeshipInput = createRef();
    return (
        
         <select
          id="myList"
          name={"voivodeship"}
          ref={voivodeshipInput}
          onClick={(e) => upDateForm(e, voivodeshipInput, props.setStateInParentComponent)}
        >
          {voivodships.map((item) => {
              return (
              <option  key={item} name={"voivodeship"} value={item}>
                {item}
              </option>
            );
          })}
        </select> 
    )
}

export default VoivodeshipInput;