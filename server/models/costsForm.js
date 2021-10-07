import mongoose from "mongoose";

const costFormSchema = mongoose.Schema({
  year: Number,
  voivodeship: String,
  workStage: String,
  workOrderLevel: String,
  houseArea: Number,
  constructionCost: Number
});

const CostForm = mongoose.model('CostForme', costFormSchema);
export default CostForm;
