import styled from "styled-components";

export const UpSectionContainer = styled.div`
  width: minmax(min-content, 20vw);
  max-height: min-content;
  // min-height: 100px;
  background: ${({ theme }) => theme.content};
  border-radius: 5px;
  transition: background 0.5s;
  position: relative;
  padding: 20px;
  overflow: hidden;
  cursor: pointer;
  margin: 30px 0;
  // display: grid;
  // grid-template-columns: repeat(4, 1fr);
  // gap: 30px;

  &:hover {
    background: ${({ theme }) => theme.hover};
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
  }

  .admin {
    width: min-content;
    margin: auto;
    display: flex;
    align-items: center;
    color: gray;

    img {
      margin-right: 10px;
    }
  }
  .followers {
    // width: min-content;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 50px;
      font-weight: 700;
    }
    h3 {
      text-transform: uppercase;
      font-weight: 400;
      font-size: 13px;
      letter-spacing: 3px;
      color: gray;
    }
  }
`;

export const Stats = styled.div`
  width: min-content;
  margin: auto;
  position: relative;
  display: flex;
  align-items: center;
  color: ${(data) => data.color};
  font-weight: 400;

  div {
    margin-right: 5px;
    width: 0px;
    height: 0px;
    border-bottom: 10px solid;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    // transform: rotate(180deg);
    transform: ${(data) =>
      data.color === "red" ? "rotate(180deg)" : "rotate(0deg)"};
  }

  h4 {
    white-space: nowrap;
  }
`;
