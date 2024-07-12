import "./BodyComponent.css";
import DigitizerAudio from "../assets/DigitizerAudio.wav";
import FloatingSquares from "./FloatingSquares";
import AlienAudio from "../assets/where-are-the-aliens-site.wav";
import InvertedImage from "../assets/linkedin-prof-inverted.png";
import ProfileImage from "../assets/linkedin-prof.png";
import { useState } from "react";
const alienAudio = new Audio(AlienAudio);
const backgroundSong = new Audio(DigitizerAudio);

const beatz = [alienAudio, backgroundSong];

interface Props {
  invertImage(): void;
  regularizeImage(): void;
}

// function stop() {
//   backgroundSong.pause();
// }

const BodyComponent = ({ regularizeImage, invertImage }: Props) => {
  const [showPlayBeat1, setShowPlayBeat1] = useState(true);
  const [showPlayBeat2, setShowPlayBeat2] = useState(true);

  function playBeat(beat: HTMLAudioElement) {
    beatz.forEach((beat) => {
      beat.pause();
    });
    beat.play();
  }
  const pauseBeat = (beat: HTMLAudioElement) => {
    beatz.forEach((beat) => {
      beat.pause();
    });
  };
  return (
    <div className="BodyComponent">
      <div id="background">
        <p>
          Hello, I am a <span className="highlight">software developer</span>{" "}
          looking to bring <span className="special-highlight">altruism</span>{" "}
          and
          <span className="special-highlight"> morality</span> into tech. I am a
          graduate of <span className="highlight">Grand Circus Bootcamp</span>,
          taking their <span className="highlight">C#</span> and
          <span className="highlight"> Javascript </span> bootcamps. I am
          educated in
          <span className="highlight">
            {" "}
            HTML, CSS, Javascript, Typescript, C#, MongoDB, SQL,{" "}
          </span>
          and <span className="highlight">FireBase.</span>
        </p>
        <section className="buttons">
          {/* Beat Button */}
          {showPlayBeat1 ? (
            <button
              className="play-button"
              onClick={() => {
                setShowPlayBeat1(false);
                regularizeImage();
                document.body.classList.remove("alien-bg");
                playBeat(backgroundSong);
                setShowPlayBeat2(true);
              }}
            >
              Play Beat
            </button>
          ) : (
            <button
              id="pause1"
              className="pause"
              onClick={() => {
                pauseBeat(backgroundSong);
                setShowPlayBeat1(true);
              }}
            >
              Pause
            </button>
          )}
        </section>

        <section id="project-1">
          <h2>
            <span className="special-highlight">Pixel Village</span>
          </h2>

          <p>
            Me and my friend
            <span className="special-highlight"> Manogna </span>created a Catan
            like game where you populate a map of tiles with improveable
            buildings and gather resources. This was built using{" "}
            <span className="highlight">React, Typescript, HTML, </span>
            and <span className="highlight">CSS.</span>{" "}
          </p>
          <button>
            <a href="https://github.com/manojna18/pixelVillage/tree/main/pixelVillage">
              GitHub Repo
            </a>
          </button>
        </section>
        <section className="project-2">
          <h2>
            <span className="special-highlight">Dog World</span>
          </h2>

          <p>
            Created a fun <span className="highlight">point of sale</span>{" "}
            project with my friend{" "}
            <span className="special-highlight">Yulia.</span> This project uses{" "}
            <span className="highlight">
              Regex credit-card validation, HTML
            </span>{" "}
            and <span className="highlight"> CSS </span>
          </p>
          <button>
            <a href="https://github.com/manojna18/pixelVillage/tree/main/https://github.com/Yulia182/dog-world">
              GitHub Repo
            </a>
          </button>
        </section>
        <FloatingSquares />
        <section className="buttons">
          {/* Beat Button 2*/}
          {showPlayBeat2 ? (
            <button
              className="play-button"
              onClick={() => {
                document.body.classList.add("alien-bg");
                playBeat(alienAudio);
                setShowPlayBeat2(false);
                setShowPlayBeat1(true);

                invertImage();
              }}
            >
              Play Beat 2
            </button>
          ) : (
            <button
              id="pause2"
              className="pause"
              onClick={() => {
                document.body.classList.remove("alien-bg");
                regularizeImage();
                pauseBeat(alienAudio);
                setShowPlayBeat2(true);
              }}
            >
              Pause
            </button>
          )}
        </section>
      </div>
    </div>
  );
};

export default BodyComponent;
