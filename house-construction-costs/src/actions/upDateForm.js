const upDateForm = (e, ref, setFormData) => {
    setFormData((prevState) => ({
      ...prevState,
        ...prevState.info,
        [e.target.name]: ref.current.value,
    
    }));
  };

  export default upDateForm