import React from "react";
import styled from "styled-components";
import { DownSection } from "./downSection/downSection";
import Toggle from "./upSection/toggle";
import UpSection from "./upSection/upSection";

const LayoutContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 3vh 10vw;
  background: ${({ theme }) => theme.body};
  transition: background 0.7s;
  -webkit-transition: background, 0.7s, ease-in;
  -moz-transition: background, 0.7s, ease-in;
  -o-transition: background, 0.7s, ease-in;
  transition: background, 0.7s, ease-in;
  color: ${({ theme }) => theme.text};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, min-content);
  column-gap: 30px;
`;

const Header = styled.div`
  grid-row: 0/1;
  grid-column: 1/-1;
  display: flex;
  justify-content: space-between;
`;

const Overview = styled.div`
  grid-row: 3/4;
  grid-column: 1 / -1;
  font-weight: 400;
`;

const Layout = ({ theme, toggleTheme }) => {
  return (
    <>
      <LayoutContainer>
        <Header>
          <div>
            <h1>Social Media Dashboard</h1>
            <p>Total Followers 53,234</p>
          </div>
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </Header>
        <UpSection />
        <Overview>
          <h1>Overview - Today</h1>
        </Overview>
        <DownSection />
      </LayoutContainer>
    </>
  );
};

export default Layout;
