import { React, useState, createRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCost, getCosts } from "../../redux/actions/costs";

import GoToStats from "../GoToStats/GoToStats";
import checkForm from "../../actions/checkForm";
import upDateForm from "../../actions/upDateForm.js";
import checkRadio from "../../actions/checkRadio";
import VoivodeshipInput from "../Shared/VoivodeshipInput";
import YearInput from "../Shared/YearInput";
import { stateOfConstructionOptions, workOrderLevel } from "./dataForm";
//----------------------------------------------------------------------
import {Button} from '@material-ui/core/'

const CostForm = () => {
  const dispatch = useDispatch();

  const [sendedToDB, setSendedToDB] = useState(false);
  const workStageInpiut = createRef();
  const workLevelInput = createRef();
  const houseAreaInput = createRef();
  const constructionCostInput = createRef();

  const [formData, setFormData] = useState({
    id: "",
    year: "",
    voivodeship: "",
    workStage: "",
    workOrderLevel: "",
    houseArea: 0,
    constructionCost: 0,
  });



  if (!sendedToDB) {
    return (
      <>
        <div>
          <h3>Rok rozpoczecia budowy {formData.year}</h3>
          <YearInput setStateInParentComponent={setFormData} />
        </div>

        <div>
          <h3>
            Województwo gdzie prowadzona jest inwestycja {formData.voivodeship}
          </h3>
          <VoivodeshipInput setStateInParentComponent={setFormData} />
        </div>

        <div>
          <h3>Stan robót</h3>

          {stateOfConstructionOptions.map((item) => {
            return (
              <div key={item}>
                <label
                  onClick={(e) => checkRadio(e, workStageInpiut, setFormData)}
                  for="workStage"
                >
                  {item}
                  <input
                    key={item.workStage}
                    name={"workStage"}
                    type="radio"
                    value={item}
                    ref={workStageInpiut}
                  ></input>
                </label>
              </div>
            );
          })}
        </div>
        <div>
          <h3>Poziom zlecanych prac</h3>
          {workOrderLevel.map((item) => {
            return (
              <div key={item} >
                <label  key={item} for="workLevel">
                  {item}
                  <input
                    onClick={(e) => checkRadio(e, workLevelInput, setFormData)}
                    name={"workOrderLevel"}
                    type="radio"
                    value={item}
                    ref={workLevelInput}
                    key={item.workOrderLevel}
                  />
                </label>
              </div>
            );
          })}
        </div>
        <div>
          <h3>Całkowita powierzchnia domu - wraz z garażem i piwnicą</h3>
          <input
            onChange={(e) => upDateForm(e, houseAreaInput, setFormData)}
            type="number"
            step="1"
            placeholder="powierzchnia budynku"
            name={"houseArea"}
            ref={houseAreaInput}
          />
        </div>

        <div>
          <h3>Całkowity koszt budowy brutto</h3>
          <input
            onChange={(e) => upDateForm(e, constructionCostInput, setFormData)}
            type="number"
            step="1000"
            placeholder="kwota brutto"
            name={"constructionCost"}
            ref={constructionCostInput}
          />
        </div>
        <Button variant="contained"
          onClick={() => {
            if (checkForm(formData)) {
              dispatch(addCost(formData));
              setSendedToDB(true);
            }
            console.log(formData);
          }}
        >
          Wyślij
        </Button>
      </>
    );
  } else {
    return <GoToStats />;
  }
};

export default CostForm;
