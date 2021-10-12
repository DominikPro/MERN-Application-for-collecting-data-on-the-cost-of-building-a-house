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
import { Container, Button, Box, Typography, } from '@material-ui/core/'


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
        <Container maxWidth="md">
          <Box >
            <Typography variant="h5">Rok rozpoczecia budowy {formData.year}</Typography>
            <YearInput setStateInParentComponent={setFormData} />
          </Box>

          <div>
            <Typography variant="h5">
              Województwo gdzie prowadzona jest inwestycja {formData.voivodeship}
            </Typography>
            <VoivodeshipInput setStateInParentComponent={setFormData} />
          </div>

          <div>
            <Typography variant="h5">Stan robót</Typography>

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
            <Typography variant="h5">Poziom zlecanych prac</Typography>
            {workOrderLevel.map((item) => {
              return (
                <div key={item} >
                  <label key={item} for="workLevel">
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
            <Typography>Całkowita powierzchnia domu - wraz z garażem i piwnicą</Typography>
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
            <Typography>Całkowity koszt budowy brutto</Typography>
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
        </Container>
      </>
    );
  } else {
    return <GoToStats />;
  }
};

export default CostForm;
