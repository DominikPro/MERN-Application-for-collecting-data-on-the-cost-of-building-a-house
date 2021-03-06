import { React, useState, createRef } from "react";
import { useDispatch } from "react-redux";
import { addCost, getCosts } from "../../redux/actions/costs";
import { useSessionStorage } from "../../actions/useStorage";
import GoToStats from "../GoToStats/GoToStats";
import checkForm from "../../actions/checkForm";
import upDateForm from "../../actions/upDateForm.js";
import checkRadio from "../../actions/checkRadio";
import VoivodeshipInput from "../Shared/VoivodeshipInput";
import YearInput from "../Shared/YearInput";
import { stateOfConstructionOptions, workOrderLevel } from "./dataForm";
import { Container, Button, Box, Typography, Input } from "@material-ui/core/";

const CostForm = () => {
  const [voted, setVoted, removeVoted] = useSessionStorage("voted", false);


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

  if (!voted) {
    return (
      <>
        <Container maxWidth="md">
          <Box sx={{ m: 1 }}>
            <Box mt={2}>
              <Typography variant="h5">
                Rok rozpoczecia budowy {formData.year}
              </Typography>
            </Box>
            <YearInput setStateInParentComponent={setFormData} />

            <Box>
              <Box mt={2}>
                <Typography variant="h5">
                  Województwo gdzie prowadzona jest inwestycja
                  {formData.voivodeship}
                </Typography>
              </Box>
              <VoivodeshipInput setStateInParentComponent={setFormData} />
            </Box>

            <Box>
              <Box mt={2}>
                <Typography variant="h5">Stan robót</Typography>
              </Box>

              {stateOfConstructionOptions.map((item) => {
                return (
                  <div key={item}>
                    <label
                      onClick={(e) =>
                        checkRadio(e, workStageInpiut, setFormData)
                      }
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
            </Box>
            <Box>
              <Box mt={2}>
                <Typography variant="h5">Poziom zlecanych prac</Typography>
              </Box>
              {workOrderLevel.map((item) => {
                return (
                  <div key={item}>
                    <label key={item} for="workLevel">
                      {item}
                      <input
                        onClick={(e) =>
                          checkRadio(e, workLevelInput, setFormData)
                        }
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
            </Box>

            <Box>
              <Box mt={2}>
                <Typography>
                  Całkowita powierzchnia domu - wraz z garażem i piwnicą
                </Typography>
              </Box>
              <Input
                onChange={(e) => upDateForm(e, houseAreaInput, setFormData)}
                // label="Powierzchnia domu"
                type="number"
                step="1"
                // placeholder="powierzchnia budynku"
                name={"houseArea"}
                inputRef={houseAreaInput}
                varian="outlined"
              />
            </Box>

            <Box>
              <Box mt={2}>
                <Typography>Koszt budowy brutto</Typography>
              </Box>
              <Input
                onChange={(e) =>
                  upDateForm(e, constructionCostInput, setFormData)
                }
                label="Koszt budowy domu brutto"
                type="number"
                step="1000"
                name={"constructionCost"}
                inputRef={constructionCostInput}
                varian="outlined"
              />

            </Box>
            <Box mt={2}>
              <Button
                variant="contained"
                onClick={() => {
                  if (checkForm(formData)) {
                    dispatch(addCost(formData));
                    setSendedToDB(true);
                    setVoted(true);
                  }
                  console.log(formData);
                }}
              >
                Wyślij
              </Button>
            </Box>
          </Box>
        </Container>
      </>
    );
  } else {
    return <GoToStats />;
  }
};

export default CostForm;
