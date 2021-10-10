import React, {createRef, useState} from 'react'
import {year} from "../CostForm/dataForm"
import upDateForm from "../../actions/upDateForm"



const YearInput=(props)=> {
    const yearInput = createRef();
    return (
        <select
        id="myData"
        name={"year"}
        ref={yearInput}
        onClick={(e) => upDateForm(e, yearInput, props.setStateInParentComponent)}
      >
        {year.map((item) => {
          return (
            <option key={item} id={item.year} name={"year"} >
              {item}
            </option>
          );
        })}
      </select>
    )
}

export default  YearInput;