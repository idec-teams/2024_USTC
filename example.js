import exampleimage from "./image/examplephoto.png";
const example = {
  title1: [
    {
      subtitle: "subtitle1",
      text: "text1",
    },
    { ollist: [{ text: "Li1" }, { text: "Li2" }] },
    { src: exampleimage, text: "imagetext", image_name: "world" },
  ],
  title2: [{ ollist: [{ text: "Li1" }, { text: "Li2" }, { text: "Li3" }] }],
  title3: [{ src: "nihc", text: "imagetext", image_name: "world" }],
};
export default example;
