import express from 'express'; 
import { getAllExporters } from '../controller/getDataForUserController';

const router = express.Router(); 
router.get('/allexpoters', getAllExporters); 
export default router;