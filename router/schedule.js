import express from 'express';
import 'express-async-errors';

const router = express.Router();

let data = [
    {
        "id": 1,
        "date": "2022,01,17",
        "title": "운동",
        "text": "6시 운동",
      },
      {
        "id": 2,
        "date": "2022,01,17",
        "title": "술약속",
        "text": "8시 약속",
      },
      {
        "id": 3,
        "date": "2022,01,18",
        "title": "운동",
        "text": "오전 10시 운동",
      },
      {
        "id": 4,
        "date": "2022,01,19",
        "title": "도수치료",
        "text": "오후 4시",
      },
]

router.get('/' , (req, res, next) => {
  res.status(200).json(data);
});

router.post('/', (req, res, next) => {
  const newSchedule = req.body;
  data.push(newSchedule);
  console.log(data);
  res.sendStatus(201);
});

export default router;