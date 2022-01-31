import express from 'express';
import 'express-async-errors';
import * as scheduleController from '../controller/schedule.js';

const router = express.Router();



router.get('/' , scheduleController.getSchedule);

router.post('/', scheduleController.addSchedule);

router.put('/:id', scheduleController.updateSchedule);

router.delete('/:id', scheduleController.delSchedule);

export default router;