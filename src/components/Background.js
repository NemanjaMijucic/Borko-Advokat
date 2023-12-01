import * as React from "react";
import { styled } from "@mui/system";

const imageURL =
  "https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg";
const Background = styled("div")({
  position: "absolute",
  width: "100%",
  height: "100%",
  backgroundImage: `url(${imageURL})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
});

export default function App() {
  return <Background />;
}
