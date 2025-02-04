module.exports = {
  id: "Composition-1",
  name: "Scene-1",
  type: "composition",
  track: 2,
  time: 4.7433, // default introduction start
  duration: 50.4004, // default question duration
  elements: [
    {
      id: "AnswersGroup",
      name: "QuestionGroup",
      type: "composition",
      track: 1,
      time: 0.65,
      elements: [
        {
          id: "question_background",
          name: "question_background",
          type: "shape",
          track: 1,
          y: "21.7982%",
          width: "90%",
          height: "33.5965%",
          path: "M 0 0 L 100 0 L 100 100 L 0 100 L 0 0 Z",
          fill_color: "#ffd600",
          stroke_color: "#000000",
          stroke_width: "1.4 vmin",
          opacity: [
            { time: 0, value: "0%" },
            { time: 0.5, value: "100%" }
          ],
          animations: [
            {
              time: 0,
              duration: 0.547,
              type: "bounce",
              frequency: "2 Hz"
            }
          ]
        },
        {
          id: "Question-Text",
          name: "question_text",
          type: "text",
          track: 2,
          y: "21.5789%",
          width: "84%",
          height: "33.1579%",
          x_alignment: "50%",
          y_alignment: "50%",
          text: "¿A cuántos metros sobre el nivel del mar se encuentra oficialmente el Nevado de Colima?",
          font_family: "Montserrat",
          font_weight: "600",
          font_size: "4.5 vmin",
          line_height: "110%",
          opacity: [
            { time: 0, value: "0%" },
            { time: 0.5, value: "100%" }
          ],
          animations: [
            {
              time: 0,
              duration: 0.5,
              type: "bounce",
              frequency: "2 Hz"
            }
          ]
        }
      ]
    }
  ]
};