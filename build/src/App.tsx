import { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import BodyComponent from "./components/BodyComponent";
import InvertedImage from "./assets/linkedin-prof-inverted.png";
import ProfileImage from "./assets/linkedin-prof.png";

function App() {
  const [imageSource, setImageSource] = useState(ProfileImage);
  const invertImage = () => {
    setImageSource(InvertedImage);
  };
  const regularizeImage = () => {
    setImageSource(ProfileImage);
  };

  return (
    <>
      <Heading imageSrc={imageSource} />
      <BodyComponent
        invertImage={invertImage}
        regularizeImage={regularizeImage}
      />
    </>
  );
}

export default App;
