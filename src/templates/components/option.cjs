// option.js
/**
 * Crea la estructura JSON de una opción de respuesta.
 *
 * @param {Object} params
 * @param {string} params.groupId - ID del composition que agrupa esta respuesta (ej: "AnswerDGroup").
 * @param {string} params.optionLetter - Letra de la opción (A, B, C, D).
 * @param {string} params.track - Pista donde se ubicará. Ej: 1, 2, 3, ...
 * @param {string} params.time - Momento de aparición (ej: 0.99).
 * @param {number} params.duration - Duración de la composición en segundos (ej: 23.01).
 * @param {string} params.y - Posición vertical (ej: "75%").
 * @param {string} params.textValue - Texto que se muestra (ej: "D) 4,650 m").
 *
 * @returns {Object} Composición con shape (fondo) y texto
 */
function createOption({
  groupId,
  optionLetter,
  track = 1,
  time = 0,
  duration = 10,
  y = "75%",
  textValue = "D) 4,650 m",
}) {
  // Generamos IDs para shape y text basados en la letra
  const shapeId = `Option${optionLetter}-Box`;
  const textId = `Option${optionLetter}-Text`;

  return {
    id: groupId,
    name: `Answer${optionLetter}Group`,
    type: "composition",
    track,
    time,
    duration,
    elements: [
      {
        id: shapeId,
        name: `answer_${optionLetter.toLowerCase()}_background`,
        type: "shape",
        track: 1,
        y,
        width: "70%",
        height: "8%",
        path: "M 0 0 L 100 0 L 100 100 L 0 100 L 0 0 Z",
        fill_color: "#ec9f39",
        stroke_color: "#000000",
        stroke_width: "1.4 vmin",
        opacity: [
          { time: 0, value: "0%" },
          { time: 1, value: "100%" },
        ],
        animations: [
          {
            time: 0,
            duration: 1,
            type: "bounce",
            frequency: "2 Hz",
          },
        ],
      },
      {
        id: textId,
        name: `answer_${optionLetter.toLowerCase()}_text`,
        type: "text",
        track: 2,
        y,
        width: "70%",
        height: "8%",
        x_alignment: "50%",
        y_alignment: "50%",
        text: textValue,
        font_family: "Montserrat",
        font_weight: "600",
        font_size: "5 vmin",
        line_height: "100%",
        fill_color: "#ffffff",
        opacity: [
          { time: 0, value: "0%" },
          { time: 1, value: "100%" },
        ],
        animations: [
          {
            time: 0,
            duration: 1,
            type: "bounce",
            frequency: "2 Hz",
          },
        ],
      },
    ],
  };
}

module.exports = { createOption };