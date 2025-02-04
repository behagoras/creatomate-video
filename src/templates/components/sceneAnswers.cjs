// sceneAnswers.js
const { createOption } = require("./option.cjs");

module.exports = (winner, answersDuration = 24, winnerDuration = 20) => {
  const fullWinnerDuration = winnerDuration + answersDuration;
  return {
    id: "QuestionGroup",
    name: "AnswersGroup",
    type: "composition",
    track: 5,
    time: 16,     // default answers start
    duration: 39, // default answers duration
    elements: [
      // Answer D
      createOption({
        groupId: "AnswerDGroup",
        optionLetter: "D",
        track: 1,
        time: 1.00,
        duration: winner === "D" ? fullWinnerDuration : (answersDuration - 1),
        y: "75%",
        textValue: "D) 4,650 m",
      }),
      // Answer C
      createOption({
        groupId: "AnswerCGroup",
        optionLetter: "C",
        track: 2,
        time: 0.66,
        duration: winner === "C" ? fullWinnerDuration : (answersDuration - .66),
        y: "65%",
        textValue: "C) 4,280 m",
      }),
      // Answer B
      createOption({
        groupId: "AnswerBGroup",
        optionLetter: "B",
        track: 3,
        time: 0.33,
        duration: winner === "B" ? fullWinnerDuration : (answersDuration - .33),
        y: "55%",
        textValue: "B) 4,460 m",
      }),
      // Answer A
      createOption({
        groupId: "AnswerAGroup",
        optionLetter: "A",
        track: 4,
        time: 0,
        duration: winner === "A" ? fullWinnerDuration : answersDuration,
        y: "45%",
        textValue: "A) 4,300 m",
      }),
    ],
  }
};