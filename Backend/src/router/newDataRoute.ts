import express from "express";
import {
  part1section1,
  part1section2,
  part1section3,
  part2section1,
  part2section2,
  part2section3,
  part3section1,
  part3section2,
  part3section3,
  part4section1,
  part4section2,
  part4section3,
  part4section4,
  part4section5,
  part4section6,
  part5,
} from "../controller/newDataController";

const router = express.Router();

router.post("/part1section1", part1section1);
router.post("/part1section2", part1section2);
router.post("/part1section3", part1section3);
router.post("/part2section1", part2section1);
router.post("/part2section2", part2section2);
router.post("/part2section3", part2section3);
router.post("/part3section1", part3section1);
router.post("/part3section2", part3section2);
router.post("/part3section3", part3section3);
router.post("/part4section1", part4section1);
router.post("/part4section2", part4section2);
router.post("/part4section3", part4section3);
router.post("/part4section4", part4section4);
router.post("/part4section5", part4section5);
router.post("/part4section6", part4section6);
router.post("/part5", part5);

export default router;
