import React from "react";
import { DownSectionData } from "./downSectionData";
import { DownSectionContainer, Two } from "./downSectionStyle";

export const DownSection = () => {
  return (
    <>
      {DownSectionData.map((data) => {
        return (
          <DownSectionContainer>
            <div className="one">
              <p>{data.header}</p>
              <img src={`./images/icon-${data.logo}.svg`} />
            </div>
            <Two className="two" color={data.color}>
              <h1>{data.num}</h1>
              <div>
                <img
                  src={`./images/icon-${
                    data.color === "green" ? "up" : "down"
                  }.svg`}
                />
                <p>{data.stats}%</p>
              </div>
            </Two>
          </DownSectionContainer>
        );
      })}
    </>
  );
};
