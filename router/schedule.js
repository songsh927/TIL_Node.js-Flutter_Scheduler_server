import express from 'express';
import 'express-async-errors';

const router = express.Router();

let datas = [
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
  res.status(200).json(datas);
});

router.post('/', (req, res, next) => {
  const newSchedule = req.body;
  datas.push(newSchedule);
  res.sendStatus(201);
});

router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const targetData = datas.find((data) => data.id == id);
  if(targetData){
    targetData.date = req.body.date ? req.body.date : targetData.date;
    targetData.title = req.body.title ? req.body.title : targetData.title;
    targetData.text = req.body.text ? req.body.text : targetData.text;
  };
  res.sendStatus(201);

});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  datas = datas.filter((data) => data.id != id);
  res.sendStatus(204);
});

export default router;