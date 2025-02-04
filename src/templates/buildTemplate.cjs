const backgroundScene = require("./components/backgroundScene.cjs");
const sceneIntro = require("./components/sceneIntro.cjs");
const sceneAnswers = require("./components/sceneAnswers.cjs");
const sceneFinal = require("./components/sceneFinal.cjs");
const audio = require("./components/audio.cjs");

function buildTemplate({
  introductionLength,
  questionLength,
  answersLength,
  winnerLength,
  winnerOption,
}) {
  const template = {
    output_format: "mp4",
    width: 720,
    height: 1280,
    frame_rate: "60 fps",
    duration: 60,
    snapshot_time: 3.5,
    elements: [
      backgroundScene,
      sceneIntro,
      sceneAnswers(winnerOption, answersLength, winnerLength),
      sceneFinal,
      audio,
    ],
  };

  // Sobrescribir time/duration de sceneIntro
  if (typeof introductionLength === "number") {
    sceneIntro.time = introductionLength;
  }
  if (typeof questionLength === "number") {
    sceneIntro.duration = questionLength;
  }
  // Sobrescribir duration de sceneAnswers
  if (typeof answersLength === "number" && typeof winnerLength === "number") {
    sceneAnswers.duration = answersLength + winnerLength;
  }

  // Resaltar la opción ganadora
  // (similar a la lógica anterior: buscar OptionX-Box, cambiar fill_color, etc.)

  return template;
}

module.exports = { buildTemplate };