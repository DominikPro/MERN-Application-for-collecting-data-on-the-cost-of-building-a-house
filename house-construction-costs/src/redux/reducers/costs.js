
export default  (cost =[], action ) =>{
  switch(action.type){
      case "FETCH_ALL":
          return action.payload;

      case "ADD_COST":
          cost = action.payload
          console.log(action.payload)
      case "CREATE":
          return [...cost, action.payload];
      default:
        return cost;
  }
}