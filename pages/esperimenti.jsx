import { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import LayoutDefault from "../layout/index";
import styles from "../styles/Esperimenti.module.scss";

export default function Esperimenti() {
  const [speed, setSpeed] = useState(5);
  const [opacity, setOpacity] = useState(0.5);
  const [size, setSize] = useState(5);
  const [number, setNumber] = useState(5);


  return (
    <LayoutDefault>
      <div className={styles.panel}>
        <label>Speed</label>
        <input
          type="range"
          name=""
          id=""
          onChange={(e) => setSpeed(e.target.value / 10)}
        />
        <label>Opacity</label>
        <input
          type="range"
          name=""
          id=""
          onChange={(e) => setOpacity(e.target.value / 100)}
        />

        <label>Size</label>
        <input
          type="range"
          name=""
          id=""
          onChange={(e) => setSize(e.target.value / 5)}
        />
        <label>Number</label>
        <input
          type="number"
          name=""
          id=""
          onChange={(e) => setNumber(e.target.value )}
        />
      </div>

      <label>Form</label>


      <div className={styles.wrapper}>
        <Particles
          options={{
            background: {
              color: {
                value: "#000000",
              },
            },
            fpsLimit: 60,
            particles: {
              color: {
                value: "#00ff00",
              },
              links: {
                color: "#00ff00",
                distance: 10,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: speed,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: number,
              },
              opacity: {
                value: opacity,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: size,
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    </LayoutDefault>
  );
}
