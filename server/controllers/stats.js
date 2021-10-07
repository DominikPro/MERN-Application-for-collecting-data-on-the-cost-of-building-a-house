import CostForm from "../models/costsForm.js"

export const getCosts = async (req, res)=>{
    try{
        const costData = await CostForm.find();
        res.status(200).json(costData)
    }catch(error){
        res.status(404).json({message: error})
    }
}

export const getCostsForVoivodeshipAndYear =(req, res)=>{
    res.send(req.params)
}
 
export const addNewCost = async (req, res)=>{

    const cost  = req.body; 
    const newCost = new CostForm(cost)
    try{
      await newCost.save();
      res.status(201).json(newCost)
    }catch(error){
        res.status(409).json({error:error})
    }
}
