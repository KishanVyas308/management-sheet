import express from 'express';
import {addNewExpoter, addNewUser } from '../controller/manageAddByAdminController';

const router = express.Router();

router.post('/user', addNewUser);
router.post('/exporter', addNewExpoter);


export default router;