import express from "express";

import {getCosts, addNewCost, getCostsForVoivodeshipAndYear} from "../controllers/stats.js"

const router = express.Router(); 

router.get('/costData', getCosts) 

router.get('/voivodeshipYear/:year/:voivodeship', getCostsForVoivodeshipAndYear) // Wysyła obiekt zawierający pasujące elemnty do tych przekazanych w params

router.post('/costData', addNewCost) 
export default router  