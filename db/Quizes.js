const {v4:uuid} = require("uuid");

const Quizes = {
  data: [
    {
      id: uuid(),
      catogary: "Math",
      title: "Math",
      images: "",
      questions: [
        {
          id: uuid(),
          question: "x+y=?,if x^2+y^2=25 and xy=24",
          option1: { id: uuid(), value: 7, isQurect: true },
          option2: { id: uuid(), value: 5, isQurect: false },
          option3: { id: uuid(), value: 9, isQurect: false },
          option4: { id: uuid(), value: 4, isQurect: false },
        },
        {
          id: uuid(),
          question: "x+y=?,if x^2+y^2=25 and xy=24",
          option1: { id: uuid(), value: 7, isQurect: true },
          option2: { id: uuid(), value: 5, isQurect: false },
          option3: { id: uuid(), value: 9, isQurect: false },
          option4: { id: uuid(), value: 4, isQurect: false },
        },
      ],
    },
  ],
};

module.exports=Quizes;