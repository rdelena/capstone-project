import React from "react";
import Controls from "../img/GameControls.jpg";

const Description = () => {
  return (
    <div className="PressStart2P" style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <h3>Released: August 3, 2023</h3>
        <h3>Category: Action/Adventure, Fantasy, Bullet Hell</h3>
        <h3>Game Description</h3>
        <p>
          Journey to the lands of Gaoryn and find the cause of the monster invasion across the land. You play as Signus, the current caretaker of the Temple of the Sun. With his trusted Sword and Bow, battle various fantasy creature like slimes, minotaurs, etc.
        </p>
      </div>
      <h3>How to Play</h3>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={Controls}
          style={{
            height: "376px",
            width: "300",
            margin: "25px",
          }}
          alt="gamecontrols"
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>
            This game uses Keyboard and Mouse haptics. It is meant to be a Web Browser game.

            Keyboard Controls: Movement
            W: Up
            A: Left
            S: Down
            D: Right

            R: Talk to Signs & NPCs

            Switch Active Weapon:
            1: Sword
            2: Bow

            Space Bar: Dash (With Movement Keys)

            Esc: Pause Game
          </p>
          <p>
            Mouse controls:

            Right Click: Attack
            Mouse Cursor: Position Left or Right of the player with the Sword for directional Swing.
            Aim Omnidirectionally using the Mouse Cursor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
