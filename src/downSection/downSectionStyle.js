import styled from "styled-components";

export const DownSectionContainer = styled.section`
  margin-top: 0;
  background: ${({ theme }) => theme.content};
  color: ${({ theme }) => theme.text};
  transition: all 0.3s;
  padding: 25px;
  border-radius: 5px;
  margin-bottom: 30px;

  &:hover {
    background: ${({ theme }) => theme.hover};
  }

  .one {
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;

    img {
      border-radius: 3px;
      width: 30px;
    }

    p {
      font-size: 15px;
      color: gray;
    }
  }
`;

export const Two = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 30px;
  }

  img {
    height: min-content;
    margin-right: 5px;
  }

  div {
    display: flex;
    align-items: center;
    font-size: 13px;

    p {
      color: ${(data) => data.color};
      font-size: 15px;
    }
  }
`;
