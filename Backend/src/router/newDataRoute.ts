import express from "express";
import { part1, part2, part3, part4, part5 } from "../controller/newDataController";

const router = express.Router();


router.post("/part1", part1);
  
  router.post("/part2", part2);
  
  router.post("/part3", part3);
  
  router.post("/part4", part4);
  
  router.post("/part5", part5);
  

export default router;