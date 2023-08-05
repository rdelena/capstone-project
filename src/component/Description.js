import React from "react";
import Controls from "../img/GameControls.jpg";

const Description = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <h3>Released: TBA</h3>
        <h3>Category: Action/Adventure, Fantasy, Puzzle</h3>
        <h3>Game Description</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus repudiandae molestiae, voluptas ratione amet
          voluptatibus enim suscipit dolores ducimus possimus voluptate illum
          minus quia quisquam tempora aliquam sit architecto omnis unde? Quis,
          cum cupiditate. Reiciendis sit at sint necessitatibus sapiente
          quibusdam rerum veritatis. Corporis dolores eos aperiam quam hic
          nesciunt natus itaque temporibus minima vel earum sapiente commodi
          facere, quia quasi, molestias nisi amet at. Velit veritatis harum iure
          dignissimos sed numquam est facere minus quo voluptate nam, quibusdam
          et sit commodi similique optio adipisci esse reiciendis! Beatae, sunt
          nemo iusto dolorum architecto voluptatibus fugiat corrupti. Esse
          numquam, soluta veritatis debitis, magnam blanditiis assumenda fugit
          laboriosam vitae, repudiandae exercitationem quae facere perferendis
          possimus impedit ratione tempora at et itaque magni commodi? Velit
          suscipit quisquam reprehenderit incidunt quidem eius numquam. Eius
          nulla perspiciatis laudantium deserunt optio sapiente tenetur officia
          ad asperiores ipsam provident ex labore, error corrupti sequi
          voluptatibus praesentium iusto!
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
            veritatis distinctio dolor, debitis cupiditate temporibus dicta iste
            molestias unde quia soluta eveniet repudiandae facilis id ex magni
            omnis, natus non?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
            veritatis distinctio dolor, debitis cupiditate temporibus dicta iste
            molestias unde quia soluta eveniet repudiandae facilis id ex magni
            omnis, natus non?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
