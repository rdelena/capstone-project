import React from "react";
import ControlImg from "../img/GameControls.jpg";

const Controls = () => {
  return (
    <div>
      <h4>How to Play:</h4>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "1100px",
        }}
      >
        <img
          src={ControlImg}
          style={{
            height: "376px",
            width: "300",
            margin: "25px",
          }}
          alt="gamecontrols"
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <section>
            <h5>
              This game is designed for play using a keyboard and mouse in a web
              browser.
            </h5>
          </section>

          <section>
            <h4>Keyboard Controls:</h4>
            <p>Movement: W:Up, A:Left, S:Down, D:Right</p>
            <p>Switch Active Weapon: 1:Sword, 2:Bow</p>
            <p>Space Bar:Dash (With Movement Keys)</p>
            <p>Esc: Pause Game, R: Talk to Signs & NPCs</p>
          </section>

          <section>
            <h4>Mouse Controls:</h4>
            <p>Right Click: Attack</p>
            <p>
              Mouse Cursor: Position Left or Right of the player with the Sword
              for directional Swing.
            </p>
            <p>Aim Omnidirectionally using the Mouse Cursor using the Bow.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Controls;
