require('dotenv').config();
const fs = require("fs");
const { Client } = require('creatomate');

const apiKey = process.env.API_KEY;


const TEMPLATE_JSON = fs.readFileSync(__dirname + "/templates/template2.json", "utf8");

const finalTemplate = JSON.parse(TEMPLATE_JSON);

const client = new Client(apiKey);

(async () => {
  const renders = await client.render({
    source: finalTemplate,
    modifications: {
      "Background": "https://via.assets.so/img.jpg?w=1080&h=1920&tc=blue&bg=#cecece",
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