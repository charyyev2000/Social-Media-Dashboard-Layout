import React from "react";
import styled from "styled-components";
import { UpSectionData } from "./upSectionData";
import { Stats, UpSectionContainer } from "./upSectionStyles";

const UpSection = () => {
  return (
    <>
      {UpSectionData.map((data) => {
        return (
          <UpSectionContainer>
            <span style={{ background: data.top }}></span>
            <div className="admin">
              <img src={`/images/icon-${data.logo}.svg`} />
              <div>@{data.admin}</div>
            </div>
            <div className="followers">
              <h1>{data.folNumber}</h1>
              <h3>followers</h3>
            </div>
            <Stats color={data.color} className="stats">
              <div></div>
              <h4>{data.stats} Today</h4>
            </Stats>
          </UpSectionContainer>
        );
      })}
    </>
  );
};

export default UpSection;
