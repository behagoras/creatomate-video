module.exports = (winner)=>({
  id: "Composition-4",
  name: "Scene-4",
  type: "composition",
  track: 6,
  time: 55,
  duration: 5.2556,
  animations: [
    {
      time: 0,
      duration: 0.5,
      type: "fade",
      fade: true
    }
  ],
  elements: [
    {
      id: "Final-Text-Box",
      type: "shape",
      track: 1,
      width: "70%",
      height: "15%",
      path: "M 0 0 L 100 0 L 100 100 L 0 100 L 0 0 Z",
      fill_color: "#ffd600",
      stroke_color: "#000000",
      stroke_width: "1.4 vmin",
      animations: [
        {
          time: 0.5,
          duration: 2,
          type: "bounce",
          frequency: "2 Hz"
        }
      ]
    },
    {
      id: "Final-Text",
      type: "text",
      track: 2,
      width: "70%",
      height: "15%",
      x_alignment: "50%",
      y_alignment: "50%",
      text: "¡Lo lograste!",
      font_family: "Montserrat",
      font_weight: "600",
      font_size: "6 vmin",
      line_height: "110%",
      fill_color: "#ffffff",
      stroke_color: "#000000",
      stroke_width: "0.8 vmin",
      animations: [
        {
          time: 0.5,
          duration: 2,
          type: "bounce",
          frequency: "2 Hz"
        }
      ]
    }
  ]
});