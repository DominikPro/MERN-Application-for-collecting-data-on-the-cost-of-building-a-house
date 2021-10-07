
  const checkRadio = (e, ref, setFormData) => {
    setFormData((prevState) => ({
      ...prevState,
        [e.target.name]: e.target.value,
    }));
  
  };

  export default checkRadio;