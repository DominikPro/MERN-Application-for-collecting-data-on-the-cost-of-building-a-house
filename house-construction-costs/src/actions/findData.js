const findData =(year, voivodeship, dataForStats)=>{
    let filtredDataForStatsGenerator = 0
if(year !== 0 && voivodeship !==""){
    filtredDataForStatsGenerator = dataForStats.filter((item)=>{
       return( 
       item.year === year &&
       item.voivodeship === voivodeship)    
   })
}else if(year!==0){
    filtredDataForStatsGenerator = dataForStats.filter((item)=>{
        return item.year===year
    })
}


return filtredDataForStatsGenerator;
}
export default findData;

