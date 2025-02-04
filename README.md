# 📌 Crear videos usando el api de creatomate

Este proyecto genera videos dinámicos utilizando **Creatomate** y permite modificar plantillas mediante variables.

---

## 📂 Estructura del Proyecto

```
creatomate-video/
│── src/
│   ├── index.cjs                # Script principal para generar los videos
│   ├── templates/
│   │   ├── template2.json       # Plantilla base para los videos
│── .env                         # Variables de entorno (NO compartir este archivo)
│── .gitignore                   # Archivos y carpetas ignoradas por Git
│── package.json                 # Dependencias y configuración del proyecto
│── README.md                    # Documentación del proyecto
```

---

## 🚀 Instalación

### 1️⃣ Clonar el repositorio
```sh
git clone https://github.com/tu-repositorio/creatomate-video.git
cd creatomate-video
```

### 2️⃣ Instalar dependencias
```sh
npm install
```

---

## 🔧 Configuración

### 1️⃣ Configurar `.env`
Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```
API_KEY=tu_api_key_de_creatomate
```

📌 **Importante:** No compartas este archivo, ya que contiene información sensible.

### 2️⃣ Configurar la plantilla (`src/templates/template2.json`)
Este archivo contiene la plantilla del video en formato JSON. Puedes modificarlo directamente o hacer cambios dinámicos con el código.

Ejemplo de parámetros modificables:
```json
{
  "Background": "https://via.assets.so/img.jpg?w=1080&h=1920",
  "Question-Text": "¿Cuál es la capital de Japón?",
  "OptionA-Text": "A) Seúl",
  "OptionB-Text": "B) Pekín",
  "OptionC-Text": "C) Tokio",
  "OptionD-Text": "D) Kioto",
  "Final-Text": "¡Correcto! La respuesta es Tokio."
}
```

---

## ▶️ Uso

### Ejecutar el script
```sh
npm start
```

El script generará un video basado en la plantilla y las modificaciones aplicadas.

---

## 📜 Notas

- **El archivo `.gitignore` ya excluye `.env` y otros archivos sensibles.**
- **Este proyecto requiere una cuenta en [Creatomate](https://creatomate.com/) y una API Key válida.**
- **Puedes cambiar dinámicamente los textos e imágenes con el objeto `modifications` en `src/index.cjs`.**