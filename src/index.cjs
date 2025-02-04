require('dotenv').config();
const fs = require("fs");
const { Client } = require('creatomate');

const apiKey = process.env.API_KEY;


const TEMPLATE_JSON = fs.readFileSync(__dirname + "/templates/template2.json", "utf8");

function getFinalTemplate(params) {
  let template = TEMPLATE_JSON;
  for (const [key, value] of Object.entries(params)) {
    const regex = new RegExp(`{{${key}}}`, "g");
    template = template.replace(regex, value);
  }
  return JSON.parse(template);
}

const params = {
  backgroundImage: "https://via.assets.so/img.jpg?w=1080&h=1920&tc=blue&bg=#cecece",
  questionText: "¿Cuál es la capital de Japón?",
  finalMessage: "¡Correcto! La respuesta es Tokio.",
};

const finalTemplate = getFinalTemplate(params);

const client = new Client(apiKey);

(async () => {
  const renders = await client.render({
    source: finalTemplate,
    modifications: {
      // "Background": "https://miservidor.com/nueva-imagen.jpg",
      "Question-Text": "¿Cuál es la capital de Japón?",
      "OptionA-Text": "A) Seúl",
      "OptionB-Text": "B) Pekín",
      "OptionC-Text": "C) Tokio",
      "OptionD-Text": "D) Kioto",
      "Final-Text": "¡Correcto! La respuesta es Tokio.",
      // "Audio": "https://miservidor.com/nuevo-audio.mp3"
    }
  });

  console.log('Render(s) creado(s):', renders);

})();