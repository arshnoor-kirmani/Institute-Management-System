import React from "react";
import SectionTitle from "./SectionTitle";

export default function HomeFiveSection({ tranings, placements }) {
  return (
    <div>
      <div>
        <SectionTitle title="Traning &" subTitle="placements" />
      </div>
      <div>
        <div id="traning">
          <div>
            <h1>Traning</h1>
          </div>
          <div id="container">
            {tranings.map((e) => (
              <div key={e.title}>
                <img src={e.img} alt={e.title} />
              </div>
            ))}
          </div>
        </div>
        <div id="placement">
          <div>
            <h1>placement</h1>
          </div>
          <div id="container">
            {placements.map((p) => (
              <div key={p.title}>
                <img src={p.imageUrl} alt={p.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
