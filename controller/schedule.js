let datas = [
    {
        "id": 1,
        "date": "2022.01.17",
        "title": "운동",
        "text": "6시 운동",
      },
      {
        "id": 2,
        "date": "2022.01.17",
        "title": "술약속",
        "text": "8시 약속",
      },
      {
        "id": 3,
        "date": "2022.01.18",
        "title": "운동",
        "text": "오전 10시 운동",
      },
      {
        "id": 4,
        "date": "2022.01.19",
        "title": "도수치료",
        "text": "오후 4시",
      },
]

export async function getSchedule(req, res) {
    const date = req.query.date;
    const data = date
    ? datas.filter(data => data.date == date)
    :datas
    res.status(200).json(data);
}

export async function addSchedule(req, res){
    const newSchedule = req.body;
    datas.push(newSchedule);
    res.sendStatus(201);
}

export async function updateSchedule(req,res){
    const id = req.params.id;
    const targetData = datas.find((data) => data.id == id);
    if(targetData){
      targetData.date = req.body.date ? req.body.date : targetData.date;
      targetData.title = req.body.title ? req.body.title : targetData.title;
      targetData.text = req.body.text ? req.body.text : targetData.text;
    };
    res.sendStatus(201);
};

export async function delSchedule(req, res){
    const id = req.params.id;
    datas = datas.filter((data) => data.id != id);
    res.sendStatus(204);
};