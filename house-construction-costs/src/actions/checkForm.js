const checkForm = (formData) => {
    if (formData.year === "" || formData.year <= 0) {
      return alert("Sprawdź czy poprawnie uzupełniłeś pole -  Rok rozpoczecia budowy")
    }
    else if (formData.voivodeship === "") {
      return alert("Sprawdź czy poprawnie uzupełniłeś pole -  Województwo gdzie prowadzona jest inwestycja")
    }
    else if (formData.workStage === "" || formData.workStage <= 0) {
      return alert("Sprawdź czy poprawnie uzupełniłeś pole -  Stan robót")
    }
    else if (formData.workOrderLevel === "" || formData.workStage <= 0) {
      return alert("Sprawdź czy poprawnie uzupełniłeś pole -  Poziom zlecanych prac")
    }
    else if (formData.houseArea <= 0 || formData.houseArea>400 ) {
      return alert("Sprawdź czy poprawnie uzupełniłeś pole - Całkowita powierzchnia domu - wraz z garażem i piwnicą")
    }
    else if (formData.constructionCost <= 0 || formData.constructionCost<10000 ) {
      return alert("Sprawdź czy poprawnie uzupełniłeś pole - Całkowity koszt budowy brutto")
    }
    else {
        return true;
    }

  }
  export default checkForm