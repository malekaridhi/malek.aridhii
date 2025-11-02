import React from "react";
import TitelHeader from "../components/TitelHeader";
import { techStackIcons } from "../constants";
import { div } from "three/tsl";
import TeckIcons from "../components/Models/teckLogos/TeckIcons";

const Teckstaks = () => {
  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitelHeader
          title="My Preferd Teck Stack"
          sub="🤝 What I Bring To The Table"
        />
        <div className="tech-grid">
          {techStackIcons.map((icon) => (
            <div
              key={icon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              {/* {icon.name} */}
              <div className="teck-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TeckIcons model={icon} />
                </div>
                <div className="padding-x w-full">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teckstaks;
