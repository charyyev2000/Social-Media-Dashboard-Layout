import React from "react";
import styled from "styled-components";

const ToggleContainer = styled.div`
  color: ${({ theme }) => theme.text};
  transition: color 0.5s;
  z-index: 10;
  display: flex;
  align-items: center;
`;

const ToggleButton = styled.div`
  width: 40px;
  height: 20px;
  background: ${({ theme }) => theme.toggle};
  margin-left: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 2px;

  span {
    background: white;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    transition: all 0.3s;
  }
  .toggled {
    transform: translateX(100%);
    background: hsl(230, 17%, 14%);
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <>
      <ToggleContainer onClick={toggleTheme}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
        <ToggleButton>
          <span className={theme === "light" ? "toggled" : ""}></span>
        </ToggleButton>
      </ToggleContainer>
    </>
  );
};

export default Toggle;
